'use strict';

const { categories, plants } = require('./plants.seed-data');

function assertExternalImageUrl(url, plantId) {
  if (!url) throw new Error(`[seed] Plant "${plantId}" missing image url`);
  if (url.startsWith('/') || url.startsWith('./') || url.startsWith('..')) {
    throw new Error(`[seed] Plant "${plantId}" uses local image path: ${url}`);
  }
  if (!/^https?:\/\//i.test(url)) {
    throw new Error(`[seed] Plant "${plantId}" image url not http(s): ${url}`);
  }
}

async function main() {
  // IMPORTANT: Strapi 5 uses compileStrapi/createStrapi exports
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  const CATEGORY_UID = 'api::plant-category.plant-category';
  const PLANT_UID = 'api::plant.plant';

  try {
    console.log(`[seed] categories=${categories.length}, plants=${plants.length}`);

    // 1) Upsert categories
    for (const c of categories) {
      const existing = await strapi.documents(CATEGORY_UID).findMany({
        filters: { plantCategoryID: c.id },
        limit: 1,
        status: 'published',
      });

      if (!existing || existing.length === 0) {
        await strapi.documents(CATEGORY_UID).create({
          data: {
            plantCategoryID: c.id,
            name: c.name,
            description: c.description,
            icon: c.icon,
            color: c.color,
          },
          status: 'published',
        });
      }
    }

    // Map categoryKey -> DB id
    const allCats = await strapi.documents(CATEGORY_UID).findMany({
      fields: ['id', 'plantCategoryID', 'name'],
      limit: 100,
      status: 'published',
    });

    const catMap = new Map();
    for (const cat of allCats) catMap.set(cat.plantCategoryID, cat.id);

    // 2) Upsert plants
    for (const p of plants) {
      assertExternalImageUrl(p.image, p.id);

      const existing = await strapi.documents(PLANT_UID).findMany({
        filters: { plantID: p.id },
        limit: 1,
        status: 'published',
      });

      if (existing && existing.length > 0) continue;

      const categoryId = catMap.get(p.category);
      if (!categoryId) {
        throw new Error(`[seed] Category not found for plant "${p.id}": ${p.category}`);
      }

      await strapi.documents(PLANT_UID).create({
        data: {
          plantID: p.id,
          name: p.name,
          scientificName: p.scientificName,
          shortDescription: p.shortDescription,
          description: p.description,
          imageUrl: p.image,
          benefits: p.benefits ?? [],
          careTips: p.careTips ?? {},
          difficulty: p.difficulty ?? 'easy',
          tags: p.tags ?? [],
          growthTime: p.growthTime ?? null,
          size: p.size ?? null,
          plant_category: categoryId,
        },
        status: 'published',
      });
    }

    console.log('[seed] done');
  } finally {
    await strapi.destroy();
    process.exit(0);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

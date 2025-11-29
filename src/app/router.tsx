import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "../pages/Home";
import ModulList from "../pages/ModulList";   // Halaman Daftar Modul Haryo
import ModulDetail from "../pages/ModulDetail"; // Halaman Player Modul Haryo

// Import halaman teman lain (biarkan saja/comment kalau belum ada)
// import ProfilTanaman from "../pages/ProfilTanaman";
// import TutorialList from "../pages/TutorialList"; // Punya Affan

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // --- WILAYAH HARYO (MODUL) ---
      {
        path: "/modul",         // Jalur khusus modul
        element: <ModulList />,
      },
      {
        path: "/modul/:id",     // Jalur masuk ke dalam player modul
        element: <ModulDetail />,
      },
      // -----------------------------
      
      // Route Punya Teman (Contoh)
      // { path: "/tanaman", element: <ProfilTanaman /> },
      // { path: "/tutorial", element: <TutorialList /> }, // Punya Affan
      // { path: "/forum", element: <Forum /> },
    ],
  },
  {
    path: "/login",
    element: <div>Halaman Login</div>,
  }
]);

export default router;
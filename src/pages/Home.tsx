import React, { useState, useMemo } from 'react';

// --- THEME & STYLING (from src/index.css) ---
// These are the theme tokens you provided.
const theme = {
  colors: {
    primary: '#1E40AF',     // text-blue-800
    secondary: '#06B6D4',   // text-cyan-500
    accent: '#F59E0B',      // text-amber-500
    background: '#F8FAFC',  // bg-slate-50
    text: '#0F172A',         // text-slate-900
  },
  font: {
    family: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif",
  },
  borderRadius: '8px', // rounded-lg
  spacing: {
    xs: '4px',  // p-1
    sm: '8px',  // p-2
    md: '12px', // p-3
    lg: '16px', // p-4
    xl: '24px', // p-6
    '2xl': '32px', // p-8
  },
};

// --- ICON COMPONENTS (Mock Icons) ---
// Using simple SVG for icons as requested
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c0 0 .152-1.06 1.03-3.037 1.432-2.977 2.92-6.175 2.92-9.186 0-2.036-1.026-3.83-2.58-4.912C12.7.41 12.353 0 12 0s-.7.41-1.37.963C8.966 2.053 8 3.846 8 5.877c0 3.01.988 6.209 2.92 9.186C11.848 16.94 12 18 12 18z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.009v11.982m0-11.982a.75.75 0 0 1 .118-.423l.638-.958a.75.75 0 0 1 1.06 1.06l-.638.958a.75.75 0 0 1-.118.423m-1.06-1.06a.75.75 0 0 0-.118-.423l-.638-.958a.75.75 0 0 0-1.06 1.06l.638.958a.75.75 0 0 0 .118.423m1.06-1.06-2.188 3.282m0 0a1.5 1.5 0 1 0-2.121 2.121 1.5 1.5 0 0 0 2.121-2.121m0 0 2.188 3.282m0 0a1.5 1.5 0 1 0 2.121 2.121 1.5 1.5 0 0 0-2.121-2.121m0 0-2.188-3.282m2.188 3.282 2.188-3.282" />
  </svg>
);

const VideoCameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L21.75 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L15 12l2.846.813a4.5 4.5 0 0 0 3.09 3.09L21.75 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L18.25 12Z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);


// --- REUSABLE COMPONENTS (from src/components) ---

/**
 * IconButton: A simple icon button
 */
const IconButton = ({ icon, onClick, label = 'Button' }) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="p-2 text-slate-600 hover:text-blue-800 rounded-full hover:bg-blue-100 transition-colors duration-200"
    >
      {icon}
    </button>
  );
};

/**
 * Card: A versatile card component
 */
const Card = ({ title, children, className = '', footer }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`} style={{ borderColor: theme.colors.primary }}>
      {title && (
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
      {footer && (
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          {footer}
        </div>
      )}
    </div>
  );
};

/**
 * DataTable: Renders a simple table for requirements
 */
const DataTable = ({ headers, data, keyPrefix = 'row' }) => {
  return (
    <div className="overflow-x-auto shadow-sm rounded-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200 bg-white">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header) => (
              <th key={header.key} scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {data.map((row, rowIndex) => (
            <tr key={`${keyPrefix}-${rowIndex}`} className="hover:bg-slate-50">
              {headers.map((header) => (
                <td key={header.key} className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                  {row[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Timeline: Visualizes the steps of a use case
 */
const Timeline = ({ steps }) => {
  return (
    <ol className="relative border-l border-cyan-500 ml-4">
      {steps.map((step, index) => (
        <li key={index} className="mb-6 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white">
            <span className="font-bold text-cyan-800">{index + 1}</span>
          </span>
          <p className="text-sm font-normal text-slate-700">{step}</p>
        </li>
      ))}
    </ol>
  );
};

/**
 * Form: A mock form for plant recommendations
 */
const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  
  const FormField = ({ label, type = 'text', id, options }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">{label}</label>
      {type === 'select' ? (
        <select id={id} name={id} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
      ) : (
        <input type={type} id={id} name={id} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField id="lokasi" label="Lokasi Anda" type="select" options={['Dataran Rendah', 'Dataran Tinggi']} />
      <FormField id="cahaya" label="Intensitas Cahaya" type="select" options={['Penuh (Full Sun)', 'Sebagian (Partial Shade)', 'Teduh (Full Shade)']} />
      <FormField id="waktu" label="Waktu Luang Perawatan" type="select" options={['Rendah (1-2x/minggu)', 'Sedang (3-4x/minggu)', 'Tinggi (Setiap hari)']} />
      <FormField id="tanah" label="Jenis Tanah (Opsional)" />
      
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Dapatkan Rekomendasi
      </button>
    </form>
  );
};

/**
 * Modal: A simple modal component
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full m-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};


// --- LAYOUT COMPONENTS (from src/layouts) ---

/**
 * Header: Site-wide header and navigation
 */
const Header = ({ onNavigate }) => {
  const NavLink = ({ page, label }) => (
    <button
      onClick={() => onNavigate(page)}
      className="text-sm font-medium text-slate-700 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
    >
      {label}
    </button>
  );

  return (
    <header className="bg-white shadow-sm" style={{ fontFamily: theme.font.family }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-full" style={{ backgroundColor: theme.colors.primary, color: 'white' }}>
              <LeafIcon />
            </span>
            <span className="font-bold text-xl text-blue-800">Si-Kebun</span>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            <NavLink page="home" label="Home" />
            <NavLink page="features" label="Features" />
            <NavLink page="requirements" label="Requirements" />
          </div>
        </div>
      </nav>
    </header>
  );
};

/**
 * Footer: Site-wide footer
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-500" style={{ fontFamily: theme.font.family }}>
          &copy; {new Date().getFullYear()} Si-Kebun (Kelompok 1). Built as a demo.
        </p>
      </div>
    </footer>
  );
};

/**
 * Layout: Main page layout wrapper
 */
const Layout = ({ children, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <Header onNavigate={onNavigate} />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};


// --- PAGE COMPONENTS (from src/pages) ---

/**
 * HomePage: The main landing page
 */
const HomePage = ({ onNavigate, features, onSelectUseCase }) => {
  const getIcon = (id) => {
    if (id === 'f1') return <VideoCameraIcon />;
    if (id === 'f7') return <SparklesIcon />;
    if (id === 'f3') return <BookOpenIcon />;
    return <LeafIcon />;
  };

  return (
    <div className="px-4 py-6" style={{ fontFamily: theme.font.family }}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Selamat Datang di <span style={{ color: theme.colors.primary }}>Si-Kebun</span>
        </h1>
        <p className="text-xl text-slate-600">Aplikasi Edukasi Berkebun untuk Hobi Anda.</p>
      </div>
      
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Fitur Utama</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.slice(0, 6).map(feature => (
          <div 
            key={feature.id} 
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-2 rounded-full" style={{ backgroundColor: theme.colors.secondary, color: 'white' }}>
                {getIcon(feature.id)}
              </span>
              <h3 className="text-lg font-semibold text-blue-800">{feature.title}</h3>
            </div>
            <p className="text-sm text-slate-600 flex-grow mb-4">{feature.description}</p>
            <button
              onClick={() => {
                onNavigate('use-case');
                onSelectUseCase(feature.relatedUseCases[0]);
              }}
              className="text-sm font-medium text-cyan-600 hover:text-cyan-800 self-start"
            >
              Lihat Alur Kerja &rarr;
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => onNavigate('features')}
          className="py-2 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Lihat Semua Fitur
        </button>
      </div>
    </div>
  );
};

/**
 * FeaturePage: Displays all features as cards
 */
const FeaturePage = ({ features, onSelectUseCase, onNavigate }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'Planned': return 'bg-blue-100 text-blue-800';
      case 'In Development': return 'bg-cyan-100 text-cyan-800';
      case 'Concept': return 'bg-purple-100 text-purple-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Daftar Fitur</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(feature => (
          <Card key={feature.id} title={feature.title} className="flex flex-col">
            <div className="flex-grow">
              <p className="text-sm text-slate-600 mb-4">{feature.description}</p>
              <div className="flex space-x-2 mb-4">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getPriorityClass(feature.priority)}`}>
                  Prioritas: {feature.priority}
                </span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getStatusClass(feature.status)}`}>
                  Status: {feature.status}
                </span>
              </div>
            </div>
            <div className="mt-auto">
              {feature.relatedUseCases.map(ucId => (
                <button
                  key={ucId}
                  onClick={() => {
                    onNavigate('use-case');
                    onSelectUseCase(ucId);
                  }}
                  className="text-sm font-medium text-blue-800 hover:text-blue-600"
                >
                  Lihat Use Case &rarr;
                </button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

/**
 * UseCasePage: Displays details for a single use case
 */
const UseCasePage = ({ useCase, onBack }) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  if (!useCase) {
    return (
      <div className="px-4 py-6 text-center">
        <p className="text-slate-600">Pilih use case untuk melihat detail.</p>
        <button
          onClick={onBack}
          className="mt-4 text-sm font-medium text-blue-800 hover:text-blue-600"
        >
          &larr; Kembali ke Fitur
        </button>
      </div>
    );
  }

  const renderFlows = (title, flows) => (
    <div className="mb-6">
      <h4 className="text-md font-semibold text-slate-700 mb-2">{title}</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
        {flows.map((flow, i) => <li key={i}>{flow}</li>)}
      </ul>
    </div>
  );

  return (
    <div className="px-4 py-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-sm font-medium text-blue-800 hover:text-blue-600 mb-4"
      >
        <ArrowLeftIcon />
        <span>Kembali</span>
      </button>
      
      <h1 className="text-3xl font-bold text-slate-900 mb-4">{useCase.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="Aktor" className="bg-blue-50"><p>{useCase.primaryActor} {useCase.supportingActors.length > 0 && `(Support: ${useCase.supportingActors.join(', ')})`}</p></Card>
        <Card title="Goal" className="bg-cyan-50"><p>{useCase.goal}</p></Card>
        <Card title="Trigger" className="bg-amber-50"><p>{useCase.trigger}</p></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Detail Alur Kerja</h3>
          <Card>
            <div className="mb-6">
              <h4 className="text-md font-semibold text-slate-700 mb-2">Pre-Conditions</h4>
              <p className="text-sm text-slate-600">{useCase.preConditions.join(', ')}</p>
            </div>
            {renderFlows('Alternative / Exception Flows', useCase.alternativeFlows)}
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Main Flow (Timeline)</h3>
          <Timeline steps={useCase.mainFlow} />
        </div>
      </div>
      
      {/* Demo Interaktif untuk Use Case Tertentu */}
      {useCase.id === 'uc7' && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Demo: Form Rekomendasi</h3>
          <Card>
            <Form onSubmit={() => setShowModal(true)} />
          </Card>
          <Modal title="Rekomendasi Tanaman" isOpen={showModal} onClose={() => setShowModal(false)}>
            <p className="text-sm text-slate-600 mb-4">Berdasarkan input Anda, berikut adalah tanaman yang kami rekomendasikan:</p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-slate-700 font-medium">Lidah Mertua (Snake Plant)</li>
              <li className="text-slate-700 font-medium">Monstera Deliciosa</li>
              <li className="text-slate-700 font-medium">Kaktus Hias</li>
            </ul>
          </Modal>
        </div>
      )}
    </div>
  );
};

/**
 * RequirementsPage: Displays all requirements in tabs
 */
const RequirementsPage = ({ requirements }) => {
  const [activeTab, setActiveTab] = useState('business');
  
  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`py-2 px-4 text-sm font-medium border-b-2 ${
        activeTab === id
          ? 'border-blue-800 text-blue-800'
          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
      }`}
    >
      {label}
    </button>
  );

  const bizReqHeaders = [
    { key: 'type', label: 'Tipe' },
    { key: 'description', label: 'Deskripsi' },
    { key: 'acceptanceCriteria', label: 'Acceptance Criteria' },
  ];
  
  const funcReqHeaders = [
    { key: 'module', label: 'Modul' },
    { key: 'userStory', label: 'User Story' },
    { key: 'acceptanceCriteria', label: 'Acceptance Criteria' },
  ];
  
  const nonFuncReqHeaders = [
    { key: 'category', label: 'Kategori' },
    { key: 'requirement', label: 'Kebutuhan' },
    { key: 'metric', label: 'Metrik' },
    { key: 'severity', label: 'Severity' },
  ];
  
  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-amber-100 text-amber-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };
  
  // Add severity badge to NFR data
  const nfrData = requirements.nonFunctionalRequirements.map(req => ({
    ...req,
    severity: (
      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getSeverityClass(req.severity)}`}>
        {req.severity}
      </span>
    )
  }));

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Requirements Dashboard</h1>
      
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex space-x-4" aria-label="Tabs">
          <TabButton id="business" label="Business Requirements" />
          <TabButton id="functional" label="Functional Requirements" />
          <TabTampilin id="non-functional" label="Non-Functional Requirements" />
        </nav>
      </div>

      <div>
        {activeTab === 'business' && (
          <Card title="Business & Market Requirements">
            <DataTable headers={bizReqHeaders} data={requirements.businessRequirements} keyPrefix="br" />
          </Card>
        )}
        {activeTab === 'functional' && (
          <Card title="Functional Requirements (User Stories)">
            <DataTable headers={funcReqHeaders} data={requirements.functionalRequirements} keyPrefix="fr" />
          </Card>
        )}
        {activeTab === 'non-functional' && (
          <Card title="Non-Functional Requirements">
            <DataTable headers={nonFuncReqHeaders} data={nfrData} keyPrefix="nfr" />
          </Card>
        )}
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT (from src/App.jsx) ---

export default function App() {
  const [page, setPage] = useState('home'); // 'home', 'features', 'use-case', 'requirements'
  const [selectedUseCaseId, setSelectedUseCaseId] = useState(null);
  
  // Data from the model
  const { features, useCases, ...requirements } = pdfModel;
  
  // Memoized value for the currently selected use case
  const selectedUseCase = useMemo(() => {
    return useCases.find(uc => uc.id === selectedUseCaseId) || null;
  }, [selectedUseCaseId, useCases]);
  
  // Navigation handler
  const handleNavigate = (targetPage) => {
    setPage(targetPage);
    // Reset use case selection when navigating away
    if (targetPage !== 'use-case') {
      setSelectedUseCaseId(null);
    }
  };
  
  // Use case selection handler
  const handleSelectUseCase = (ucId) => {
    setSelectedUseCaseId(ucId);
  };
  
  // State-based page renderer (replaces React Router)
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} features={features} onSelectUseCase={handleSelectUseCase} />;
      case 'features':
        return <FeaturePage features={features} onSelectUseCase={handleSelectUseCase} onNavigate={handleNavigate} />;
      case 'use-case':
        return <UseCasePage useCase={selectedUseCase} onBack={() => handleNavigate('features')} />;
      case 'requirements':
        return <RequirementsPage requirements={requirements} />;
      default:
        return <HomePage onNavigate={handleNavigate} features={features} onSelectUseCase={handleSelectUseCase} />;
    }
  };

  return (
    <div style={{ fontFamily: theme.font.family }}>
      <Layout onNavigate={handleNavigate}>
        {renderPage()}
      </Layout>
    </div>
  );
}
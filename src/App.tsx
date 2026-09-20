import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/public/Navbar';
import { Footer } from './components/public/Footer';
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { ActiveIncidents } from './pages/public/ActiveIncidents';
import { IncidentDetails } from './pages/public/IncidentDetails';
import { EmergencyInformation } from './pages/public/EmergencyInformation';
import { ReportIncident } from './pages/public/ReportIncident';

// Scroll to top on route change component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/incidents" element={<ActiveIncidents />} />
            <Route path="/incidents/:id" element={<IncidentDetails />} />
            <Route path="/emergency-info" element={<EmergencyInformation />} />
            <Route path="/report" element={<ReportIncident />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

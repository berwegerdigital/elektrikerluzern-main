import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
// Lazy load pages for better initial performance
const Home = React.lazy(() => import('./pages/Home'));
const ServicePage = React.lazy(() => import('./pages/ServicePage'));
const RegionPage = React.lazy(() => import('./pages/RegionPage'));
const AllCompanies = React.lazy(() => import('./pages/AllCompanies'));
const Partner = React.lazy(() => import('./pages/Partner'));
const AnfragePage = React.lazy(() => import('./pages/AnfragePage'));
const Impressum = React.lazy(() => import('./pages/Impressum'));

// Add scroll to top behavior on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/:slug" element={<ServicePage />} />
              <Route path="/region/:slug" element={<RegionPage />} />
              <Route path="/alle-elektriker" element={<AllCompanies />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/kontakt" element={<AnfragePage />} />
              {/* Redirect old emergency route to home */}
              <Route path="/notfall" element={<Navigate to="/" replace />} />
              <Route path="/company/*" element={<Navigate to="/kontakt" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;
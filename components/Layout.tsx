import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICES, REGIONS } from '../services/data';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();



  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[var(--bg-site)] text-[var(--text-dark)]">

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center gap-8">
            {/* Logo - UPDATED */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">

              <span className="font-bold text-2xl tracking-tight font-display">
                <span className="text-[#0f172a]">Elektriker</span><span className="text-[#005eb8]">Luzern</span>
              </span>
            </Link>



            {/* Desktop Nav Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/alle-elektriker"
                className={`text-sm font-bold px-4 py-2 rounded-full transition ${isActive('/alle-elektriker') ? 'bg-blue-50 text-[var(--primary)]' : 'text-slate-600 hover:bg-slate-50 hover:text-[var(--primary)]'}`}
              >
                Alle Firmen
              </Link>
              <Link
                to="/partner"
                className="bg-[var(--primary)] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                Partner werden
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-700 hover:text-[var(--primary)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Secondary Nav Row (Desktop) */}
          <nav className="hidden md:flex space-x-1 items-center mt-4 text-sm font-medium border-t border-slate-100 pt-1">
            <Link to="/" className={`px-4 py-3 border-b-2 transition ${isActive('/') ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-transparent text-slate-600 hover:text-[var(--primary)]'}`}>Startseite</Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="px-4 py-3 flex items-center gap-1 text-slate-600 hover:text-[var(--primary)] border-b-2 border-transparent hover:border-slate-200">
                Lösungen & Services <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 mt-0 w-72 bg-white shadow-xl rounded-b-lg py-3 hidden group-hover:block border border-slate-100 z-50">
                {SERVICES.map(service => (
                  <Link key={service.id} to={`/service/${service.slug}`} className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-[var(--primary)] hover:pl-8 transition-all">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Regions Dropdown */}
            <div className="relative group">
              <button className="px-4 py-3 flex items-center gap-1 text-slate-600 hover:text-[var(--primary)] border-b-2 border-transparent hover:border-slate-200">
                Regionen <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-b-lg py-3 hidden group-hover:block border border-slate-100 z-50">
                {REGIONS.map(region => (
                  <Link key={region.slug} to={`/region/${region.slug}`} className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-[var(--primary)] hover:pl-8 transition-all">
                    {region.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl absolute w-full z-40 top-full max-h-[85vh] overflow-y-auto">

            <Link to="/" className="block text-slate-800 font-bold text-lg py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Startseite</Link>

            <div className="space-y-3 pt-2">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Lösungen</span>
              <div className="pl-4 border-l-2 border-[var(--primary)] space-y-3">
                {SERVICES.map(service => (
                  <Link key={service.id} to={`/service/${service.slug}`} className="block text-sm text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Regionen</span>
              <div className="pl-4 border-l-2 border-[#fbbf24] space-y-3">
                {REGIONS.map(region => (
                  <Link key={region.slug} to={`/region/${region.slug}`} className="block text-sm text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                    {region.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link to="/partner" className="block w-full text-center bg-[var(--primary)] text-white font-bold py-3 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Partner werden
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-slate-300 py-16 mt-auto border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">elektrikerluzern.ch</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Die führende Plattform für professionelle Elektro-Dienstleistungen in der Zentralschweiz. Wir verbinden Kunden mit qualifizierten Fachbetrieben für höchste Qualität.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-[var(--primary)] pl-3 font-display">Services</h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 5).map(s => (
                <li key={s.id}><Link to={`/service/${s.slug}`} className="hover:text-white hover:underline transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-[#fbbf24] pl-3 font-display">Top Regionen</h3>
            <ul className="space-y-3 text-sm">
              {REGIONS.slice(0, 5).map(r => (
                <li key={r.slug}><Link to={`/region/${r.slug}`} className="hover:text-white hover:underline transition-colors">{r.name}</Link></li>
              ))}
              <li><Link to="/alle-elektriker" className="hover:text-white font-bold text-[var(--primary)] mt-2 inline-block">Alle anzeigen &rarr;</Link></li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-white font-display">Für Firmen</h3>
            <p className="text-sm mb-4">Sind Sie ein Elektro-Fachbetrieb im Kanton Luzern? Melden Sie sich für einen Eintrag.</p>
            <Link to="/partner" className="block text-center bg-white text-[#0f172a] font-bold px-6 py-3 rounded hover:bg-gray-100 transition shadow-lg">
              Eintrag anfragen
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} elektrikerluzern.ch - Ein Service von Berweger Solutions.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/partner" className="hover:text-white">Partner werden</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
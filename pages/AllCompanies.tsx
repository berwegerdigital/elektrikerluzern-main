import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANIES } from '../services/data';

const AllCompanies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = COMPANIES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.zip?.includes(searchTerm) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Alle Elektriker Zentralschweiz | Das vollständige Verzeichnis"
        description="Liste aller Elektriker und Installationsfirmen in der Zentralschweiz und Kanton Luzern. Finden Sie den passenden Partner für Ihr Projekt."
      />
      
      <div className="bg-[#0f172a] py-16 border-b border-slate-800 text-white">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight font-display">Alle Elektriker Zentralschweiz</h1>
            <p className="text-slate-300 max-w-2xl text-lg mb-10 leading-relaxed">
                Das umfassendste Verzeichnis für Elektro-Fachbetriebe. Filtern Sie nach Namen, Ort oder Postleitzahl.
            </p>

            <div className="relative max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={22} className="text-slate-400" />
                </div>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Suchen nach Firmenname, PLZ oder Ort..." 
                    className="block w-full pl-12 pr-4 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white/20 transition text-lg"
                />
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 min-h-[50vh]">
        <div className="flex justify-between items-center mb-8">
            <div className="text-slate-500 font-medium">
                {filteredCompanies.length} Fachbetriebe gefunden
            </div>
        </div>

        {/* Updated grid to use new custom classes */}
        <div className="directory-grid">
            {filteredCompanies.map(company => (
                <div key={company.id} className="member-card">
                    <div>
                        <span className="badge">
                            {company.zip} {company.city}
                        </span>
                        
                        <h2 className="member-name">{company.name}</h2>
                        
                        <div className="member-info">
                            {company.address}
                        </div>
                    </div>
                    
                    <Link 
                        to={`/company/${company.slug}`}
                        className="btn-contact"
                    >
                        Profil ansehen
                    </Link>
                </div>
            ))}
        </div>

        {filteredCompanies.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={32} className="text-slate-300" />
                </div>
                <p className="text-slate-500 text-lg font-medium">Keine Ergebnisse für "{searchTerm}" gefunden.</p>
                <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-[var(--primary)] font-bold hover:underline"
                >
                    Suche zurücksetzen
                </button>
            </div>
        )}
      </div>
    </>
  );
};

export default AllCompanies;
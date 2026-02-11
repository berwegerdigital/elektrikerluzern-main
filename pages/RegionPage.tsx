import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { COMPANIES, REGIONS } from '../services/data';

const RegionPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const region = REGIONS.find(r => r.slug === slug);

    if (!region) {
        return <Navigate to="/alle-elektriker" replace />;
    }

    // Filter companies by the assigned region slug
    const regionCompanies = COMPANIES.filter(c => c.region === region.slug);

    return (
        <>
            <SEO
                title={`Elektriker in ${region.name} | Experten für Elektroinstallation`}
                description={`Finden Sie die besten Elektroinstallateure in ${region.name} (${region.zip}). Verzeichnis der Fachbetriebe in der Zentralschweiz.`}
            />

            {/* Header Section */}
            <div className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center gap-3 text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">
                        <div className="p-2 bg-blue-50 rounded-full"><MapPin size={18} /></div>
                        <span>Region {region.name}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] mb-6 font-display">Elektriker in {region.name}</h1>
                    <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                        Übersicht der Fachbetriebe für Elektroinstallationen in {region.name} und Umgebung. Finden Sie den kompetenten Partner für Ihr Vorhaben.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-4 border-b border-slate-200 gap-4">
                    <h2 className="text-2xl font-bold text-[#0f172a] font-display">Gelistete Unternehmen ({regionCompanies.length})</h2>
                    <Link to="/alle-elektriker" className="text-sm font-bold text-[var(--primary)] hover:underline bg-blue-50 px-4 py-2 rounded-full">
                        Gesamtes Verzeichnis ansehen
                    </Link>
                </div>

                <div className="directory-grid">
                    {regionCompanies.map(company => (
                        <div key={company.id} className="member-card">
                            <div>
                                <span className="badge">
                                    {company.zip} {company.city}
                                </span>

                                <h3 className="member-name">{company.name}</h3>

                                <div className="member-info">
                                    {company.address}
                                </div>
                            </div>
                            <Link
                                to="/partner"
                                className="btn-contact"
                            >
                                Offerte anfragen
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Block */}
                <div className="mt-24 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-12 text-center rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-6 font-display">Sie suchen Experten für ein Grossprojekt?</h3>
                        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                            Unser Netzwerk verbindet Sie mit den führenden Elektro-Unternehmen der Zentralschweiz. Gerne leiten wir Ihre Anfrage weiter.
                        </p>
                        <Link to="/partner" className="inline-block bg-[#ff6600] text-white font-bold py-4 px-12 rounded-lg hover:bg-[#e65c00] transition shadow-lg">
                            Kontakt aufnehmen
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegionPage;
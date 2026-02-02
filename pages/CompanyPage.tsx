import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin, Mail, ArrowLeft, Info, Globe, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import LeadModal from '../components/LeadModal';
import { COMPANIES } from '../services/data';

const CompanyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const company = COMPANIES.find(c => c.slug === slug);

  if (!company) {
    return <Navigate to="/alle-elektriker" replace />;
  }

  return (
    <>
      <SEO 
        title={`${company.name} – Elektriker in ${company.location}`}
        description={`Details zum Elektro-Fachbetrieb ${company.name} in ${company.location}. Jetzt kostenlos Offerte anfragen über unser Verzeichnis.`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Electrician",
          "name": company.name,
          "url": company.website,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": company.address,
            "postalCode": company.zip,
            "addressLocality": company.city,
            "addressRegion": "LU",
            "addressCountry": "CH"
          }
        }}
      />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        companyName={company.name}
        location={company.location}
      />

      {/* Breadcrumbs with darker background */}
      <div className="bg-slate-100 border-b border-slate-200 py-4">
        <div className="container mx-auto px-4 text-sm text-slate-500 flex items-center gap-2">
            <Link to="/" className="hover:text-[#005eb8]">Startseite</Link> / 
            <Link to="/alle-elektriker" className="hover:text-[#005eb8]">Alle Elektriker</Link> / 
            <span className="text-slate-800 font-medium">{company.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
            <Link to="/alle-elektriker" className="text-[#005eb8] text-sm flex items-center hover:underline font-bold">
                <ArrowLeft size={16} className="mr-2"/> Zurück zum Verzeichnis
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-2">
                <div className="bg-white rounded-lg border border-slate-200 p-8 md:p-10 shadow-lg">
                    <div className="mb-10 border-b border-slate-100 pb-8">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{company.name}</h1>
                            <div className="inline-flex items-center text-[#005eb8] bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold border border-blue-100">
                                <MapPin size={16} className="mr-2" />
                                <span>{company.location}, Zentralschweiz</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-l-4 border-[#005eb8] shadow-inner mb-8">
                        <div className="flex gap-5">
                            <div className="bg-white p-3 rounded-full h-fit shadow-sm text-[#005eb8] hidden sm:block">
                                <Info size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#005eb8] mb-3">Kostenlose Offerte anfordern</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Über unser zentrales Fachportal erreichen Sie qualifizierte Partner für Ihr Anliegen. Fordern Sie jetzt kostenlos und unverbindlich eine Offerte oder eine Beratung durch Experten an.
                                </p>
                                <button 
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full sm:w-auto bg-[#ff6600] text-white text-lg font-bold py-4 px-10 rounded-lg hover:bg-[#e65c00] transition shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    <Mail size={20} />
                                    Anfrage senden
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
                <div className="bg-[#0f172a] text-white p-8 rounded-lg shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                    <h3 className="font-bold text-lg mb-6 border-b border-slate-600 pb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                        <Building2 size={18} className="text-[#009fe3]" /> Betriebs-Info
                    </h3>
                    <div className="space-y-6 relative z-10">
                        <div>
                            <div className="opacity-50 text-[10px] uppercase font-bold tracking-widest mb-1">Unternehmensname</div>
                            <div className="font-bold text-xl leading-tight">{company.name}</div>
                        </div>
                        
                        <div>
                            <div className="opacity-50 text-[10px] uppercase font-bold tracking-widest mb-1">Adresse</div>
                            <div className="font-medium text-slate-200">
                              {company.address}<br/>
                              {company.zip} {company.city}
                            </div>
                        </div>

                        {/* Phone Number Removed */}

                        {company.website && (
                            <div>
                                <div className="opacity-50 text-[10px] uppercase font-bold tracking-widest mb-1">Webseite</div>
                                <div className="font-bold flex items-center gap-2 text-white">
                                    <Globe size={16} className="text-[#009fe3]" />
                                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#009fe3] transition break-all">
                                        {company.website.replace(/^https?:\/\/(www\.)?/, '')}
                                    </a>
                                </div>
                            </div>
                        )}

                        <div className="pt-4 border-t border-slate-700">
                             <div className="opacity-50 text-[10px] uppercase font-bold tracking-widest mb-2">Status</div>
                            <div className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1.5 rounded-md text-sm font-bold text-green-300 border border-green-500/30">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Geprüfter Fachbetrieb
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
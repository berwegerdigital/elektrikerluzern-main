import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, ShieldCheck, Wifi, Sun, Lightbulb, PlugZap } from 'lucide-react';
import SEO from '../components/SEO';
import LeadModal from '../components/LeadModal';
import { SERVICES } from '../services/data';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const IconMap: Record<string, any> = {
    PlugZap, ShieldCheck, Wifi, Sun, Lightbulb, Zap
  };
  const Icon = IconMap[service.icon] || Zap;

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
      />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="unsere Partnerbetriebe"
        location="Luzern & Umgebung"
      />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="w-24 h-24 bg-[#f0f7fc] rounded-full flex items-center justify-center text-[#005eb8] shrink-0">
              <Icon size={48} strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-[#009fe3] font-bold tracking-wider uppercase text-sm mb-2 block">Lösungen & Services</span>
              <h1 className="text-4xl md:text-6xl font-bold text-[#005eb8] leading-tight">{service.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-xl prose-slate max-w-none">
              <p className="text-2xl text-gray-700 font-light leading-relaxed mb-12">
                {service.fullDesc}
              </p>

              <h2 className="text-[#005eb8] font-bold text-3xl mb-6">Qualität und Sicherheit an erster Stelle</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                In der modernen Elektroinstallation verschmelzen klassische Handwerkskunst und digitale Intelligenz. Unsere Partnerbetriebe in der Zentralschweiz decken das gesamte Spektrum ab – von der ersten Planung bis zur finalen Abnahme.
              </p>

              <div className="bg-[#f8f9fa] p-10 border-l-4 border-[#009fe3] my-12">
                <h3 className="text-[#005eb8] font-bold text-xl mb-6">Warum unsere Partnerbetriebe?</h3>
                <ul className="space-y-4 list-none p-0">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#009fe3] mt-1 shrink-0" size={24} />
                    <span className="text-gray-700">Zertifizierte Fachkräfte mit eidgenössischem Diplom.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#009fe3] mt-1 shrink-0" size={24} />
                    <span className="text-gray-700">Einhaltung aller Schweizer Sicherheitsnormen (NIV).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#009fe3] mt-1 shrink-0" size={24} />
                    <span className="text-gray-700">Einsatz von langlebigen und energieeffizienten Materialien.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-[#005eb8] font-bold text-2xl mb-4">Ihr Weg zum Projekt</h3>
              <p className="text-gray-600 mb-8">
                Unabhängig davon, ob es sich um einen kleinen Umbau oder ein komplexes Grossprojekt handelt: In unserem Verzeichnis finden Sie den passenden Spezialisten für {service.title}.
              </p>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-gray-100 p-8 shadow-sm sticky top-32">
              <h3 className="text-xl font-bold text-[#005eb8] mb-6 pb-4 border-b border-gray-50">Anfrage stellen</h3>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Finden Sie jetzt den passenden Partner für Ihr Anliegen in der Zentralschweiz.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="block w-full text-center bg-[#ff6600] text-white font-bold py-4 rounded-sm hover:bg-[#e65c00] transition shadow-md mb-4"
              >
                Offerte erhalten
              </button>
              <p className="text-xs text-gray-400 text-center">
                Über 100 Betriebe gelistet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicePage;
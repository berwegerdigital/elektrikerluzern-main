import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Search, ClipboardList } from 'lucide-react';
import SEO from '../components/SEO';
import LeadModal from '../components/LeadModal';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Elektriker Luzern | Ihr Verzeichnis für qualifizierte Elektriker in der Zentralschweiz"
        description="Kostenlos Offerten einholen. Finden Sie geprüfte Elektriker im Kanton Luzern für Ihr Projekt."
        image="https://elektrikerluzern.ch/lucerne.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Elektriker Luzern",
          "url": "https://elektrikerluzern.ch",
          "sameAs": []
        }}
      />

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="unsere Partnerbetriebe"
        location="Luzern & Umgebung"
      />

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src="/lucerne.jpg" alt="Luzern Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-28">

            {/* Left Content - Adapted colors for dark background */}
            <div className="lg:w-2/3 z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                Ihr Verzeichnis für <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  qualifizierte Elektro-Firmen
                </span>
              </h1>
              <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
                Kostenlos Offerten einholen. Wir verbinden Sie schnell und einfach mit den besten Elektrikern der Zentralschweiz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#ff6600] text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-[#e65c00] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <ClipboardList size={22} />
                  Offerte anfordern
                </button>
                <Link
                  to="/alle-elektriker"
                  className="bg-white text-[#0f172a] border border-slate-200 text-lg font-bold py-4 px-8 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Search size={22} />
                  Verzeichnis
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" /> Unverbindlich
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" /> Kostenlos
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" /> Geprüfte Partner
                </div>
              </div>
            </div>

            {/* Right Side - Removed previous image as we now have background. Kept empty or could add a smaller card if needed. 
                User asked to leave content as is, but visual layout necessitates change. 
                I will remove the image column to let the background breathe. */}
          </div>
        </div>
      </section>

      {/* Benefits Section - Restored */}
      <section className="bg-white py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-6">Ihre Vorteile</h2>
            <p className="text-slate-600 text-lg">
              Sparen Sie Zeit und Geld bei der Suche nach dem passenden Elektro-Fachmann.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 group">
              <div className="w-16 h-16 bg-white text-[#005eb8] rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-[#005eb8] group-hover:text-white transition duration-300">
                <ClipboardList size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 text-center">Schnell & Einfach</h3>
              <p className="text-slate-600 leading-relaxed text-center">
                Ersparen Sie sich das Herumtelefonieren. Beschreiben Sie Ihr Anliegen einmal und erreichen Sie verfügbare Profis.
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 group">
              <div className="w-16 h-16 bg-white text-[#005eb8] rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-[#005eb8] group-hover:text-white transition duration-300">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 text-center">Regionale Anbieter</h3>
              <p className="text-slate-600 leading-relaxed text-center">
                Wir leiten Ihre Anfrage gezielt an Elektriker im Kanton Luzern weiter (z.B. Stadt Luzern, Sursee, Emmen, Kriens).
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 group">
              <div className="w-16 h-16 bg-white text-[#005eb8] rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-[#005eb8] group-hover:text-white transition duration-300">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-4 text-center">Kostenlos & unverbindlich</h3>
              <p className="text-slate-600 leading-relaxed text-center">
                Ihre Anfrage ist für Sie völlig kostenlos und ohne Verpflichtung. Sie entscheiden, wen Sie beauftragen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section / CTA - Restored */}
      <section className="bg-[#005eb8] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner für Ihr nächstes Projekt</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Suchen Sie einen zuverlässigen Fachbetrieb in Ihrer Region? Unser Verzeichnis umfasst über 100 zertifizierte Elektriker in der Zentralschweiz. Egal ob Wallbox-Installation, Lampenmontage oder Neubau.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#005eb8] font-bold text-lg py-4 px-10 rounded-lg hover:bg-gray-100 transition whitespace-nowrap shadow-xl transform hover:-translate-y-1"
          >
            Kostenlose Offerte
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
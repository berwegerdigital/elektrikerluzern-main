import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Search, ClipboardList } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
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
                <Link
                  to="/kontakt"
                  className="bg-[#ff6600] text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-[#e65c00] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <ClipboardList size={22} />
                  Offerte anfordern
                </Link>
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

      {/* Benefits Section - Professional Redesign */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,94,184,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
              Ihre Vorteile auf einen Blick
            </h2>
            <div className="w-20 h-1.5 bg-[#ff6600] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#005eb8] text-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,94,184,0.3)] flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300">
                <ClipboardList size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-5">Schnell & Einfach</h3>
              <p className="text-slate-600 leading-relaxed">
                Ersparen Sie sich das mühsame Herumtelefonieren. Beschreiben Sie Ihr Anliegen einmal und wir finden die verfügbaren Profis für Sie.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#005eb8] text-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,94,184,0.3)] flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300">
                <Search size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-5">Regionale Anbieter</h3>
              <p className="text-slate-600 leading-relaxed">
                Profitieren Sie von kurzen Anfahrtswegen. Wir vermitteln gezielt an etablierte Elektriker direkt aus dem Kanton Luzern und Umgebung.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#005eb8] text-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,94,184,0.3)] flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-5">Kostenlos & Fair</h3>
              <p className="text-slate-600 leading-relaxed">
                Unser Service ist für Sie zu 100% kostenlos und unverbindlich. Sie erhalten faire Angebote und entscheiden ganz ohne Druck.
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
          <Link
            to="/kontakt"
            className="bg-white text-[#005eb8] font-bold text-lg py-4 px-10 rounded-lg hover:bg-gray-100 transition whitespace-nowrap shadow-xl transform hover:-translate-y-1 block text-center"
          >
            Kostenlose Offerte
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
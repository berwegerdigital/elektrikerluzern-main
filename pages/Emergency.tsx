import React, { useState } from 'react';
import { Phone, AlertTriangle, Clock, Zap, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import LeadModal from '../components/LeadModal';

const Emergency: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO 
        title="24h Elektro Notdienst Luzern | Sofort-Hilfe"
        description="Stromausfall? Defekt? Unser Elektro-Pikettdienst in Luzern ist 24/7 für Sie erreichbar. Schnelle Reaktionszeit, faire Tarife. Jetzt Hilfe rufen."
      />
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companyName="Notdienst-Zentrale"
        location="Kanton Luzern"
      />

      <div className="bg-red-50 min-h-[60vh]">
        <div className="container mx-auto px-4 py-12 md:py-20">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-100 text-red-600 rounded-full mb-6">
              <AlertTriangle size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Elektro Notfall?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wir vermitteln sofort geprüfte Elektriker in Ihrer Nähe. 24 Stunden, 7 Tage die Woche.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-red-600 text-white text-lg font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-3 shadow-lg animate-pulse"
                    >
                        <Phone size={24} />
                        Notdienst anfordern
                    </button>
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-white text-gray-900 border-2 border-gray-200 text-lg font-bold py-4 px-6 rounded-lg hover:border-gray-400 transition flex items-center justify-center gap-3"
                    >
                        <Zap size={24} className="text-secondary" />
                        Rückruf anfordern
                    </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    Durchschnittliche Rückrufzeit: &lt; 15 Minuten
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                <Clock className="text-red-500" size={32} />
                <div>
                    <h3 className="font-bold text-gray-900">Rund um die Uhr</h3>
                    <p className="text-sm text-gray-500">Auch an Wochenenden & Feiertagen</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                <Zap className="text-secondary" size={32} />
                <div>
                    <h3 className="font-bold text-gray-900">Kompetente Hilfe</h3>
                    <p className="text-sm text-gray-500">Qualifizierte Fachleute vor Ort</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm flex items-center gap-4">
                <Shield className="text-primary" size={32} />
                <div>
                    <h3 className="font-bold text-gray-900">Fair & Transparent</h3>
                    <p className="text-sm text-gray-500">Keine versteckten Kosten</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Emergency;
import React, { useState } from 'react';
import { X, CheckCircle, Loader2, Send, ShieldCheck, CreditCard, UserCheck } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
  location: string;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, companyName, location }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch("https://formsubmit.co/ajax/berwegerdigital@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        });

        if (response.ok) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    } catch (error) {
        setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-sm shadow-2xl w-full max-w-2xl overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar / Info */}
          <div className="md:w-1/3 bg-[#005eb8] text-white p-8 hidden md:block">
            <h3 className="font-bold text-xl mb-6">Ihre Vorteile</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3">
                <UserCheck size={20} className="shrink-0 text-[#009fe3]" />
                <span>Unverbindlich & persönlich</span>
              </li>
              <li className="flex gap-3">
                <CreditCard size={20} className="shrink-0 text-[#009fe3]" />
                <span>Kostenlos</span>
              </li>
              <li className="flex gap-3">
                <ShieldCheck size={20} className="shrink-0 text-[#009fe3]" />
                <span>Datenschutz garantiert</span>
              </li>
            </ul>
            <p className="mt-12 text-xs opacity-60">
              Ihre Anfrage geht direkt an unser zentrales Postfach und wird an qualifizierte Partner in {location} weitergeleitet.
            </p>
          </div>

          {/* Form Area */}
          <div className="md:w-2/3 p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#005eb8] mb-2">Anfrage erfolgreich!</h3>
                <p className="text-gray-600 mb-8">Wir haben Ihre Nachricht erhalten. Sie werden in Kürze Angebote von Experten erhalten.</p>
                <button 
                  onClick={onClose}
                  className="bg-[#005eb8] text-white font-bold py-3 px-8 rounded-sm hover:bg-blue-800 transition w-full"
                >
                  Schließen
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#005eb8]">Offerte anfordern</h2>
                  <p className="text-sm text-gray-500 mt-2">
                      Füllen Sie das Formular aus und erhalten Sie Angebote von Experten aus der Zentralschweiz.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value={`Neue Projektanfrage via elektrikerluzern.ch`} />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase mb-1">Vorname & Nachname</label>
                          <input required type="text" name="name" id="name" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm focus:ring-1 focus:ring-[#005eb8] focus:border-[#005eb8] outline-none transition" />
                      </div>
                       <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase mb-1">Telefon</label>
                          <input required type="tel" name="phone" id="phone" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm focus:ring-1 focus:ring-[#005eb8] focus:border-[#005eb8] outline-none transition" />
                      </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase mb-1">E-Mail Adresse</label>
                      <input required type="email" name="email" id="email" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm focus:ring-1 focus:ring-[#005eb8] focus:border-[#005eb8] outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-xs font-bold text-gray-700 uppercase mb-1">Ort der Ausführung (PLZ/Ort)</label>
                      <input required type="text" name="location" id="zip" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm focus:ring-1 focus:ring-[#005eb8] focus:border-[#005eb8] outline-none transition" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase mb-1">Beschreiben Sie Ihr Anliegen</label>
                    <textarea required name="message" id="message" rows={3} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm focus:ring-1 focus:ring-[#005eb8] focus:border-[#005eb8] outline-none transition" placeholder="z.B. Installation einer Wallbox, Lampenmontage..."></textarea>
                  </div>

                  {status === 'error' && (
                      <div className="bg-red-50 text-red-600 text-sm p-3 rounded">
                          Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.
                      </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-[#ff6600] text-white font-bold py-4 rounded-sm hover:bg-[#e65c00] transition flex items-center justify-center gap-2 mt-4 shadow-md"
                  >
                    {status === 'submitting' ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Offerte Absenden</>}
                  </button>
                  <p className="text-[10px] text-center text-gray-400 mt-4 leading-tight">
                    Mit dem Absenden erklären Sie sich einverstanden, dass Ihre Daten zur Bearbeitung der Anfrage verwendet werden.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
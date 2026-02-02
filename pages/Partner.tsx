import React, { useState } from 'react';
import { Send, CheckCircle, Building2, User, Mail, Globe, Loader2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Partner: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
            window.scrollTo(0, 0);
        } else {
            setStatus('error');
        }
    } catch (error) {
        setStatus('error');
    }
  };

  return (
    <>
      <SEO 
        title="Partner werden | elektrikerluzern.ch"
        description="Registrieren Sie Ihren Elektro-Fachbetrieb im führenden Verzeichnis für Luzern und die Zentralschweiz. Jetzt Partner werden."
      />

      {/* Hero Header */}
      <div className="bg-[#0f172a] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#005eb8]/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Werden Sie Partner</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Profitieren Sie von unserer Reichweite. Wir vermitteln Kundenanfragen direkt an qualifizierte Fachbetriebe in der Region.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            
            {status === 'success' ? (
                <div className="p-12 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#005eb8] mb-4">Vielen Dank für Ihr Interesse!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Wir haben Ihre Anfrage erhalten. Unser Team wird Ihre Angaben prüfen und sich in Kürze mit weiteren Informationen bei Ihnen melden.
                    </p>
                    <a href="/" className="inline-flex items-center font-bold text-[#005eb8] hover:underline">
                        Zurück zur Startseite <ArrowRight size={16} className="ml-2" />
                    </a>
                </div>
            ) : (
                <div className="p-8 md:p-12">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Registrierungsanfrage</h2>
                        <p className="text-gray-500">Füllen Sie das Formular aus, um Ihren Betrieb eintragen zu lassen.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <input type="hidden" name="_subject" value="Neue Partner-Anfrage: elektrikerluzern.ch" />
                        <input type="hidden" name="_captcha" value="false" />

                        {/* Company Details */}
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <h3 className="text-sm font-bold text-[#005eb8] uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Building2 size={16} /> Unternehmensdaten
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">Firmenname *</label>
                                    <input required type="text" name="company" id="company" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition" placeholder="Muster Elektro AG" />
                                </div>
                                <div>
                                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-1">Webseite</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <Globe size={18} />
                                        </div>
                                        <input type="url" name="website" id="website" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition" placeholder="https://..." />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">Adresse & Ort *</label>
                                    <input required type="text" name="address" id="address" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition" placeholder="Musterstrasse 1, 6000 Luzern" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                            <h3 className="text-sm font-bold text-[#005eb8] uppercase tracking-wider mb-4 flex items-center gap-2">
                                <User size={16} /> Ansprechpartner
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-1">Vorname & Nachname *</label>
                                    <input required type="text" name="contactPerson" id="contactPerson" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">E-Mail Adresse *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <Mail size={18} />
                                        </div>
                                        <input required type="email" name="email" id="email" className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Nachricht / Bemerkung</label>
                            <textarea name="message" id="message" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition" placeholder="Haben Sie Fragen zur Partnerschaft?"></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-100 text-sm text-center">
                                Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt eine E-Mail.
                            </div>
                        )}

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full bg-[#ff6600] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#e65c00] transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Anfrage absenden</>}
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4">
                                Durch das Absenden dieses Formulars stimmen Sie zu, dass wir Sie bezüglich einer Partnerschaft kontaktieren dürfen.
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Partner;
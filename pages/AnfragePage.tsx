import React, { useState } from 'react';
import { CheckCircle, Send, Loader2, UserCheck, CreditCard, ShieldCheck, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

const AnfragePage: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/berwegerdigital@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const result = await response.json();

            if (response.ok && result.success === "true") {
                setStatus('success');
                window.scrollTo(0, 0);
            } else {
                console.error("FormSubmit Error:", result);
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus('error');
        }
    };

    return (
        <>
            <SEO
                title="Offerte anfordern | Ihr Elektro-Projekt in Luzern"
                description="Holen Sie jetzt kostenlos und unverbindlich Offerten von qualifizierten Elektrikern aus der Zentralschweiz ein."
            />

            <div className="bg-[#0f172a] text-white py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-display text-center">Offerte anfordern</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-center">
                        Füllen Sie das Formular aus und erhalten Sie Angebote von Experten aus der Zentralschweiz.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-6xl -mt-12 relative z-10">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

                    {/* Benefits Sidebar */}
                    <div className="lg:w-1/3 bg-[#005eb8] text-white p-10 md:p-12">
                        <h3 className="font-bold text-2xl mb-10 font-display">Ihre Vorteile</h3>
                        <ul className="space-y-8">
                            <li className="flex gap-4 items-start">
                                <div className="p-2 bg-white/10 rounded-lg"><UserCheck size={24} className="text-[#009fe3]" /></div>
                                <div>
                                    <span className="font-bold block text-lg">Unverbindlich & persönlich</span>
                                    <p className="text-sm text-blue-100 mt-1 opacity-80">Keine Kaufverpflichtung, individuelle Beratung.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="p-2 bg-white/10 rounded-lg"><CreditCard size={24} className="text-[#009fe3]" /></div>
                                <div>
                                    <span className="font-bold block text-lg">Kostenlos</span>
                                    <p className="text-sm text-blue-100 mt-1 opacity-80">Unser Vermittlungsservice ist für Sie 100% gratis.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="p-2 bg-white/10 rounded-lg"><ShieldCheck size={24} className="text-[#009fe3]" /></div>
                                <div>
                                    <span className="font-bold block text-lg">Datenschutz garantiert</span>
                                    <p className="text-sm text-blue-100 mt-1 opacity-80">Ihre Daten sind bei uns sicher und verschlüsselt.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <p className="text-sm leading-relaxed text-blue-50/70">
                                Ihre Anfrage geht direkt an unser zentrales Postfach und wird an qualifizierte Partner in Luzern & Umgebung weitergeleitet.
                            </p>
                        </div>
                    </div>

                    {/* Form Area */}
                    <div className="lg:w-2/3 p-10 md:p-16">
                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="mx-auto bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle className="text-green-600 w-12 h-12" />
                                </div>
                                <h3 className="text-3xl font-bold text-[#005eb8] mb-4 font-display">Anfrage erfolgreich!</h3>
                                <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto">
                                    Vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden diese umgehend an unsere Experten weiterleiten. Sie erhalten in Kürze Rückmeldung.
                                </p>
                                <a
                                    href="/"
                                    className="inline-block bg-[#005eb8] text-white font-bold py-4 px-12 rounded-lg hover:bg-blue-800 transition shadow-lg"
                                >
                                    Zurück zur Startseite
                                </a>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <input type="hidden" name="_subject" value="Neue Projektanfrage via elektrikerluzern.ch" />
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                                            <Mail size={16} className="text-[#005eb8]" /> Vorname & Nachname
                                        </label>
                                        <input required type="text" name="name" id="name" placeholder="Max Mustermann" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition text-lg" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                                            <Phone size={16} className="text-[#005eb8]" /> Telefon
                                        </label>
                                        <input required type="tel" name="phone" id="phone" placeholder="+41 79 123 45 67" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition text-lg" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                                            <Mail size={16} className="text-[#005eb8]" /> E-Mail Adresse
                                        </label>
                                        <input required type="email" name="email" id="email" placeholder="max@beispiel.ch" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition text-lg" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="zip" className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                                            <MapPin size={16} className="text-[#005eb8]" /> Ort der Ausführung (PLZ/Ort)
                                        </label>
                                        <input required type="text" name="location" id="zip" placeholder="6000 Luzern" className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition text-lg" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                                        <MessageSquare size={16} className="text-[#005eb8]" /> Beschreiben Sie Ihr Anliegen
                                    </label>
                                    <textarea required name="message" id="message" rows={5} placeholder="z.B. Installation einer Wallbox, Lampenmontage..." className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005eb8] focus:border-transparent outline-none transition text-lg resize-none"></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-100 text-sm text-center">
                                        Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder schreiben Sie uns direkt eine E-Mail.
                                    </div>
                                )}

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#ff6600] text-white font-bold text-xl py-5 rounded-lg hover:bg-[#e65c00] transition transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
                                    >
                                        {status === 'submitting' ? <Loader2 className="animate-spin" size={24} /> : <><Send size={24} /> Offerte Absenden</>}
                                    </button>
                                    <p className="text-center text-xs text-slate-400 mt-6 leading-relaxed">
                                        Mit dem Absenden erklären Sie sich einverstanden, dass Ihre Daten zur Bearbeitung der Anfrage verwendet werden. Ihre Anfrage ist 100% unverbindlich.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnfragePage;

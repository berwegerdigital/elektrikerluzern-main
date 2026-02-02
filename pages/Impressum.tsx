import React from 'react';
import SEO from '../components/SEO';

const Impressum: React.FC = () => {
  return (
    <>
      <SEO
        title="Impressum | elektrikerluzern.ch"
        description="Rechtliche Informationen und Kontaktangaben zu elektrikerluzern.ch."
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#005eb8] mb-8">Impressum</h1>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Kontaktadresse</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>Berweger Solutions</strong><br />
              Starenstrasse 23<br />
              4103 Bottmingen<br />
              Schweiz<br />
              E-Mail: berwegerdigital@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Haftungsausschluss</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Haftung für Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Urheberrechte</h2>
            <p className="text-gray-600 leading-relaxed">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich <strong>Berweger Solutions</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Impressum;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://elektrikerluzern.ch';

const REGIONS = [
  { name: 'Stadt Luzern', slug: 'luzern' },
  { name: 'Emmen & Rothenburg', slug: 'emmen' },
  { name: 'Kriens', slug: 'kriens' },
  { name: 'Horw', slug: 'horw' },
  { name: 'Sursee & Sempachersee', slug: 'sursee' },
  { name: 'Willisau & Wiggertal', slug: 'willisau' },
  { name: 'Seetal & Hochdorf', slug: 'seetal' },
  { name: 'Rontal & Ebikon', slug: 'rontal' },
  { name: 'Nidwalden', slug: 'nidwalden' },
  { name: 'Obwalden', slug: 'obwalden' },
  { name: 'Schwyz', slug: 'schwyz' },
  { name: 'Uri', slug: 'uri' },
  { name: 'Entlebuch', slug: 'entlebuch' },
];

const SERVICES = [
  { slug: 'elektroinstallation' },
  { slug: 'wartung-reparatur' },
  { slug: 'smart-home' },
  { slug: 'erneuerbare-energien' },
  { slug: 'sicherheitspruefung' },
  { slug: 'beleuchtung' }
];

const COMPANIES = [
  { slug: '3a-elektro-ag' }, { slug: 'a-schmidiger-ag' }, { slug: 'ac-dc-solar-elektro-gmbh' }, { slug: 'ag-elektro-agz' }, { slug: 'allenbach-gebr-ag' }, { slug: 'amoled-elektro-ag' }, { slug: 'amstein-walthert-luzern-ag' }, { slug: 'amstrom-ag' }, { slug: 'aregger-elektro-ag' }, { slug: 'as-energie-gmbh' }, { slug: 'asp-konzept-ag' }, { slug: 'baehler-wbi-ag' }, { slug: 'belevo-ag' }, { slug: 'betschart-ag-holz-elektro' }, { slug: 'beutler-ag-elektrische-anlagen' }, { slug: 'bonetti-elektro-ag' }, { slug: 'brissoni-ag' }, { slug: 'brunner-elektroplan-ag' }, { slug: 'buehlmann-elektroingenieure-ag' }, { slug: 'buetler-elektro-ag' }, { slug: 'capasso-elektro-gmbh' }, { slug: 'ch-bieri-elektro-gmbh' }, { slug: 'ch-furrer-elektro-gmbh' }, { slug: 'cimenti-lipp-ag-luzern' }, { slug: 'ckw-gebaeudetechnik-ag' }, { slug: 'daniel-pfenninger-ag' }, { slug: 'dubach-elektro-gmbh' }, { slug: 'durrer-jost-energie-gmbh' }, { slug: 'ebs-energie-ag' }, { slug: 'edelweiss-elektro-ag' }, { slug: 'ehb-elektro-gmbh' }, { slug: 'ehrenberg-elektro-ag' }, { slug: 'electra-ag-luzern' }, { slug: 'electrocasa-ag' }, { slug: 'electrotime-wechsler-bucher-ag' }, { slug: 'elektrizitaetswerk-schwyz-ag' }, { slug: 'elektrizitaetswerk-ursern' }, { slug: 'elektrokonstrukt-ag' }, { slug: 'elektro-a-mueller-ag' }, { slug: 'elektro-baumann-gmbh' }, { slug: 'elektro-burkart-ag' }, { slug: 'elektro-burri-partner-ag' }, { slug: 'elektro-egli-spaeni-ag' }, { slug: 'elektro-emmenegger-gmbh' }, { slug: 'elektro-engineering-partner-ag' }, { slug: 'elektro-ettlin-ag' }, { slug: 'elektro-felber-ag' }, { slug: 'elektro-fries-gmbh' }, { slug: 'elektro-fuchs-littau-gmbh' }, { slug: 'elektro-furrer-ag' }, { slug: 'elektro-gander-ag' }, { slug: 'elektro-getzmann-ag' }, { slug: 'elektro-haeberli-ag' }, { slug: 'elektro-hodel-ag' }, { slug: 'elektro-hof' }, { slug: 'elektro-horat-ag' }, { slug: 'elektro-huwyler-ag' }, { slug: 'elektro-illi-ag' }, { slug: 'elektro-imholz-ag' }, { slug: 'elektro-kaiser-ag' }, { slug: 'elektro-kaech-seetal-ag' }, { slug: 'elektro-kessler-gmbh' }, { slug: 'elektro-kiser-ag' }, { slug: 'elektro-koch-schoetz-ag' }, { slug: 'elektro-kuster-ag' }, { slug: 'elektro-maerk-ag' }, { slug: 'elektro-markus-boesch-ag' }, { slug: 'elektro-markus-odermatt-gmbh' }, { slug: 'elektro-mueller-willisau-ag' }, { slug: 'elektro-nauer-ag' }, { slug: 'elektro-nottwil-ag' }, { slug: 'elektro-peter-willisau-ag' }, { slug: 'elektro-planzer-ag' }, { slug: 'elektro-reichmuth-ag' }, { slug: 'elektro-schatt-ag' }, { slug: 'elektro-schaerli-ag' }, { slug: 'elektro-schmid-sursee-ag' }, { slug: 'elektro-schuler-ag' }, { slug: 'elektro-stirnimann-ag' }, { slug: 'elektro-team-eich-ag' }, { slug: 'elektroplanung-vinzens-gmbh' }, { slug: 'elektro-wallimann-ag' }, { slug: 'elektro-waser-ag' }, { slug: 'elektro-widmer-ag' }, { slug: 'elektro-wild-barmettler-ag' }, { slug: 'elektro-zemp-gmbh' }, { slug: 'elektro-zimmerli-reiden-ag' }, { slug: 'elektro-getzmann-gmbh-ettiswil' }, { slug: 'elektromatik-ag' }, { slug: 'elektro-moesch' }, { slug: 'elfema-ag' }, { slug: 'elgi-plan-gmbh' }, { slug: 'elkon-gmbh' }, { slug: 'elmaplan-ag' }, { slug: 'elmi-gmbh' }, { slug: 'elwag-elektro-wolhusen-ag' }, { slug: 'energieuri' }, { slug: 'equans-switzerland-ag' }, { slug: 'etb-jost-furrer' }, { slug: 'ettlin-ag' }, { slug: 'ewl-verkauf-ag' }, { slug: 'ewo-gebaeudetechnik-ag' }, { slug: 'ews-ag' }, { slug: 'frei-baettig-elektro-ag' }, { slug: 'frey-cie-elektro-ag' }, { slug: 'frey-cie-elektro-ag-stans' }, { slug: 'frey-electric-ag' }, { slug: 'fries-elektro-papeterie-gmbh' }, { slug: 'gasser-elektro-unternehmung-ag' }, { slug: 'gebr-mathis-elektro-ag' }, { slug: 'gemeindewerk-beckenried' }, { slug: 'gemeindewerke-arth' }, { slug: 'gemeindewerke-erstfeld' }, { slug: 'georg-imbach-ag' }, { slug: 'grueter-koch-ag' }, { slug: 'haeller-eltec-ag' }, { slug: 'heggli-service-ag' }, { slug: 'ik-elektro-gmbh' }, { slug: 'illi-ict-solutions-ag' }, { slug: 'illi-kontrolle-ag' }, { slug: 'imbach-elektro-ag' }, { slug: 'imbach-elko-ag' }, { slug: 'inderbitzin-kaelin-ag' }, { slug: 'infra-tech-ag' }, { slug: 'intelitec-ag' }, { slug: 'jules-haefliger-ag' }, { slug: 'kaelin-elektro-telematik-ag' }, { slug: 'kaufmann-elektro-ag' }, { slug: 'knuesel-ag' }, { slug: 'koni-baumgartner-elektro-ag' }, { slug: 'luescher-partner-elektro-ag' }, { slug: 'marechaux-elektro-ag' }, { slug: 'marechaux-elektro-ag-stans' }, { slug: 'marechaux-elektro-ag-sursee' }, { slug: 'mueller-elektro-hitzkirch-ag' }, { slug: 'mueller-elestan-gmbh' }, { slug: 'niederberger-elektro-ag' }, { slug: 'niederberger-elektro-multimedia-gmbh' }, { slug: 'odermatt-sicher-ag' }, { slug: 'odermatt-pirmin-elektro-gmbh' }, { slug: 'ontecgroup-ag' }, { slug: 'parcom-systems-ag' }, { slug: 'protec-elektro-ag' }, { slug: 'pzm-luzern-ag' }, { slug: 'quali-plan-ag' }, { slug: 'raeber-elektro-gmbh' }, { slug: 'r-schriber-elektro-ag' }, { slug: 'reichmuth-elektrik-ag' }, { slug: 'rene-bucher-ag' }, { slug: 'robert-widmer-ag' }, { slug: 'roman-betschart-elektro' }, { slug: 'rsk-elektro-ag' }, { slug: 'sabo-automation-und-elektro-gmbh' }, { slug: 'schaerli-elektro-com-ag' }, { slug: 'schibli-elektrotechnik-ag' }, { slug: 'schmid-electric-gmbh' }, { slug: 'schnyder-elektro-ag-aesch' }, { slug: 'schumacher-elektro-ag' }, { slug: 'seiga-gmbh' }, { slug: 'smartelectro-schweiz-ag' }, { slug: 'smartteam-elektro-ag' }, { slug: 'solektra-ag' }, { slug: 'sostro-ag' }, { slug: 'steiner-energie-ag' }, { slug: 'stierli-solar-gmbh' }, { slug: 'stromerei-ag' }, { slug: 'sts-elektro-ag' }, { slug: 'sts-e-tech-gmbh' }, { slug: 'studer-erwin-elektro-ag' }, { slug: 'swisspro-ag' }, { slug: 'telestrom-ag' }, { slug: 'topelektro-gmbh' }, { slug: 'tophinke-automation-gebaeudetechnik-ag' }, { slug: 'ulrich-elektrik-gmbh' }, { slug: 'weibel-sommer-elektro-telecom-ag' }, { slug: 'widmer-elektro-telecom-ag' }, { slug: 'wild-electric-ag' }, { slug: 'zeltner-ag' }, { slug: 'zimmermann-engineering-ag' }, { slug: 'zust-van-herk-elektro-ag' }
];

const STATIC_ROUTES = [
  '/',
  '/alle-elektriker',
  '/partner',
  '/impressum'
];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static Routes
  STATIC_ROUTES.forEach(route => {
    xml += '  <url>\n';
    const loc = route === '/' ? `${BASE_URL}/#/` : `${BASE_URL}/#${route}`;
    xml += `    <loc>${loc}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += '  </url>\n';
  });

  // Services
  SERVICES.forEach(service => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/#/service/${service.slug}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  // Regions
  REGIONS.forEach(region => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/#/region/${region.slug}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  // Companies
  COMPANIES.forEach(company => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}/#/company/${company.slug}</loc>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.6</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

const sitemapContent = generateSitemap();
const publicDir = path.resolve(__dirname, '../public');

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

console.log(`Sitemap generated successfully in ${publicDir}/sitemap.xml with:
- ${STATIC_ROUTES.length} static routes
- ${SERVICES.length} service routes
- ${REGIONS.length} region routes
- ${COMPANIES.length} company routes
`);

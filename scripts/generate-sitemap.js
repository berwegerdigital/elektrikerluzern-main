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

const STATIC_ROUTES = [
  '/',
  '/alle-elektriker',
  '/partner',
  '/kontakt',
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
`);

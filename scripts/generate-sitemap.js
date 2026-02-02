
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock the data import since we can't easily import TS in this JS script without more config
// Ideally this should use ts-node or similar, but for simplicity we'll replicate the core structure or just define static routes
const BASE_URL = 'https://elektrikerluzern.ch';

const routes = [
    '/',
    '/alle-elektriker',
    '/partner',
    '/impressum',
    // Services
    '/service/elektroinstallation',
    '/service/reparatur-service',
    '/service/solaranlagen',
    '/service/e-mobilitaet',
    '/service/telematik',
    '/service/umbau-renovation',
    // Regions
    '/region/luzern-stadt',
    '/region/emmen',
    '/region/kriens',
    '/region/horw',
    '/region/ebikon',
    '/region/sursee',
    '/region/hochdorf',
    '/region/willisau'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

    // Ensure public directory exists
    const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
};

generateSitemap();

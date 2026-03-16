import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');

if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Successfully created dist/404.html from dist/index.html');
} else {
    console.error('Error: dist/index.html not found. Make sure vite build ran successfully.');
    process.exit(1);
}

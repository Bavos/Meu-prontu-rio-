import {readdirSync, readFileSync, statSync} from 'node:fs';
import {join} from 'node:path';

const extensions = new Set(['.ts', '.tsx', '.css']);
const forbidden = [/<Audio\b/, /staticFile\([^)]*audio/i, /audio\.mp3/i, /trilha sonora/i, /narração/i, /efeitos sonoros/i];

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) files.push(...walk(full));
    else if ([...extensions].some((ext) => full.endsWith(ext))) files.push(full);
  }
  return files;
}

let ok = true;
for (const file of walk('src')) {
  const text = readFileSync(file, 'utf8');
  for (const pattern of forbidden) {
    if (pattern.test(text)) {
      console.error(`Forbidden silent-video pattern ${pattern} found in ${file}`);
      ok = false;
    }
  }
}
if (!ok) process.exit(1);
console.log('Silent-video validation passed: no audio imports or references found.');

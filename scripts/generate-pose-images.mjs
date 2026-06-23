import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicRoot = path.join(projectRoot, 'public');
const imageRoot = path.join(publicRoot, 'img');
const outputFile = path.join(projectRoot, 'src', 'data', 'poseImages.ts');
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']);

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      images.push(...await collectImages(fullPath));
      continue;
    }

    if (!entry.isFile()) continue;

    const ext = path.extname(entry.name).toLowerCase();
    if (!imageExtensions.has(ext)) continue;

    images.push(
      `/${path.relative(publicRoot, fullPath).split(path.sep).join('/')}`
    );
  }

  return images;
}

async function main() {
  const images = (await collectImages(imageRoot)).sort((a, b) =>
    a.localeCompare(b, 'zh-Hans-CN', { numeric: true })
  );

  const content = [
    'export const POSE_IMAGES: string[] = [',
    ...images.map(image => `  ${JSON.stringify(image)},`),
    '];',
    ''
  ].join('\n');

  await writeFile(outputFile, content, 'utf8');
  console.log(`Generated ${images.length} pose images.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});

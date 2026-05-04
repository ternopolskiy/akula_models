import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const modelsRoot = path.join(projectRoot, "public", "models");

const presets = {
  cover: { width: 900, quality: 76 },
  hero: { width: 1600, quality: 82 },
  gallery: { width: 1200, quality: 78 },
};

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function toWebp(inputPath, outputPath, { width, quality }) {
  await sharp(inputPath)
    .rotate()
    .resize({ width, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(outputPath);
}

async function optimizeModelFolder(modelDir) {
  const modelPath = path.join(modelsRoot, modelDir);
  const stats = await fs.stat(modelPath);
  if (!stats.isDirectory()) return { converted: 0, skipped: 0 };

  let converted = 0;
  let skipped = 0;

  for (const name of ["cover", "hero"]) {
    const input = path.join(modelPath, `${name}.jpg`);
    const output = path.join(modelPath, `${name}.webp`);

    if (await exists(input)) {
      await toWebp(input, output, presets[name]);
      converted += 1;
    } else {
      skipped += 1;
    }
  }

  const galleryDir = path.join(modelPath, "gallery");
  if (await exists(galleryDir)) {
    const galleryFiles = await fs.readdir(galleryDir);
    for (const file of galleryFiles) {
      if (!file.toLowerCase().endsWith(".jpg")) continue;
      const input = path.join(galleryDir, file);
      const output = path.join(
        galleryDir,
        `${path.basename(file, path.extname(file))}.webp`
      );
      await toWebp(input, output, presets.gallery);
      converted += 1;
    }
  }

  return { converted, skipped };
}

async function main() {
  const modelDirs = await fs.readdir(modelsRoot);
  let totalConverted = 0;
  let totalSkipped = 0;

  for (const dir of modelDirs) {
    const { converted, skipped } = await optimizeModelFolder(dir);
    totalConverted += converted;
    totalSkipped += skipped;
  }

  console.log(
    `Optimization complete: converted ${totalConverted} files, skipped ${totalSkipped}.`
  );
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exit(1);
});

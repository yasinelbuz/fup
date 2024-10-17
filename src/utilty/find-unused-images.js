import fs from 'fs';
import path from 'path';
import { findImages } from './find-images.js';
import { findFiles } from './find-files.js';

export const findUnusedImages = (directory) => {
  const images = findImages(directory);
  const { tsAndJs } = findFiles(directory);
  
  const usedImages = new Set();

  // Scan all .ts and .js files
  tsAndJs.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    images.forEach(image => {
      const imageName = path.basename(image);
      const imageNameWithoutExt = path.parse(imageName).name;
      if (content.includes(imageName)) {
        usedImages.add(image);
      } else if (content.includes(imageNameWithoutExt)) {
        usedImages.add(image);
        console.log(`Şüpheli kullanım: ${image} (sadece isim eşleşmesi)`);
      }
    });
  });

  // Find unused images
  const unusedImages = images.filter(image => !usedImages.has(image));

  return unusedImages;
};



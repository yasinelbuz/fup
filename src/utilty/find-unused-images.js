import fs from 'fs';
import path from 'path';
import { findImages } from './find-images.js';
import { findFiles } from './find-files.js';

export const findUnusedImages = (directory) => {
  const images = findImages(directory);
  const { tsAndJs } = findFiles(directory);
  
  const usedImages = new Set();

  // Tüm .ts ve .js dosyalarını tara
  tsAndJs.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    images.forEach(image => {
      const imageName = path.basename(image);
      if (content.includes(imageName)) {
        usedImages.add(image);
      }
    });
  });

  // Kullanılmayan resimleri bul
  const unusedImages = images.filter(image => !usedImages.has(image));

  return unusedImages;
};



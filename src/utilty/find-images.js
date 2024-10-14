import fs from "fs";
import path from "path";
import imageFormats from "../constants/images-formats.js";


export const findImages = (directory) => {
  const results = [];

  // Dizinin var olup olmadığını kontrol et
  if (!fs.existsSync(directory)) {
    console.error(`Hata: '${directory}' dizini bulunamadı.`);
    return results;
  }

  try {
    const items = fs.readdirSync(directory, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(directory, item.name);
      if (item.isDirectory()) {
        results.push(...findImages(fullPath));
      } else {
        const extension = path.extname(item.name).toLowerCase().slice(1);
        if (imageFormats.includes(extension)) {
          results.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Hata: Dizin okunurken bir sorun oluştu: ${error.message}`);
  }

  return results
};
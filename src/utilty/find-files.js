import fs from "fs";
import path from "path";
import ignoreDirections from "../constants/ignore-direction.js";

export const findFiles = (directory) => {
  const results = {
    all: [],
    tsAndJs: []
  };

  if (!fs.existsSync(directory)) {
    console.error(`Hata: '${directory}' dizini bulunamadı.`);
    return results;
  }

  const searchFiles = (dir) => {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (ignoreDirections.includes(item.name)) {
          continue;
        }

        if (item.isDirectory()) {
          searchFiles(fullPath);
        } else {
          results.all.push(fullPath);
          
          const extension = path.extname(item.name).toLowerCase();
          if (extension === '.ts' || extension === '.js') {
            results.tsAndJs.push(fullPath);
          }
        }
      }
    } catch (error) {
      console.error(`Hata: Dizin okunurken bir sorun oluştu: ${error.message}`);
    }
  };

  searchFiles(directory);
  return results;
};

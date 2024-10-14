import fs from "fs";
import path from "path";
import ignoreDirections from "../constants/ignore-direction.js";
import extensionEnum from "../constants/extension.js";

export const findFiles = (directory) => {
  const results = {
    all: [],
    tsAndJs: []
  };

  if (!fs.existsSync(directory)) {
    console.error(`\x1b[31mError: Directory '${directory}' not found.\x1b[0m`);
    return results;
  }

  const searchFiles = (dir) => {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (ignoreDirections.includes(item.name) || item.name === '.next') {
          continue; // Also ignore the .next folder
        }

        if (item.isDirectory()) {
          searchFiles(fullPath);
        } else {
          results.all.push(fullPath);
          
          const extension = path.extname(item.name).toLowerCase();
          if (extensionEnum.includes(extension)) {
            results.tsAndJs.push(fullPath);
          }
        }
      }
    } catch (error) {
      console.error(`\x1b[31mError: A problem occurred while reading the directory: ${error.message}\x1b[0m`);
    }
  };

  searchFiles(directory);
  return results;
};

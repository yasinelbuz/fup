import fs from "fs";
import path from "path";
import imageFormats from "../constants/images-formats.js";
import { ignoreDirectionsForImages } from "../constants/ignore-direction.js";

export const findImages = (directory) => {
  const results = [];

  // Check if the directory exists
  if (!fs.existsSync(directory)) {
    console.error(`Error: Directory '${directory}' not found.`);
    return results;
  }

  const searchImages = (dir) => {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (ignoreDirectionsForImages.includes(item.name)) {
          continue;
        }

        if (item.isDirectory()) {
          searchImages(fullPath);
        } else {
          const extension = path.extname(item.name).toLowerCase().slice(1);
          if (imageFormats.includes(extension)) {
            results.push(fullPath);
          }
        }
      }
    } catch (error) {
      console.error(`Error: A problem occurred while reading the directory: ${error.message}`);
    }
  };

  searchImages(directory);
  return results;
};
#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { findImages } from './src/utilty/find-images.js';
import { findUnusedImages } from "./src/utilty/find-unused-images.js";

// Get arguments from command line
const args = process.argv.slice(2); // We skip the first two elements as they are node and the script itself

// Search in the 'public' folder by default
let currentDirectory = process.cwd();
let currentDirectoryFolderName = currentDirectory.split("\\").pop();
let targetDir = null;

// If the user entered a folder name, use it
if (args.length > 0) {
  currentDirectoryFolderName = args[0];
  targetDir = path.join(currentDirectory, currentDirectoryFolderName);
}

const dir = targetDir || currentDirectory;

// Check if the directory exists
if (!fs.existsSync(dir)) {
    console.error(`\x1b[31mError: Directory '${dir}' not found. Please make sure the directory exists.\x1b[0m`);
    process.exit(1);
}

// Find images in the directory
const images = findImages(dir);

// Print the number of images to the console
console.log(`\x1b[34mA total of ${images.length} images were found in the '${currentDirectoryFolderName}' directory.\x1b[0m`);

const unusedImages = findUnusedImages(currentDirectory);

if(unusedImages.length > 0){
    console.log('\x1b[34m%s\x1b[0m', `Found \x1b[34m${unusedImages.length}\x1b[0m unused images.`);
    console.log('\x1b[34mUnused images:\x1b[0m');
    unusedImages.forEach((image, index) => {
        console.log(`\x1b[33m${index + 1}. ${image}\x1b[0m`);
    });
}else{
    console.log("\x1b[31mNo unused images found.\x1b[0m");
}
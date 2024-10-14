#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { findImages } from './src/utilty/find-images.js';
import { findFiles } from "./src/utilty/find-files.js";
import { findUnusedImages } from "./src/utilty/find-unused-images.js";

// Komut satırından gelen argümanları al
const args = process.argv.slice(2); // İlk iki eleman node ve script'in kendisi olduğu için onları atlıyoruz

// Varsayılan olarak 'public' klasöründe arama yap
let currentDirectory = process.cwd();
let currentDirectoryFolderName = currentDirectory.split("\\").pop();
let targetDir = null;

// Eğer kullanıcı bir klasör adı girdiyse onu kullan
if (args.length > 0) {
  currentDirectoryFolderName = args[0];
  targetDir = path.join(currentDirectory, currentDirectoryFolderName);
}

const dir = targetDir || currentDirectory;

// Dizinin var olup olmadığını kontrol et
if (!fs.existsSync(dir)) {
    console.error(`Hata: '${dir}' dizini bulunamadı. Lütfen dizinin var olduğundan emin olun.`);
    process.exit(1);
}

// Dizindeki resimleri bul
const images = findImages(dir);

// Resim sayısını konsola yazdır
console.log(`'${currentDirectoryFolderName}' dizininde toplam ${images.length} adet resim bulundu.`);


const unusedImages = findUnusedImages(currentDirectory);

if(unusedImages.length > 0){
    console.log('Kullanılmayan resimler:', unusedImages);
}else{
    console.log("Kullanılmayan resim bulunamadı.");
}













 
import { readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getVersion = () => {
   const filePath = resolve(__dirname, '../../package.json');
   const fileBlob = readFileSync(filePath, 'utf8');
   const packageJson = JSON.parse(fileBlob);
   const { version } = packageJson;

   return version;
};

const bumpVersion = () => {
   const version = getVersion();

   const cargoFilePath = resolve(__dirname, '../../src-tauri/Cargo.toml');
   const cargoFileBlob = readFileSync(cargoFilePath, 'utf8');
   const newCargoFile = cargoFileBlob.replace(/version = .*/, `version = "${version}"`);

   writeFileSync(cargoFilePath, newCargoFile);

   ['../../src-tauri/tauri.conf.json'].forEach((path) => {
      const clientFilePath = resolve(__dirname, path);
      const clientFileBlob = readFileSync(clientFilePath, 'utf8');
      const newClientFile = clientFileBlob.replace(/"version": .*/, `"version": "${version}",`);

      writeFileSync(clientFilePath, newClientFile);
   });
};

bumpVersion();

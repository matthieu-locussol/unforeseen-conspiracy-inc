import { execSync } from 'child_process';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getGitCommitHash = (): string => {
   try {
      return execSync('git rev-parse --short HEAD').toString().trim();
   } catch (error) {
      console.error(error);

      return '';
   }
};

const run = () => {
   const packageJson = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8'),
   );

   const versionBuild = packageJson.version;
   const versionCommit = getGitCommitHash();
   const versionDate = new Date().toISOString().split('T')[0];

   const versionFileContent = `// This file is auto-generated. Do not edit manually.
export const VERSION_BUILD = '${versionBuild}';

export const VERSION_COMMIT = '${versionCommit}';

export const VERSION_DATE = '${versionDate}';
`;

   fs.writeFileSync(path.resolve(__dirname, '../data/version.ts'), versionFileContent);

   console.log(
      `Version file generated: version ${versionBuild}, commit ${versionCommit}, date ${versionDate}.`,
   );
};

run();

import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');

function checkFileExistsCaseSensitive(filePath) {
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  if (!fs.existsSync(dir)) return false;
  const files = fs.readdirSync(dir);
  return files.includes(base);
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
          // Resolve the path
          let resolvedPath = path.resolve(dir, importPath);
          
          // Check if it's a file with extension or directory
          if (!path.extname(resolvedPath)) {
            // Try .jsx and .js
            if (fs.existsSync(resolvedPath + '.jsx')) {
              resolvedPath += '.jsx';
            } else if (fs.existsSync(resolvedPath + '.js')) {
              resolvedPath += '.js';
            } else if (fs.existsSync(path.join(resolvedPath, 'index.jsx'))) {
              resolvedPath = path.join(resolvedPath, 'index.jsx');
            } else if (fs.existsSync(path.join(resolvedPath, 'index.js'))) {
              resolvedPath = path.join(resolvedPath, 'index.js');
            }
          }

          if (fs.existsSync(resolvedPath)) {
            if (!checkFileExistsCaseSensitive(resolvedPath)) {
              console.log(`CASE MISMATCH in ${fullPath}: Imports ${importPath} but actual file casing is different.`);
            }
          } else {
             console.log(`FILE NOT FOUND in ${fullPath}: Imports ${importPath}`);
          }
        }
      }
    }
  }
}

scanDirectory(srcDir);
console.log("Check complete.");

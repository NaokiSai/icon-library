import fs from 'fs';
import path from 'path';

const ICONS_DIR = './src/components/icons';
const OUTPUT_FILE = './src/index.ts';

function scan(dir, structure = {}) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      structure[file.name] = scan(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      const name = path.basename(file.name, '.tsx');
      
      // 1. src からの相対パスを取得
      // 2. Windowsの \ を / に変換
      // 3. 拡張子 .tsx を削除
      let relativePath = path.relative('src', fullPath)
        .split(path.sep)
        .join('/')
        .replace(/\.tsx$/, '');

      structure[name] = './' + relativePath;
    }
  }
  return structure;
}

const structure = scan(ICONS_DIR);
let imports = '';

function buildExport(obj, indent = '') {
  let str = '{\n';
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      // 変数名（Alias）からは記号を消すが、パス（value）はそのまま使う
      const varName = 'Icon_' + value.replace(/[^a-zA-Z0-9]/g, '_');
      imports += `import ${varName} from '${value}';\n`;
      str += `${indent}  ${key}: ${varName},\n`;
    } else {
      str += `${indent}  ${key}: ${buildExport(value, indent + '  ')},\n`;
    }
  }
  return str + `${indent}}`;
}

const exportBody = `export const Icons = ${buildExport(structure)} as const;\n`;

// 最終的な書き出し
fs.writeFileSync(OUTPUT_FILE, `${imports}\n${exportBody}`);
console.log(`✅ Generated: ${OUTPUT_FILE}`);
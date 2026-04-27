const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}
const files = walk('./src');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if(c.includes('tech-shadow-lg')) {
    c = c.replace(/tech-shadow-lg/g, 'polaroid-shadow');
  }
  if(c.includes('tech-shadow')) {
    c = c.replace(/tech-shadow/g, 'polaroid-shadow');
  }
  fs.writeFileSync(f, c);
});

const fs = require('fs');
const path = __dirname + '/complianceData.js';

console.log('Reading complianceData.js file...');
let content = fs.readFileSync(path, 'utf8');

// Fix the syntax error with Finland entry
console.log('Fixing syntax error in Europe array...');
content = content.replace(/"Finland",",/g, '"Finland",');

// Write the fixed content back to file
console.log('Writing fixed content back to file...');
fs.writeFileSync(path, content, 'utf8');
console.log('Done! Syntax error has been fixed.');

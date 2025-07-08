// Utility Script - Cleans compliance data by removing unsupported service types
// Purpose: Removes deprecated service types (psychology, coaching, mentalHealthCoach) from complianceData.js
// Usage: Run with Node.js - `node cleanComplianceData.js`

const fs = require('fs');
const path = __dirname + '/complianceData.js';

// Read the compliance data file
let content = fs.readFileSync(path, 'utf8');

// Remove unwanted keys from colorCode objects
// Keeps only: counselling, counselling-psychology, clinical
content = content.replace(
  /colorCode:\s*{([^}]+)}/g,
  (match, inner) => {
    // Define allowed service types
    const allowed = ['counselling', 'counselling-psychology', 'clinical'];
    // Filter lines to keep only allowed keys
    const filtered = inner
      .split('\n')
      .filter(line =>
        allowed.some(key => line.includes(`'${key}'`) || line.includes(`"${key}"`))
      )
      .join('\n');
    return `colorCode: {\n${filtered}\n}`;
  }
);

// Remove deprecated service blocks entirely
// Targets: psychology, coaching, mentalHealthCoach
content = content.replace(
  /,\s*(psychology|coaching|mentalHealthCoach)\s*:\s*{[^}]*}/g,
  ''
);

// Write cleaned content back to file
fs.writeFileSync(path, content, 'utf8');
console.log('Cleaned up unused service data.');

const fs = require('fs');
const path = __dirname + '/complianceData.js';

let content = fs.readFileSync(path, 'utf8');

// This regex finds all colorCode objects and removes unwanted keys
content = content.replace(
  /colorCode:\s*{([^}]+)}/g,
  (match, inner) => {
    // Keep only the allowed keys
    const allowed = ['counselling', 'counselling-psychology', 'clinical'];
    const filtered = inner
      .split('\n')
      .filter(line =>
        allowed.some(key => line.includes(`'${key}'`) || line.includes(`"${key}"`))
      )
      .join('\n');
    return `colorCode: {\n${filtered}\n}`;
  }
);

// Remove unwanted service blocks (psychology, coaching, etc.)
content = content.replace(
  /,\s*(psychology|coaching|mentalHealthCoach)\s*:\s*{[^}]*}/g,
  ''
);

// Write the cleaned content back
fs.writeFileSync(path, content, 'utf8');
console.log('Cleaned up unused service data.');

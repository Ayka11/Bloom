// Test script to see if data loads
const flowers = require('./bloom-data.js').flowers; // This won't work easily as it's not a module
// Let's just check if files exist and are valid JS
try {
    const data = fs.readFileSync('bloom-data.js', 'utf8');
    console.log("bloom-data.js size:", data.length);
} catch (e) {
    console.error(e);
}

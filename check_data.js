const fs = require('fs');
const content = fs.readFileSync('bloom-data.js', 'utf8');
eval(content);
console.log('flowers count:', flowers.length);

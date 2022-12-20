const path = require('path')
console.log(path.sep);
let joined = path.join('content','subfolder','test.txt')
console.log(joined)
let base = path.basename(joined)
console.log(base);
// Get absolute path
let absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute);
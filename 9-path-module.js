const path = require('path');

//separatator]
console.log(path.sep)

//whole path
const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath)

//base path
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

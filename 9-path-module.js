const path = require('path'); //import the built in path module

console.log(path.sep); //the delimiter in your path

const filePath = path.join('/content', 'subfolder', 'test.txt' ); //normalizes the path
console.log(filePath);

const base = path.basename(filePath); //gives you the base of the path
console.log(base);

//sometimes in an application you need to provide an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); //remember the dirname global
console.log(absolute);
const reactChunks = require('../config/reactchunks');
const fs = require('fs');
const path = require('path');


let jsDir = fs.readdirSync(path.join(__dirname, '../', 'public', 'build', 'static', 'js'));
let jsChunks = jsDir.filter((jsFile) => { return jsFile.match(/.*\.(js)/ig);});

let cssDir = fs.readdirSync(path.join(__dirname, '../', 'public', 'build', 'static', 'jcss'));
let cssChunk = cssDir.filter((cssFile) => { return cssFile.match(/.*\.(css)/ig)});

console.log(jsChunks);
console.log(cssChunk);

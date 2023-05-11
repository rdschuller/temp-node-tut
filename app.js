//can install packages from npm as a local dependency or globally 
//to install locally npm i <package name>
//for global do sudo npm install -g <package name>
// more likely to be installing things locally, because of npx (will cover later)

//manifest file which stores important information about the project is package.json
//can be done manually, by creating package.json in the root
//or run npm init (with step by step instructions) or npm init -y

const _ = require('lodash') //must be installed beofre using require
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
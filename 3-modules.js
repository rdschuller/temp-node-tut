// Modules - you will execute one file, but your code will be split into modules

//every time you create your own module need to start with dot and forward slash
const names = require('./4-names');
const sayHi = require('./5-utils');


sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

//would this not be easier if the function were in seperate files, modules allow us to tdo this
//every file in node is a module

const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); //here we can see that whatever is invoked inside a module will run even if not particularly invoked

// this will stay local
const secret = 'SUPER SECRET'; //this is available everywhere in the file, but when put seperatly something else will hapen

//will share this with the rest of the application
const john = 'John';
const peter = 'Peter';

//console.log(module); //notice nothing is currently srored in the exports object

module.exports = {john, peter};
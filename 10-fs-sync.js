const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}); //the flag appends instead of overwritting


//notice that this does print out until the tasks are finished doing the task, everything is done synconously
// this can be problematic if the task takes a long time, or that many users are dong at once
console.log('done with the task');
console.log('starting next task');
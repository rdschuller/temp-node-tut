//this is now using a asyncornous method, in which you need to provide a callback, an alternative is to use promises

const { readFile, writeFile, read } = require('fs');


console.log('start');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        } );
    });
});

//notice that this will log out before the taks are finished being completed
console.log('starting next task');

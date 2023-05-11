//GLOBALS - No Window!!
//this means we can not do query selectors, or anything like that - there is no browser
// you will get an error if you try to access the window

//these are the types of variables
//__dirname - path to the current directory
//_filename - name of the file
// require - function to use modueles (CommonJS)
// module - informaiton abou the current module
// process - gives us information about the environment where the program is being executed

console.log(__dirname); //prints out the path 
setInterval(() => {
    console.log('hello world')
}, 1000);
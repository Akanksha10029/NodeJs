const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);

// synchronous-------------------------------------------------------------------------------------------------------------------------------->


// sync or blocking req and async or non-blocking req file handling 

// fs.appendFileSync("test1.txt","Akanksha\n");

console.log('1');

// Blocking 
const read = fs.readFileSync("test1.txt","utf-8");
console.log(read);

console.log('2');

// output:  
// 1
// Akanksha
// 2


// Asynchronous ------------------------------------------------------------------------------------------------------------------------->

console.log('1');

// Non-blocking

fs.readFile("test1.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log('2');

// output:
// 1
// 2
// Asynchronous => Content would be written in this file and a new file would be created if it does not exist
// Akanksha

// so we can see that in the case of synchronous file handling, the output is printed in the order in which the code is written,  but in the case of asynchronous file handling, the output is printed in the order in which the code is executed by the node js engine like it prints the output which takes less time and for reading the file it takes a while to read so it prints is after less time taking code.

//Default Thread pool size = 4
//Max? - 8 core cpu => 8 threads
// For working with files, Node.js provides a built-in module called fs (File System).
const fs = require('fs');

// // fs.writeFileSync() method is used to write files in synchronous manner
// fs.writeFileSync("./test.txt","Synchronous => Content would be written in this file and a new file would be created if it does not exist");

// // fs.writeFile() method is used to write files in asynchronous manner in which we have to include the callback function for error handling
// fs.writeFile("./test1.txt","Asynchronous => Content would be written in this file and a new file would be created if it does not exist", (err) => {});

//readFileSync() is a synchronous method used to read files
const data = fs.readFileSync("./contacts.txt","utf-8");
console.log(data.toString());

fs.appendFileSync("contacts.txt","\nlinkedin");
console.log("content appended successfully");

// Read the file using readFile (asynchronous)
fs.readFile("./contacts.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data.toString());
});
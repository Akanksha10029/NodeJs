// For working with files, Node.js provides a built-in module called fs (File System).
const fs = require('fs');

// fs.writeFileSync() method is used to write files in synchronous manner
fs.writeFileSync("./test.txt","Synchronous => Content would be written in this file and a new file would be created if it does not exist");

// fs.writeFile() method is used to write files in asynchronous manner in which we have to include the callback function for error handling
fs.writeFile("./test1.txt","Asynchronous => Content would be written in this file and a new file would be created if it does not exist", (err) => {});

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

// fs.appendFileSync("./test.txt",`${Date.now()} Hey there!!\n`);

// copying a file from one location to another location using copyFileSync method of fs module
fs.cpSync("./test.txt", "./copy.txt");

fs.cpSync("./test.txt", "./copy2.txt");
// deleting a file using unlinkSync method of fs module
fs.unlinkSync('./copy2.txt');

// renaming a file using renameSync method of fs module
fs.renameSync('./copy.txt', './renamed.txt');

// To know the stats of the file using statSync method of fs module
console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").size);

// making directory using mkdirSync method of fs module
fs.mkdirSync("newFolder");
fs.mkdirSync("my-docs/a/b",{ recursive: true });
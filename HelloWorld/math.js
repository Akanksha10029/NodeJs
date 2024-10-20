// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// // This is the way to export the functions in the file => single export or we can say default export
// module.exports = {add, sub};

//another way to export the functions in the file => using exports object
exports.add = (a,b) => a + b; // => arrow function
exports.sub = (a,b) => a - b;
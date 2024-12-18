//Node architecture

//blocking...synchronous
const fs = require('fs')
console.log("a");
const result = fs.readFileSync("contact.txt", "utf-8")
console.log(result);
console.log("b");

//Non-blocking...Asynchronous
// const fs = require('fs')

console.log("1");

fs.readFile("contact.txt", "utf-8", (err, result) => {
    console.log(result);
})
console.log("2");
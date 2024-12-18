const http = require('http')
const fs = require('fs')

const myserver = http.createServer((req, res) => {
    if (req.url === '/favicon.ico ') return res.end();
    console.log('kanndu');
    const message = `${Date.now()} : ${req.url} \n`;
    fs.appendFile("my.text", message, (err, data) => {
        switch (req.url) {
            case '/': res.end('hello welcome to all ')
                break
            case '/about': res.end('i am youra')
                break
            case '/a': res.end('aaaro')
                break
            default: res.end('error');

        }
    });
});

myserver.listen(3002, () => {
    console.log('server stated');
})
// const { log } = require('console')
// const http = require('http')
// const fs = require('fs')

// const myserver = http.createServer((req, res) => {
//     const log = `${Date.now()}:${req.url} req time...\n`
//    fs.appendFile(
//     "log.text",log,(err,data)=>{
//         switch(req.url){
//             case '/':
//                  res.end('welcom to my server Homepage');
//                  break
//                  case '/about':
//                  res.end('welcom to about');
//                  break
//                  default:
//                  res.end('error');
//         }

// }
//    );

// });

// myserver.listen(3001, () => {
//     console.log('server started');
// })

// const os = require('os')
// console.log(os.cpus().length);


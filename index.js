const http = require('http')
const exp = require('express')
const app = exp()
app.get('/', (req, res) => {
    return res.send('welcome to homepage ' + req.query.username)//http://localhost:3000/?username=Gopika
})
app.get('/ab', (req, res) => {
    const username = req.query.username
    return res.send(`hey ${username} your age is ` + req.query.age)//http://localhost:3000/ab/?username=Gopika&age=20
})
const myserver = http.createServer(app);
myserver.listen(3000, () => {
    console.log('server stated');
})
//with the help of express right less code


// no need of these code
// const fs = require('fs')
// const url = require('url')

// function myHandler(req,res){
//     if (req.url === '/favicon.ico') return res.end();
//     const message = `${Date.now()} / ${req.method}: ${req.url} \n`;
//     const myUrl = url.parse(req.url, true)
//     fs.appendFile("my.text", message, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/': res.end('hello welcome to all  on homepage ')
//                 break
//             case '/about':
//                 const userna = myUrl.query.myname
//                 res.end(`i am ${userna}`)

//                 break
//             case '/a': res.end('aaaro')
//                 break
//             case '/search':
//                 const searchresult = myUrl.query.search_q 
//                 res.end(`search result is ` + searchresult)
//                 break
//             case '/signup':
//                 if (req.method === "GET") res.end('this is signup page')
//                 else if (req.method === "POST") {
//                     res.end('Sucess')
//                 }

//                 break



//             default: res.end('error');

//         }
//     });
// }
const http = require('http')
const fs = require('fs')
const url = require('url')

const myserver = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const message = `${Date.now()} / ${req.method}: ${req.url} \n`;
    const myUrl = url.parse(req.url, true)
    fs.appendFile("my.text", message, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end('hello welcome to all  on homepage ')
                break
            case '/about':
                const userna = myUrl.query.myname
                res.end(`i am ${userna}`)
                // http://localhost:3002/about?myname=Gopika&userid=1&search=dog
                break
            case '/a': res.end('aaaro')
                break
            case '/search':
                const searchresult = myUrl.query.search_q //http://localhost:3002/search?search_q=malayalam+songs
                res.end(`search result is ` + searchresult)//search result is malayalam songs
                break
            case '/signup':
                if (req.method === "GET") res.end('this is signup page')
                else if (req.method === "POST") {
                    res.end('Sucess')
                }

                break



            default: res.end('error');

        }
    });
});

myserver.listen(3002, () => {
    console.log('server stated');
})
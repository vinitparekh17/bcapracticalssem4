const http = require('http')
const fs = require('fs')

try {
http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        res.end(data)
    })
}).listen(8080)
} catch(err) {
    console.log(err);
}

console.log("server is up");
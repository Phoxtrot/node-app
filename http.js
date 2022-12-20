const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url=== '/') {
        return res.end("Welcome to the homepage")        
    }
    if(req.url === '/about'){
        return res.end('Welcome to the about page')
    }
    res.end(
        `<h1>Oops</h1>
        <p>Can't find the about page</p>
        <a href="/">Back Home</a>`
    )
    
})
server.listen(9000)
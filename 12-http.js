const http = require('http');

//req = 클라이언트로 부터 요청이 들어오는 것 
//res = 이것을 이용하여 돌려보냄
//if문을 사용하여 원하는 페이지에서 띄울수있는 문자와
//err페이지가 나올경우 설정 가능
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back page</a>


    `)
})

//서버의 locolhost:5000에서 기다리겠습니다~!
server.listen(12346)
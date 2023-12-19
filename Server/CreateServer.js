var http=require('http')

http.createServer(function(req,res){
    res.write('server')
    res.end()
}).listen(7000)
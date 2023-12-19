var http=require('http')
var fs=require('fs')
var url=require('url')
http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    // console.log(q.pathname)
    if(q.pathname==='/'){
    fs.readFile('Signup.html',function(err,data){
    
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end();
    
    })
}
else if(q.pathname==='/SignupAction'){
        // console.log(q.query.fname)
        res.writeHead(200,{'content-type':'text/html'})
        res.write(q.query.fname)
        res.end()
    }
   
    

else{
 res.write('error') 
 res.end()      
}
}).listen(7000,console.log("server connected"))
const express=require('express')

const app=express();

app.get('/',function(req,res){
    res.send('hello')
})


app.listen(7000,function(){
    console.log("express connected")
})
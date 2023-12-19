const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')

const app=express()


app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.send('home')
})

app.get('/signup',function(req,res){

    res.sendFile(path.join(__dirname,'form.html'))
})

app.post('/signup',function(req,res){
    const firstname=req.body.fname;
    const lastname=req.body.lname;
    const number=req.body.number;
    console.log(lastname)
    const result = `First Name: ${firstname}, Last Name: ${lastname}, Number: ${number}`;
    res.send(result);

    
})

app.get('/about',(req,res)=>{
    res.send('about')   
})

app.listen(7000,function(){
    console.log('server connected')
})
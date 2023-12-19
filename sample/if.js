var read=require('readline-sync')

function eg(){
    var a=parseInt(read.question('enter a number'))
    var b= parseInt(read.question('enter sec number'))

    if(a>b){
        console.log("greatest number is ",+a);
    }
    else{
        console.log("greatest number is ",+b)
    }
}
eg()
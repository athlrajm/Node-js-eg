var read=require('readline-sync')
function sum(){
    var a=parseInt(read.question('enter a number'));
    var b=parseInt(read.question('enter a number'));
    var sum=a+b;
console.log(sum);
}
sum()
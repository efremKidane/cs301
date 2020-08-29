const prompt=require('prompt-sync')();
let stuName=prompt("enter student name:");
let numCre=prompt("enter the number of completed university credit:");

numCre=parseInt(numCre);
if(numCre<=30){
    console.log(stuName+" "+"Freshman");
}
else if(numCre<=60){
    console.log(stuName+" "+"sophpomere");
}
else if(numCre<=90){
    console.log(stuName+" "+"junior");

}
else{
    console.log(stuName+" "+"senior");
}
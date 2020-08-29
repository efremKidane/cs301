const prompt=require('prompt-sync')();
//this function calls living_volume and roof volume and
//calculates and returns house volume 
function house_volume(h,w,d,s) {
   
   
     return living_volume(h,w,d)+roof_volume(w,d,s); 
    
}

//this function takes arguments from house_volume function and
//calculates the living volume and returns value to the house_volume 

function living_volume(h,w,d){
    let livingVolume=h*w*d;
    
    return livingVolume;

}

//this function recievs argument from house_volume function
//and calls triangle area by passing arguments to the traingle_area function
//calculates roof volume and returns value to house_volume
function roof_volume(w,d,s){
    let rvolume=w*ara_triangle(s,d,s);
    
    return rvolume;
}
// this function recieves arguments from roof_volume function
//calculates area of the traingle and returns value to roof_volume function

function ara_triangle(a,b,c){
    let p=(a+b+c)/2;
    let areaTriangle=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    
    return areaTriangle;

}
let h=parseFloat(prompt("please enter height:"));
let w=parseFloat(prompt("please enter width:"));
let d=parseFloat(prompt("please enter depth:"));
let s=parseFloat(prompt("please enter sweep:"));

console.log(house_volume(h,w,d,s));
 
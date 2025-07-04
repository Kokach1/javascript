//function decleration 
function fun(){
    console.log("make out the hills");
    console.log("this shit is same as function in c and java");
}
//function call
fun();

// function with input
function shoot(y){// variabl used in function defintion is called "parameter"
    console.log("shoot who",y);
}
let y = prompt("free what??");
shoot(y);// variable passed in function call is called "argument"
y = prompt("shoot who");
shoot(y);


//return 
function sum(a,b){
    console.log(a+b);
    return a+b;// returs rhe value to the function call
    console.log("this wont be printed");//the code after reuturn is not executed
    //this wont couse any error ,it just wont get executed
}
let x= sum(4,9);
console.log(x);

function diff(x,y){
   let  d= x-y;
   return d;// these are local variable ie the variables declared inside a function has scope only insde the function
}
let o=diff(9,5);
console.log(o);


//arrow functions (shorter form to declare a function)
/*
datatype function_Name = (parameter1,parameter2)=>{
   code to be executed or definition of the function 
}
*/
const mul = (a,b) => { 
    return a*b;
};
console.log (mul (3,4));
console.log (mul ());//retuns NAN but returns the body of the function for her
//for a single line function using arrow
const sig =()=> console.log("hellooo");
sig();



//function linked with an object is a methode (fuking bullshit)
//like toupercase 

//for each(used to prform operations on individual elements of an array)
let arr=[1,2,3,4,5,6,7];
/*stringName.forEach(function funName(variable)){
body of the funcion
}*/
arr.forEach(function p1(varr){
    console.log(varr+1);
})//note: forEach doesnt nead function call
//arrow function of forEach 
arr.forEach((val)=>{
    console.log(val**2);
})
//note:forEach can pass 3 values ie (item,index,the whole array)
arr.forEach((val,idx,ary)=>{
    console.log(val,idx,ary);
})
//note: forEvery only works for array not string
//note:higher order function/methods : functions which uses a function as parameter or returns a function eg:forEach

let ar=[43,547,2,45,7,567,345624,3421,567,123,434];
function pow(ip){
    console.log(ip**ip);
};
ar.forEach(pow);


let newwe=ar.forEach(pow);
console.log(newwe);

//map methode its simlear to forEach but it creates a new array in that process

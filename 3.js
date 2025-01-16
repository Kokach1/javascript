//for-of loop
var str= "vellam venam";
for(let i of str){
    console.log("i=",i);
}//used for string traversal

//for-in loop
var student ={
    name:"travis scot",
    age:27,
    class:"high",
    cgpa:0,
    isPass: false,
};
for(let i in student){
    console.log(i);//this only returns the key(name,cgpa...)
}
for(let key in student){
    console.log(key);
    console.log(student[key]);
}

//strings
var gh="ygasudvk f,jgcn,g";
//prints the size duh
console.log(gh.length);
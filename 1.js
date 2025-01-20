// basicaly print statement for the console 
console.log("this will be printed");
// variable decleartion this is same for array,string,int,float,boolen etc ...
name = "kok";
age = 1111111111111111;
//note 16 digits will be printed as it is ,from 17th digit they round it 
// doesint know the its value
x=undefined;
// value of this is null
y=null;
console.log (name);
console.log(name,age);
//declaring without any keyword , scope global, but note a best practice
n=2;
n=3;
n=4;//only this will be prined all other will be overided
console.log(n);
//declaring without any keyword is same as useing ver keyword,scope gllobal
var m=1;
var m=2;
var m=66;//only this will be prined all other will be overided
console.log(m); 
// but let keyword helps to solve it,scope block
let e=4;
/*
let e=6; // this shows error as the variable cant be declared multiple times
*/
// but can be overrided by 
e=5;
e=88;//only this will be prined all other will be overided
console.log(e);
//const : variable canot be redeclared or updated ,scope block
const h=44;
/*
const h=33;// this shows error as the variable cant be declared multiple times
h=34;// this also shows error
*/
console.log(h);
let r;
console.log(r);//tthis will print 'undefined'
/* but for const all of this shows error ,vale of const must be asigned at the time of decleration
const g;
g=66
console.log(g);
*/
//object (group of data),basicly like structure in c
// can be declared using const or var
const student={
    name:"uhasb fhdbgs",
    class:12,
    rollNo:69,
};
console.log(student);
// print specefic parts 
console.log(student.name);
//or
console.log(student["rollNo"]);
//values can be changed by 
student.rollNo= 96;
console.log(student.rollNo);
student["name"]="chanfira senan"
// or by
console.log(student.name);

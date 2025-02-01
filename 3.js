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
// it is used to block programers from declareing variables without keyword like var
// its a good practeace to use it and it helps privent errors
"use strict";
// string
// strings can be created by
let str1="the scouts";
let str2='lockup the house';
// if the string conains "then use ' and vise versa"
// this privents computer from geting confused 
var gh="ygasudvk f,jgcn,g";
//prints the size duh
console.log(gh.length);
// to acess by index
console.log(gh[5]);

// string literals

//bascial the use of ` insted of ' or " for example 
let obj={
    item : 'book',
    price : 100,
};
console.log ("cost of book is ", obj.item,"is ",obj.price,"rupees");
console.log (`cost of book is ${obj.item} is ${obj.price} rupees`);
// so they are basicaly saying the first method is harder to do (but idk i felt the other way arond )

//  js has the same escape characters as in c 
//  when we print the size of a string whith escape characters the two characters (eg \ and n in \n) are treated as a single character
let stri = "what \n the \n duck ";
console.log(stri.length);// we expect 20 but the op is 18 as the escape characters are treated as a single character 

//string methodes 

//note that these methodes doesnot change the original to get the we have to store that and print or use it in the log methode 
str.toUpperCase();
str.toLowerCase();
str.trim();//removes whitespaces
str.slice();// used to print  specific parts of the string 
//str.slice(start,end?) =>this prints from the start(including the start index) index upto end index(note: the value on the end index will not be printed )
//end index is optional => prints the value from the start to the end of string
let ni= 'abcdef';
console.log(ni.slice(2,8));//the end size is grater than the size of the array but it wont show error but it will print asmuch as it can
str1.concat(str2)//concats two strings
res= str1+str2;// this is also concatination
//str.replace(searchVal,newVal)//finds and replaces the first mathch 
let ig= "hellololol";
console.log(ig.replace("lo",'y'));// it replaced first lo with y
console.log(ig.replaceAll("lo",'y'));
str.charAt(index)//to return a character at that index

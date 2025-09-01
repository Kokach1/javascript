 // window object : it represeents an open window in a browser , it s not an object of js and is automatically crated by the brouser
 window.console.log ("this is same as console.log the brouser knows its a part of window")
 // DOM: document object model (every element in html is converted in objects [which is called document]in js enabling us to access it in js)
 console.log(window);// prints out window to the console 
 console.log(window.document);//prints out documet (ie the html file in console)in the console
 console.dir(window.document);// dir is used to print properties and methodes of special object (eg:document)
 console.log(document.body)//prints the body of the html file (window keyword is not used as its undrstood)

 //its used to make the page dinamic

 let k= document.getElementById("lol");
 console.log(k);//this prints out whole syntax of element with that id 
 console.dir(k);   //prints the propertey of the element with that id
// id is shown up in console with '#'
let l= document.getElementsByClassName("domm")
console.dir(l);// returns htmlcollection which is like an array of elements in the same class
let m = document.getElementsByTagName("h1" )
console.dir(m);// this also returns HTMLcollection 
// query selector can be used to return elemnts using id,class or tag it sorts the type automaticaly but returns the first match found
let n = document.querySelector("dom")
console.dir(n)
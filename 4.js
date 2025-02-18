let mark = [2, 4, 512, 6, 5, 5, 86,];
console.log(mark);// op will be the array along with its size , which can be expanted by cleaking the arrow it will then include elements by their index also length 
//length of the array also be printed by 
console.log(mark.length);//length property of an array 
let chararray = ["aiurghl", "8weuhoyrg", "rugihe"];
console.log(chararray);
console.log(mark[3]);//to print values by index
console.log(mark[99])// undefined since the value of that undex was never declared
//note: stings are not immutable ie its value can be changed whithout creating a new array 
mark[3] = 9;// the values can be changed like this 
console.log(mark);

//"for of " loop in array
let niglect = ["christin", "nishanth", "koka", "abram"];
for (let pm of niglect) {
    console.log(pm);
}

//array methodes : push(),pop(),toString(),concat(),unshift(),shift()
niglect.push("arjun");//adds  item to the end of the array 
console.log(niglect);
console.log("deleted item is", niglect.pop());//this deleates and returns the value of the last item in the array
console.log(niglect);
console.log(niglect.toString());//this converts array to string 
let pm =['annu','amrutha'];
console.log(niglect.concat(pm));//used to concat two or more arrays (muliple arrays can be concatnated by using , )
 






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
//note: concat() doesnt create updates any array it just returns a new one
pm.unshift("emil","go killa");// insert in begining 
console.log(pm);
console.log("deleted from front item is",pm.shift());// delete from begining
// slice(strtindex,endinsex);note:it doesnt change the original array
console.log(niglect.slice(1,3));//note:the value of ending index wont be printed
console.log(niglect.slice(1));//this will print all the vlues from the starting index
console.log(niglect.slice());//this prints all the values in the arrayz
 

// splice(strtindex,delCount,newElements)
let arr =[1,2,3,4,5,6,7,8];//note: the original array is replaced
arr.splice (2,3,21,34,54);//this will delete vlaues from intex 2 and delete the next 3 values then adds the given array to that spot then the remining of the original array is returned
console.log(arr);
//splice to add elements only not to delete them
arr.splice(4,0,696,9969);//this only adds elements at the given location
console.log(arr);
//splice to delete item
arr.splice(1,2);
console.log(arr);




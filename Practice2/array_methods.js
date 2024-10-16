var i;
var emp=new Array(1,2,3,4,6,7,8,"Abhay");
for(i=0;i<emp.length;i++)
    {
        console.log(emp[i]);
    }

// Array Reverse
var arr=new Array(4,3,2,1);
console.log(arr.reverse());

//Soring an array
console.log(arr.sort());

Concatination of arrays
var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=arr1.concat(arr2);
console.log(arr3);

pop  array
var arr1=[1,2,3,4,5,];
console.log("Elements Before pop");
console.log(arr1);
arr1.pop();
console.log("Elements After pop");
console.log(arr1)

Push array
var arr1=[1,2,3,4,5,];
console.log("Elements Before push");
console.log(arr1);
arr1.push(9);
console.log("Elements After push");
console.log(arr1)


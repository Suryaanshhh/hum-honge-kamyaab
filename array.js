//Arrays =refrence data type

//data type  - 1 Refrence data (x=5) (here x stores the address of heap memory where this 5 is stored)
//            2- Primitive Data (x=5) (here x directly contains the value 5)
//ex-refrence-array 
//ex primitive-integer,boolean , char,double 

//ARRAYS

//declaration of arrays
let arr=[1,2,"molestor"]//one way of declaration
//console.log(arr);
var Friends=new Array("molestor","t3nsor","Suryansh","bloom","Veer")//second way
console.log(Friends);

//console.log(Friends.length);//how to find length of array

//console.log(Friends[0])//to get first element
const y=Friends.length
//console.log(Friends[y-1])//to get last element

//Array.pop=removes the last element from array and saves it

//Friends.pop()

//console.log(Friends)

//Array.shift=Removes element from the start

//Friends.shift()

//console.log(Friends)


//Array.push=Adds element at end 

//Friends.push("Kajal")

//console.log(Friends)

//Array.unshift=adds element at start

//Friends.unshift("Shruti")

//console.log(Friends)


//max in array    let max=arr[0];
// for(var i=0;i<arr.length;i++){
//     if(max<arr[i]){
//       max=arr[i]
//     }
//   }
//   console.log(max)

//side question =min in array

//let shivani =i simp =main girl # abhi pati nahi h 
//let kajal = her simp =side chick #ye patne ko ready hai


//subarray -contigous part of array
// for(var i=0;i<arr.length;i++){
//     let subarray="";
//     for(var j=i;j<arr.length;j++){
//       subarray=subarray+arr[j]
//       console.log(subarray)
//     }
//   }


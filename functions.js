//!function
function userDetails(name , age , city){
    console.log(name);
    console.log(age);
    console.log(city);

    
}
userDetails("Varshini" , 20 , "hyd");

//! function expression
let b = function(){
    console.log("function expression is execting");
};
b();

//! IIFE
(function(){
    console.log("IIFE");
})();

//! Arrow function
//used to consise the norma; function syntax
//similar to ananymous function
let a = ()=>console.log("Arrow functional");
a();

let y =(a , b)=>console.log(a+b);
y(5);

let x=_=>{console.log("Hi");
        console.log("hello");
        console.log("bye");}
x();          


//******
const rows = 5;
const columns = 6;
for (let i = 0; i < rows; i++) {
  let row = "";
  for (let j = 0; j < columns; j++) {
    row += "*   "; 
  }

  console.log(row.trim()); 
}

//! Return keyword (terminate the block stop the excection)
function demo(a,b){
  console.log("hi");
  return a+b;
};
let c = demo(5,5);
console.log(c);

let d = (a,b) => a+b;
let e = y(10,20);
console.log(d);

let r = (a,b)=>{return a+b};
let q = r(10,20);
console.log(b);

//!HIGHER ORDER FUNCTION  
// [call back is function that is argument]
// [function which accepts another function as an argument]

function hof(a){
  return a;
};


//!closure 
//it is memory where function bunded together or nested together 
//by giving acces to inner most fun to acces the variable if outer most function}
var v = 100;
let j = "hi";
function l(){
  var user = "Varshini";
  let company =  "amazon";
  const sal = 1000000;
  console.log(user);
  console.log(company);
  console.log(sal);
  console.log(a , b)
};
l();



/* 
    primitive
    1. string
    2. number
    3. boolean
    4. null
    5. undefined
    6. symbol
    7. BigInt
*/
const temp= null
let state; //undefined
const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId); //false

/*
    reference (non primitive)
    1. array
    2. objects
    3. functions
*/

const arr=["a","b","c"]//arrays
//object
let myObj={ 
    ObjName:"abc",
    age:22,
}

const myfunc=function(){
    console.log("hello")
    
}

console.log(typeof temp)//object

//---------------memory------------------

//stack--> primitive  ,copy of variable
// heap--> non primitive, orignal value reference


let realvalue= "hello"

let anothervalue= realvalue //copy of variable is passed

anothervalue= "hello world"

console.log(realvalue)  // hello
console.log(anothervalue)  //hello world

// pass by reference, both point at same object
let obj1={
    mail:"abc@gmail.com",
    num: 1234,
}

let obj2= obj1

obj2.mail="cdf@gmail.com"

console.log(obj1.mail); //cdf@gmail.com
console.log(obj2.mail); //cdf@gmail.com



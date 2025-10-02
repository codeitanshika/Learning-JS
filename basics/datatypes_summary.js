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

console.log(typeof temp)// object

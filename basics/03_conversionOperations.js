let score= "33"
console.log(typeof score); //string

let valueInNumber=Number(score)
console.log(valueInNumber);// number

/*
    Number conv
    "33"-->33
    "33abc"---> NaN type-number
    ""-->NaN
    null--> 0
    undefined--> NaN
    true=>1 ; false=>0
*/ 

let isLoggedIn="0"

let isBooleanLoggedIn= Boolean(isLoggedIn)
console.log(typeof isBooleanLoggedIn); // boolean

/*
    1-->true, 0-->false
    "" --> false 
    "abc" -->true
*/


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // string


//**********operations*********** 

let value=3
let negValue= -value
// console.log(negValue);

console.log(2+2); //+-/%* **

let str1="hello"
let str2= "world"
console.log(str1+str2);

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32
console.log(1+"2"+2); //122
console.log(+true); //1
console.log(+"");//0

//useless practically


let num1, num2, num3
num1=num2=num3=2+2


let gameCounter=100
gameCounter++ //++gameCounter
console.log(gameCounter);




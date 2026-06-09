const score=400
const balance=new Number(100.45)
console.log(balance)

console.log(balance.toString())//string ban gya
console.log(balance.toFixed(1))//in ecom app
const n1=1123.8966
console.log(n1.toPrecision(3))//1.12e+3

const hundres=10000000000;
console.log(hundres.toLocaleString('en-IN'))//10,00,00,00,000

//----------MATHS--------------
console.log(Math.abs(-4))//4
console.log(Math.round(4.3))//4
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.6))//4
console.log(Math.min(-4,2,3,0))//-4
console.log(Math.max(-4,2,3,4))//4

console.log(Math.random())//0 to 1 only mostly decimal
console.log((Math.random()*10)+1) //to get between 1 to 9

const min=10
const max=10

Math.random()
const x=Math.random()
console.log(x) //0.1351513577647524
console.log(x*10) //1.351513577647524 left shift
console.log(Math.floor(x*10)) //1 value between 1 to 9
console.log(Math.floor(x*10)+1)//2

// mutliplied range instead of 10 and +1 to avoid 0
console.log(x*(max-min+1))// 1.4866649354122763  btw 1 to 9
console.log(Math.floor(x*(max-min+1)))//1
console.log(x*(max-min+1)+min)// 11.486664935412277 added min to get val btw the max and min
console.log(Math.floor(x*(max-min+1)+min))//11

//maths basics

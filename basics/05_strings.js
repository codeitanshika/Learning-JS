const name="abc"
const repoCount=50

console.log(name+repoCount+" value") //old method

console.log(`hello my  name is${name} and my repo count is${repoCount}`)

const game=new String('abcd-efgh')

console.log(game[0])
console.log(game.__proto__)

console.log(game.length)

console.log(game.toUpperCase())//does not change orignal string

console.log(game.charAt(2)) //chat at 2nd pos -->c

console.log(game.indexOf('b')) //index of b-->1

const newStr=game.substring(0,4)
console.log(newStr)

const str2=game.slice(-9,3)
console.log(str2)

const str3="             hiii      "
console.log(str3)
console.log(str3.trim())//can work on \n also

const url="https://abcd.com/abc%20def"
console.log(url.replace('%20','-'))
console.log(url.includes('abc'))
 
console.log(game.split('-')) //seperator, limit


//string basics




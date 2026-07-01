//forEach-Used when you simply want to visit every element.
let nums=[10,20,30,40]
nums.forEach(function(num){
    console.log(num)
})

/**2. map()

Most important array function.

Used to transform every element.

Returns a NEW array. */
let squares=nums.map(num=>{
    return num*num;
});
console.log(squares)

//convert objects
let users=[
{name:"Rahul"},
{name:"Aman"},
{name:"Neha"}
];
let names=users.map(user=>user.name)
console.log(names);

/**filter() Returns only elements satisfying a condition. */

let results=nums.filter(n=>n%2!=0)
console.log(results)

// reduce()-Converts an array into one value.
let sum=nums.reduce((total,current)=>{return total+current},0)
console.log(sum)

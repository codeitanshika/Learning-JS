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
let result=nums.find(num=>num>25);

console.log(result);

console.log(nums.findIndex(num=>num==30));

console.log(nums.some(num=>num%2!=0));

let nums1=[2,4,6];

console.log(nums1.every(num=>num%2==0));

let fruits=["Apple","Banana","Mango"];

console.log(fruits.includes("Banana"));

let fruits=["Apple","Banana","Mango"];

console.log(fruits.indexOf("Mango"));

// sort
let nums=[5,2,8,1];

nums.sort();

console.log(nums);

// correct
nums.sort((a,b)=>a-b);

// reverse
let nums=[1,2,3];

nums.reverse();

console.log(nums);
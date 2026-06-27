let nums=[10,20,30,40];

nums.push(50);
nums.pop();
nums.unshift(5);
nums.shift();

console.log(nums);

nums.forEach(n=>console.log(n));

let doubled=nums.map(n=>n*2);

console.log(doubled);

let even=nums.filter(n=>n%20===0);

console.log(even);

let sum=nums.reduce((a,b)=>a+b);

console.log(sum);
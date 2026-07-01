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
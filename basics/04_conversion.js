// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true

//not predictable result so avoid

console.log(null > 0);   //false
console.log(null == 0); //false
console.log(null >= 0); //true  
// equality check == and comparison op work diff
// comparisons convert null to a number, treating as 0
//thats why true
console.log(undefined == 0);  // all false
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict check ie checks datatype without conversion

console.log("2" === 2);
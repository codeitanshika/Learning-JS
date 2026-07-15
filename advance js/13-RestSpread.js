function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);
const user = {
    name: "Anshika"
};

const updatedUser = {
    ...user,
    age: 21
};

console.log(updatedUser);
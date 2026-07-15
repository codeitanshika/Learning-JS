// ?. = "If it exists, continue; otherwise return undefined.
const student = {
    name: "Anshika",
    address: {
        city: "Ghaziabad"
    }
};

console.log(student.address?.city);
console.log(student.contact?.phone);
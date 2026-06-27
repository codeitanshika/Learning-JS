let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}

// Switch

let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid");
}

// Ternary Operator

let age = 19;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);
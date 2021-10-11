
// Variables

console.log("Starting JS");

const myName = "Michael";
console.log(myName);

const myAge = 30;
console.log(myAge);

const ignasiAge = 32;
const ageDiff = myAge - ignasiAge;

console.log(ageDiff);

// Conditionals

if (myAge > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are younger than 21");
}

if (myAge > ignasiAge) {
    console.log("You are older than Ignasi");
} else if (myAge === ignasiAge) {
    console.log("You are the same age as Ignasi");
} else {
    console.log("You are younger than Ignasi");
}

// Sorting Arrays

const names = ["Michael", "Tina", "Elisabeth", "Theresa", "Tim", "Mirko", "Dominik"];

console.log(names);
console.log(names.sort());
console.log(names[0]);
console.log(names[6]);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Looping over Arrays (For Testing uncomment lines.)

const ages =[30, 21, 35, 19, 24, 25, 22];

let i = 0;
let arrayLength = ages.length;

// While loops

// while(i < arrayLength ) {
//     console.log(ages[i]);
//     i++;
// }

// while(i < arrayLength ) {
//     if(ages[i] % 2 === 0){
//         console.log(ages[i])    
//     }
//     i++;
// }

// For Loop

for (let i = 0; i < arrayLength; i++ ) {
    if(ages[i] % 2 === 0 ) {
        console.log(ages[i]);
    }
}
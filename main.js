
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

// While loops

const ages =[30, 21, 35, 19, 24, 25, 22, 21];
// let i = 0;
// let arrayLength = ages.length;

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


// Functions that use Arrays

function lowestElement(array) {
    const min = Math.min(...array);
    console.log(min);
}
lowestElement(ages);

function highestElement(array) {
    const max = Math.max(...array);
    console.log(max);
}
highestElement(ages);

function printElement(array, index) {
    console.log(array[index]);
}
printElement(ages, 5);


function findDuplicates(array) {
    let sortedArray = array.slice().sort();
    let results = [];
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] === sortedArray[i]) {
            results.push(sortedArray[i]);
        }
    }
    console.log(results);
}
findDuplicates(ages);

const myColor = ["Red", "Green", "White", "Black"];

function joinToString (array) {
    let newArray = array.join()
    console.log(newArray);
}
joinToString(myColor);

function reversedNum(num) {
    console.log (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        )
    )
}
reversedNum(12345);

function returnAlphabetical(string) {
    let s = string.split('').sort();
    console.log(s)
}
returnAlphabetical("hello");

function capitalizeAll(string) {
    const array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    const str2 = array.join(" ");
    console.log(str2);    
}
capitalizeAll("Hi my name is Michael");

function findLongestWord(string) {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    for(let i = 0; i < stringSplit.length; i++){
        if(stringSplit[i].length > longestWord){ 
            longestWord = stringSplit[i].length; 
        }
    }
    console.log(longestWord); 
}
findLongestWord("this and that and wololololololooo");

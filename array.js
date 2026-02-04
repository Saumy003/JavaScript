// array in JS

let heroes = ["iron-man","hulk","spider-man" , "thor"];
console.log(heroes);

// array indices
let marks = [74, 78, 89, 68, 47];
marks[2] = 66;
console.log(marks);

// looping over an array
let arr = [9,8,7,6,5,4,3];

for (let idx = 0; idx < arr.length; idx++) {
    console.log(arr[idx]);
}

// for of loop to print el of array
let cities = ["pune", "mumbai", "delhi", "mohali", "kolkata"];

for (let city of cities) {
    console.log(city);
}
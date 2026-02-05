// ques on Functions

/* Ques.1 Create a function using the "function" keyword that takes a String as an argument 
and returns the number of vowel in the string*/ 

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

/* Ques2. Write arrow function to perform same task*/

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

/* Ques4. For a given array of numbers, print the square of each value using the forEach loop */
let arr = [1, 2, 3, 4, 5, 6];

arr.forEach( (val) => {
    console.log(val * val);
} );

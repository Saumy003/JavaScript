/* Get user to input a number using prompt("enter a number:").check if the number 
is a multiple of 5 or not*/

let num = prompt("enter a number:");

if (num % 5 == 0) {
    console.log(num , "is a multiple of five");
}
else {
    console.log(num , "is a NOT multiple of five");
}

// Write which can give the grade to the student according to the scores :

let marks = prompt("enter the marks scored:");

if (marks >= 80 && marks <=100) {
    console.log("GRADE A")
} else if (marks >=70 && marks <=89) {
    console.log("GRADE B")
} else if (marks >=60 && marks<= 69) {
    console.log("GRADE C");
} else if (marks >=50 && marks<= 59) {
    console.log("GRADE D");
} else if (marks <= 49 && marks >=0) {
    console.log("GRADE FAIL");
}
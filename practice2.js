// Q no. 1 print all the number b/w 0 to 100 which are divisible by 2.

for (let num = 0; num<=100; num ++) {
   if(num%2 === 0) {
    console.log("num=" , num);
   } 
}

/* Qno. 2 Create a game where you start with a random game number. Ask the user to keep guessing 
the game number until thr user enters the corect number */

let gameNum = 25;

let userNum = prompt("Guess the number : ");

while(userNum != gameNum) {
   userNum = prompt("You entered the wrong number. Try Again");

}
console.log ("congratulations, you entered the correct number !!");
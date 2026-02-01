// Ques on strings

/*Q1. Prompt the user to enter thier full name. Generate the usename on the basis of output
start username with @ and followed by their full name and ending with the fullname length*/

let fulname = prompt("enter your full name");

let username = "@" + fulname + fulname.length;
console.log(username);
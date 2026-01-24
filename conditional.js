// if-statement

// create a condition for the traffic rules 

let color = "green";

if (color == "green") {
    console.log("GO");
}
if (color == "yellow") {
    console.log("READY TO GO");
}
if (color == "red") {
    console.log("STOP");
}
// voting condition

let age = "25";

if (age >= 18) {
    console.log ("you can vote");
}
if (age <18) {
    console.log("you can't vote")
}

// if-else 

let mode ="light";
let colour;

if(mode=="dark") {
    colour = "black";
} else {
    colour = "white";
}
console.log(colour);

// else-if

let year = 34;
if(year <18) {
    console.log("jonior");
} else if (year > 60) {
    console.log("senior");
} else {
    console.log("middle");
}

// Events in javascript 

const button = document.querySelector("#btn");

button.onclick = () => {
    console.log("button1 is clicked");
};


// Event isteners(mostly used)

btn5.addEventListener("click" , () => {
    console.log("button3 is clicked");
});


// Create a toggle button that change the screen th dark-mode when clicked & light-mode when clicked again.

let mode_button = document.querySelector("#mode")

let current_mode

mode_button.addEventListener("click" , () => {
    if(current_mode === "light") {
        current_mode = "dark";
    } else {
        current_mode = "light";
    }

    console.log(current_mode)
});
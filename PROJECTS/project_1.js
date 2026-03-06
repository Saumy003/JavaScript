// MINI-PROJECT -> 1 //

// Tic Tac Toe Game in JavaScript //

const boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelectorAll("#reset_btn");
let newGameBtn = document.querySelector("#new-btn");

let turnO = true;

// winning patterns 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let patterns of winPatterns) {
        console.log(patterns[0], patterns[1], patterns[2]);
        console.log(boxes[patterns[0]].innerText, [patterns[1]].innerText, [patterns[2]].innerText);

        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("WINNER 🏆🏆🏆🎉🎊" , pos1Val);
            }
        }
        
    }
};
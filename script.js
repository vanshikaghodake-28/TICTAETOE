let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winmsg = document.querySelector(".win-msg");
let msg = document.querySelector("#msg");

let count = 0;
let turnO = true;//playerX , playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turnO = true ;
    enableBoxes();
    winmsg.classList.add("hide");
    count = 0;
};


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO==true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});
 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }
 const showWinner = (winner) => {
    msg.innerText = `Congratulations ,Winner is ${winner}`;
    winmsg.classList.remove("hide");
    disableBoxes();
 }
 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }

 const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
        checkDrawCondition();
    }
};
 const checkDrawCondition = () => {
    if(count == 9){
        msg.innerText = "The Game is Draw \n Please try Again";
        winmsg.classList.remove("hide");
        disableBoxes();
    }
 }

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX, playerO
let count = 0; //to track draw
 
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame= () => {
    turnO = true;
    count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO = false;
        }else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`
    msgContainer.classList.remove("hide");
    disabledBoxes();
};



const disabledBoxes = () => {
   for(let box of boxes){
    box.disabled = true;
   }
};

const enabledBoxes= () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (Winner) => {
    msg.innerText = `congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for(let pattern of winPattern){
        let posi1val =  boxes[pattern[0]].innerText;
        let posi2val =  boxes[pattern[1]].innerText;
        let posi3val =  boxes[pattern[2]].innerText;

        if(posi1val != "" && posi2val != "" && posi3val != ""){
            if(posi1val === posi2val && posi2val === posi3val){
                showWinner(posi1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);








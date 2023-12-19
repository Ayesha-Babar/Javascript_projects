let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let turnO=true;
let newGameButton=document.querySelector("#new-btn");
let message=document.querySelector("#msg");
let container=document.querySelector("#msg-container");
let count=1;

//playerX,playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const clickCount= () => {
    if(count===9)
    {
        console.log("game draw");
        container.classList.remove("hide");
        message.innerText="This game is a draw";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        clickCount();
        console.log(`box was clicked ${count} times`);
        if(turnO===true)
        {
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        count++;
    });
    
});

/*resetButton.addEventListener("click",()=> {
    console.log("game reset");
    boxes.forEach((box)=> {
      box.innerText="";
    })
});*/

const disableBoxes= () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner= (winner) => {
    message.innerText=`Congratulations! The winner is ${winner}`;
    container.classList.remove("hide");
    disableBoxes();
}

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame =() => {
    turnO=true;
    enableBoxes();
    container.classList.add("hide");
    count=0;
}


const checkWinner= ()=> {
     for(let patterns of winPatterns)
     {
        let pos0=boxes[patterns[0]].innerText;
        let pos1=boxes[patterns[1]].innerText;
        let pos2=boxes[patterns[2]].innerText;

        if(pos0!=="" && pos1!=="" && pos2!=="")
        {
            if(pos0===pos1 && pos0===pos2)
            {
                console.log(`The winner of the game is ${pos0}`);
                showWinner(pos0);
            }
        }    
     }

}



resetButton.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);















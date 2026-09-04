const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

//lets create to intialise game
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];

    //UI pr empty bhi krna pdeg
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].computedStyleMap.pointerEvents="all";
        //intialise box with css properties
        box.classList=`box box${index+1}`;

    })

    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="0";
    }
    else{
        currentPlayer="X";
    }
    //UI update
    gameInfo.innerText=`current Player-${currentPlayer}`;
}

function checkGameOver(){
    let answer="";
    winningPositions.forEach((position)=>{
        //all 3 boxes should be non-empty and exactly same in value
        if((gameGrid[position[0]]!==""||gameGrid[position[1]]!==""||gameGrid[position[2]]!=="")
            &&(gameGrid[position[0]]==gameGrid[position[1]])&&(gameGrid[position[1]]==gameGrid[position[2]]))
        {

                //check if X is winner
                if(gameGrid[position[0]]==="X")
                    answer="X";
                elseanswer="0";

                //diable pointer evnter
                boxes.forEach((box)=>{
                    box.computedStyleMap.pointerEvents="none";
                })

                //now we know X/O isnwineer
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
        }
    });

        //  it menas we have winner
    if(answer!==""){
        gameInfo.innerText=` Winner Player -${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //lets check whether there is tie
    let fillCount=0;
    gameGrid.forEach((box)=>{
        if(box!=="")
            fillCount++;
    });

    //board is filled,game is tie
    if(fillCount===9){
        gameInfo.innerText="Game Tied!";
        newGameBtn.classList.add("active");
    }
}

function handleClick(index){
    if(gameGrid[index]==""){
        boxes[index].innerHTML=currentPlayer;//UI pe kaam krta hai
        gameGrid[index]=currentPlayer;//gameGrid  pe kaam krta hai
        boxes[index].computedStyleMap.pointerEvents="none";
        //current color
        swapTurn();
        //check koi jeet toh nahi hai
        checkGameOver();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});

newGameBtn.addEventListener("click",initGame);





console.log("Welcome To Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let isGameOver = false;

// function to change the turn
let turn = "X";
const changeTurn = () => {
  return turn === "X" ? "0" : "X";

  // // if else logic

  // let result=""
  // if(turn==="x"){
  //     result="0"
  // }
  // else{
  //     result="x"
  // }
  // return result
};

//function to check the win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  console.log(boxtext);
  let wins = [
    [0, 1, 2 ,5,5,0],
    [3, 4, 5 ,5,15,0],
    [6, 7, 8,5,25,0],
    [0, 3, 6,,5,15,90],  //
    [1, 4, 7,5,15,90],
    [2, 5, 8,15,15,90],
    [2, 4, 6,5,15,135],
    [0, 4, 8,5,15,45],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won ";
      isGameOver = true;
      document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width="20vw"
    //   document.querySelector(".line").style.transform=`translate(${[e3]}vw,${[e4]}vw )rotate(${[e5]} deg)`
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width="20vw"
    } 
  });
};

// Game Logic
// music.play()

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play(); 
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText ="Turn For " + turn;
      }
    }
  });
});

    reset.addEventListener('click',()=>{
        let boxtext = document.querySelectorAll(".boxText");
        Array.from(boxtext).forEach(element=>{
            element.innerText=""
        })
        turn="X"
        isGameOver=false
        document.getElementsByClassName("info")[0].innerText ="Turn For " + turn;
        document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width="0vw"
        document.querySelector(".line").style.width="0vw"
    })
   
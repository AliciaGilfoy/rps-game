let choices = [
  {
    name: "rock",
    img: "./rock.png",
  },
  {
    name: "paper",
    img: "./paper.png",
  },
  {
    name: "scissors",
    img: "./scissors.png",
  },
  {
    name: "ready",
    class: "card-image-top-ready"
  }
]
let players = [
  {
    name: "playerOne",
    score: 0
  },
  {
    name: "Computer",
    score: 0
  },
]

let computerPickStatusElem = document.getElementById("computer-choice")
let computerPickImageElem = document.getElementById("computer-img")
let playerPickImageElem = document.getElementById("player-img")
let playerOneChoice = "ready"
let computerPick = "ready"

// on rock button click this brings up rock picture
function pickRock() {
  let playerOneChoice = "rock";
  let str1 = "card-image-top-"
  let playerOnePicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", playerOnePicture)
  drawMatch()
}
// on paper button click this brings up paper picture
function pickPaper() {
  let playerOneChoice = "paper";
  let str1 = "card-image-top-"
  let playerOnePicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", playerOnePicture)
  drawMatch()
}
// on scissors button click this brings up scissors picture
function pickScissors() {
  let playerOneChoice = "scissors";
  let str1 = "card-image-top-"
  let playerOnePicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", playerOnePicture)
  drawMatch()
}
// on undecided button click this brings up a random picture
function pickRandom() {
  let pickIndex = Math.floor(Math.random() * 2)
  let playerOneChoice = choices[pickIndex].name
  let str1 = "card-image-top-"
  let randomPicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", randomPicture)
  drawMatch()
}
// after any player 1 button is clicked this makes the computer pick a random picture
function drawMatch() {
  let pickIndex = Math.floor(Math.random() * 2)
  let computerPick = choices[pickIndex].name
  let str1 = "card-image-top-"
  let randomPicture = str1.concat(computerPick)
  console.log(computerPick)
  document.getElementById("computer-img").classList.replace("card-image-top-ready", randomPicture)
}
// this determines the winner
function drawWinner() {

}
// after clicking play again the game resets
function resetMatch() {
  document.getElementById("computer-img").classList = ""
  document.getElementById("computer-img").classList.add("card-image-top-ready")
  document.getElementById("player-img").classList = ""
  document.getElementById("player-img").classList.add("card-image-top-ready")
}
// this keeps score after each match
function keepScore() {

}

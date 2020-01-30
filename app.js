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

let computerPickStatusElem = document.getElementById("computer-choice").textContent
let computerPickImageElem = document.getElementById("computer-img")
let playerPickImageElem = document.getElementById("player-img")
let playerPickStatusElem = document.getElementById("player-choice").textContent
// let playerOneChoice = "ready"
// let computerPick = "ready"
let playerScore = players[0].score
let computerScore = players[1].score

// let playerScore = document.getElementById("player-one-score").toString()
// let computerScore = document.getElementById("computer-score").toString()

// on rock button click this brings up rock picture
function pickRock() {
  let playerOneChoice = "rock";
  let str1 = "card-image-top-"
  let playerOnePicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", playerOnePicture)
  document.getElementById("player-choice").textContent = playerOneChoice
  playerPickStatusElem = playerOneChoice
  drawMatch()
  drawWinner()
  // drawWinner(playerPickStatusElem, computerPickStatusElem)
}
// on paper button click this brings up paper picture
function pickPaper() {
  let playerOneChoice = "paper";
  let str1 = "card-image-top-"
  let playerOnePicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", playerOnePicture)
  document.getElementById("player-choice").textContent = playerOneChoice
  playerPickStatusElem = playerOneChoice
  drawMatch()
  drawWinner()
  // drawWinner(playerPickStatusElem, computerPickStatusElem)
}
// on scissors button click this brings up scissors picture
function pickScissors() {
  let playerOneChoice = "scissors";
  let str1 = "card-image-top-"
  let playerOnePicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", playerOnePicture)
  document.getElementById("player-choice").textContent = playerOneChoice
  playerPickStatusElem = playerOneChoice
  drawMatch()
  drawWinner()
  // drawWinner(playerPickStatusElem, computerPickStatusElem)
}
// on undecided button click this brings up a random picture
function pickRandom() {
  let pickIndex = Math.floor(Math.random() * 2)
  let playerOneChoice = choices[pickIndex].name
  let str1 = "card-image-top-"
  let randomPicture = str1.concat(playerOneChoice)
  console.log(playerOneChoice)
  document.getElementById("player-img").classList.replace("card-image-top-ready", randomPicture)
  document.getElementById("player-choice").textContent = playerOneChoice
  playerPickStatusElem = playerOneChoice
  drawMatch()
  drawWinner()
  // drawWinner(playerPickStatusElem, computerPickStatusElem)
}
// after any player 1 button is clicked this makes the computer pick a random picture
function drawMatch() {
  let pickIndex = Math.floor(Math.random() * 2)
  let computerPick = choices[pickIndex].name
  let str1 = "card-image-top-"
  let randomPicture = str1.concat(computerPick)
  console.log(computerPick)
  document.getElementById("computer-img").classList.replace("card-image-top-ready", randomPicture)
  document.getElementById("computer-choice").textContent = computerPick
  computerPickStatusElem = computerPick
}


// this determines the winner
function drawWinner() {
  if ((document.getElementById("player-choice").textContent === "rock") && (document.getElementById("computer-choice").textContent === "scissors")) {
    document.getElementById("match-result").textContent = "YOU WIN!";
    playerScore++
  }
  if ((document.getElementById("player-choice").textContent === "rock") && (document.getElementById("computer-choice").textContent === "paper")) {
    document.getElementById("match-result").textContent = "YOU LOSE."
    computerScore++
  }
  if ((document.getElementById("player-choice").textContent === "rock") && (document.getElementById("computer-choice").textContent === "rock")) {
    document.getElementById("match-result").textContent = "DRAW"
  }
  if ((document.getElementById("player-choice").textContent === "paper") && (document.getElementById("computer-choice").textContent === "scissors")) {
    document.getElementById("match-result").textContent = "YOU LOSE."
    computerScore++
  }
  if ((document.getElementById("player-choice").textContent === "paper") && (document.getElementById("computer-choice").textContent === "rock")) {
    document.getElementById("match-result").textContent = "YOU WIN!"
    playerScore++
  }
  if ((document.getElementById("player-choice").textContent === "paper") && (document.getElementById("computer-choice").textContent === "paper")) {
    document.getElementById("match-result").textContent = "DRAW";
  }
  if ((document.getElementById("player-choice").textContent === "scissors") && (document.getElementById("computer-choice").textContent === "scissors")) {
    document.getElementById("match-result").textContent = "DRAW"
  }
  if ((document.getElementById("player-choice").textContent === "scissors") && (document.getElementById("computer-choice").textContent === "paper")) {
    document.getElementById("match-result").textContent = "YOU WIN!"
    playerScore++
  }
  if ((document.getElementById("player-choice").textContent === "scissors") && (document.getElementById("computer-choice").textContent === "rock")) {
    document.getElementById("match-result").textContent = "YOU LOSE."
    computerScore++
  }
  keepScore()
}

//   for (playerPickStatusElem, computerPickStatusElem) {
//     case ("rock" && "scissors"):
//       return document.getElementById("match-result").textContent = "YOU WIN!";
//       break;
//     case ("rock" && "paper"):
//       return document.getElementById("match-result").textContent = "YOU LOSE.";
//       break;
//     case ("rock" && "rock"):
//       return document.getElementById("match-result").textContent = "DRAW";
//       break;
//     case ("paper" && "scissors"):
//       return document.getElementById("match-result").textContent = "YOU LOSE.";
//       break;
//     case ("paper" && "rock"):
//       return document.getElementById("match-result").textContent = "YOU WIN!";
//       break;
//     case ("paper" && "paper"):
//       return document.getElementById("match-result").textContent = "DRAW";
//       break;
//     case ("scissors" && "scissors"):
//       return document.getElementById("match-result").textContent = "DRAW";
//       break;
//     case ("scissors" && "paper"):
//       return document.getElementById("match-result").textContent = "YOU WIN!";
//       break;
//     case ("scissors" && "rock"):
//       return document.getElementById("match-result").textContent = "YOU LOSE.";
//       break;
//   }
// }

// after clicking play again the game resets
function resetMatch() {
  document.getElementById("computer-img").classList = ""
  document.getElementById("computer-img").classList.add("card-image-top-ready")
  document.getElementById("player-img").classList = ""
  document.getElementById("player-img").classList.add("card-image-top-ready")
  document.getElementById("computer-choice").textContent = ""
  document.getElementById("player-choice").textContent = ""
  document.getElementById("match-result").textContent = ""
}
// this keeps score after each match
function keepScore() {
  document.getElementById("player-one-score").textContent = playerScore.toString()
  document.getElementById("computer-score").textContent = computerScore.toString()
}

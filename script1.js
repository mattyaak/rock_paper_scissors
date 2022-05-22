console.log("Hello Script1!")

function computerPlay () {
    let a = Math.random()
    if (a < 0.33) {
        return "rock"
    } else if (a>=0.33 && a <0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}





function playRound(playerSelection, computerSelection) {

playerSelection = prompt("Rock or Paper or Scissors?");
computerSelection = computerPlay()
    

if (computerSelection == "rock" && playerSelection == "paper" ){
    console.log(computerSelection)
    console.log("You win!")
} else if (computerSelection == "rock" && playerSelection =="rock" ){
    console.log(computerSelection)
    console.log("Both showed rock!") 
} else if (computerSelection == "rock" && playerSelection == "scissors" ){
    console.log(computerSelection)
    console.log("You lost") 
} else if (computerSelection == "paper" && playerSelection == "paper" ){
    console.log(computerSelection)
    console.log("Both showed paper!") 
} else if (computerSelection == "paper" && playerSelection == "rock" ){
    console.log(computerSelection)
    console.log("You lost!") 
} else if (computerSelection == "paper" && playerSelection ==scissors ){
    console.log(computerSelection)
    console.log("You win!") 
} else if (computerSelection == "scissors" && playerSelection =="paper" ){
    console.log(computerSelection)
    console.log("You lost!") 
} else if (computerSelection == "scissors" && playerSelection =="scissors" ){
    console.log(computerSelection)
    console.log("Both showed scissors!") 
} else if (computerSelection == "scissors" && playerSelection =="rock" ){
    console.log(computerSelection)
    console.log("You win!") 
} else {
    console.log("game over!")
 }
  }
  
playRound()


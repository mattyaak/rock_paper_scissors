console.log("Hello World!")

function computerplay () {
    let a = Math.random()
    if (a < 0.33) {
        return "rock"
    } else if (a>=0.33 && a <0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

let a = computerplay()

const input = prompt("Rock or Paper or Scissors?");


if (a == "rock" && input == "paper" ){
    console.log(a)
    console.log("You win!")
} else if (a == "rock" && input =="rock" ){
    console.log(a)
    console.log("Both showed rock!") 
} else if (a == "rock" && input == "scissors" ){
    console.log(a)
    console.log("You lost") 
} else if (a == "paper" && input == "paper" ){
    console.log(a)
    console.log("Both showed paper!") 
} else if (a == "paper" && input == "rock" ){
    console.log(a)
    console.log("You lost!") 
} else if (a == "paper" && input ==scissors ){
    console.log(a)
    console.log("You win!") 
} else if (a == "scissors" && input =="paper" ){
    console.log(a)
    console.log("You lost!") 
} else if (a == "scissors" && input =="scissors" ){
    console.log(a)
    console.log("Both showed scissors!") 
} else if (a == "scissors" && input =="rock" ){
    console.log(a)
    console.log("You win!") 
} else {
    console.log("game over!")
 }

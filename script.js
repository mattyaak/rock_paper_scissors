console.log("Hello World!")

function computerplay () {
    let a = Math.random()
    if (a < 0.33) {
        console.log("rock")
    } else if (a>=0.33 && a <0.66) {
        console.log("paper")
    } else {
        console.log ("scissors")
    }
}

computerplay()
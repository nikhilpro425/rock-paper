function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function decodeRandomInt(num){
    if (num == 0) return "ROCK"
    else if (num == 1) return "SCISSOR"
    else return "PAPER"
}

function findWinner(human, computer, humanScore, computerScore){
    human = human.toLowerCase()
    computer = computer.toLowerCase()
    let result = ""

    if (human == computer){
        humanScore[0] += 1
        computerScore[0] += 1
        result = "It's a TIE!"
    }
    else if (human == "rock"){
        if (computer == "paper"){
            computerScore[0] += 1
            result = "Computer Wins!"
        } 
        else if (computer == "scissor"){
            humanScore[0] += 1
            result = "Player Wins!"
        }
    }
    else if (human == "paper"){
        if (computer == "scissor"){
            computerScore[0] += 1
            result = "Computer Wins!"
        } 
        else if (computer == "rock"){
            humanScore[0] += 1
            result = "Player Wins!"
        }
    }
    else if (human == "scissor"){
        if (computer == "rock"){
            computerScore[0] += 1
            result = "Computer Wins!"
        } 
        else if (computer == "paper"){
            humanScore[0] += 1
            result = "Player Wins!"
        }
    }
    return result
}

function singleRound(humanScore, computerScore){
    let humanChoice = prompt("Pick: Rock, Scissor or Paper").toUpperCase()
    let computerChoice = decodeRandomInt(getRandomInt(3))

    let result = findWinner(humanChoice, computerChoice, humanScore, computerScore)
    
    console.log("Player Picked: " + humanChoice)
    console.log("Computer Picked: " + computerChoice)
    console.log("Result: " + result)
    console.log("Player's Score: " + humanScore[0])
    console.log("Computer's Score: " + computerScore[0])
}

function main(){
    const humanScore = [0]
    const computerScore = [0]

    let rounds = parseInt(prompt("How many rounds do you wish to play?: "))
    for (let i = 1; i<=rounds; i++){
        console.log("Round -- " + i)
        singleRound(humanScore, computerScore)
    }

    if (humanScore[0] > computerScore[0]){
        console.log("PLAYER WINS THE GAME !!!")
    }
    else if (humanScore[0] < computerScore[0]){
        console.log("COMPUTER WINS THE GAME !!!")
    }
    else if (humanScore[0] == computerScore[0]){
        console.log("THE GAME ENDS IN A TIE !!!")
    }
    let newgame = parseInt(prompt("To start a fresh game enter 1 else enter 0: "))
    
    if (newgame == 1) main()
}

main()

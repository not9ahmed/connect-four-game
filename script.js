console.log("Hello World")

//Game matrix
const gameDivs = document.querySelectorAll('.game-circle')

console.log(gameDivs[0])

const resetButton = document.querySelector('#play-again-btn')


const result = document.querySelector('#result')

let gameTable = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ']]

// Setting the value score
let redScore = document.getElementById('red-score-value')
let blueScore = document.getElementById('blue-score-value')



redScore.innerText = '0'
blueScore.innerText = '0'


//Variable to stop the game
let gameStop = false

//Variable to store the winner
let winner

//store the winner score after each win increase the counter
let redWins = 0
let blueWins = 0


let playsCount = 0


let playerColumnEmpty = true

//Function to print our the winner
const printWinner = () => {


    result.classList.remove('hide-winner')


    let winnerArr = winner.split('')

    let upperFirst = winnerArr[0].toUpperCase()
    let restLetters = winnerArr.splice(1).join('')



    let captializedWord = upperFirst.concat(restLetters)
    result.innerText = `${captializedWord} Won`

    console.log(result)

    console.log(`The winner is ${winner}`)
}



//function to increase the winnerCount
const increaseWinsCount = (player) => {

    if(player === 'red'){
        redWins++
        redScore.innerText = String(redWins)

    } else if(player === 'blue') {
        blueWins++
        blueScore.innerText = String(blueWins)

    }

}


const disableDivs = () => {
    for(let i=0; i<42; i++){
        divs[i].classList.add('disable')
    }
}


//function to check the winner
const checkWinner = (player) => {



    //Horizontal Line
    for (let row = 0; row < 6; row++) {

        for (let column = 0; column < 4; column++) {

            let secondColumn = column + 1
            let thirdColumn = column + 2
            let fourthColumn = column + 3




            if (gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[row][secondColumn]
                && gameTable[row][secondColumn] === gameTable[row][thirdColumn] && gameTable[row][thirdColumn] === gameTable[row][fourthColumn]) {

                console.log("Horizontal Line")

                //   console.log(`${gameTable[row][column]} Won`)
                winner = gameTable[row][column]

                printWinner()

                increaseWinsCount(player)

                gameStop = true
                break;
            }
        }

    }


    //Vertical Line
    for (let row = 0; row < 3; row++) {
        
        for (let column = 0; column < 7; column++) {
            
            let secondRow = row + 1
            let thirdRow = row + 2
            let fourthRow = row + 3
            
            if (gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[secondRow][column]
            && gameTable[secondRow][column] === gameTable[thirdRow][column] && gameTable[thirdRow][column] === gameTable[fourthRow][column]) {
                
                console.log("Vertical Line")
                
                //   console.log(`${gameTable[row][column]} Won`)
                
                
                //no need I think
                winner = gameTable[row][column]
                
                printWinner()


                increaseWinsCount(player)
                
                gameStop = true
                break;
            }
        }
        
    }
    

    // diagonal line

    for(let row=0; row<3; row++){
        for(let column = 0; column<4; column++){
            
            let secondRow = row + 1
            let secondColumn = column + 1

            
            let thirdRow = row + 2
            let thirdColumn = column + 2


            let fourthRow = row + 3
            let fourthColumn = column + 3


            // diagonal line
            if(gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[secondRow][secondColumn]
            && gameTable[secondRow][secondColumn] === gameTable[thirdRow][thirdColumn] && gameTable[thirdRow][thirdColumn] === gameTable[fourthRow][fourthColumn]){
                


                console.log("Diagonal Line")
                
                //   console.log(`${gameTable[row][column]} Won`)
                
                
                //no need I think
                winner = gameTable[row][column]
                
                printWinner()


                increaseWinsCount(player)
                
                gameStop = true
                break;
            }

        }
    }


    // anti diagonal
    for(let row=5; row>2; row--){
        for(let column = 0; column<4; column++){


            let secondRow = row - 1
            let secondColumn = column + 1

            
            let thirdRow = row - 2
            let thirdColumn = column + 2


            let fourthRow = row - 3
            let fourthColumn = column + 3


            if(gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[secondRow][secondColumn]
            && gameTable[secondRow][secondColumn] === gameTable[thirdRow][thirdColumn] && gameTable[thirdRow][thirdColumn] === gameTable[fourthRow][fourthColumn]){
                

                console.log("Anti Diagonal Line")
                

                winner = gameTable[row][column]
                
                printWinner()


                increaseWinsCount(player)
                
                gameStop = true
                break;
            }

        }

    }

    //increase the plays count
    playsCount++
    console.log(playsCount)

    //check tie
    if(playsCount === 42){


        result.classList.remove('hide-winner')
        result.innerText = `It is a tie!!`
    
    
        console.log(`It is a tie!!`)

        gameStop = true
    }
    
    
    // console.log(`The winner is..${winner}`)
}






//function to insert elements inside each square
const insertCircle = (divID, player) => {
    

    console.log(divID)

    let divToBeInserted = document.getElementById(divID)

    console.log(divToBeInserted)

    if(player === 'red'){
        divToBeInserted.classList.add('red-circle-img')
    } else {
        divToBeInserted.classList.add('blue-circle-img')
    }




}




//function to make the computer make a move
const computerPlays = () => {

    //Variable to store the selected div
    let divSelected
    
    
    
    let emptyColNotFound = true
    
    let randomColumn
    
    while(emptyColNotFound){
        
        randomColumn = Math.floor(Math.random()*7)
        
        //check if the row is empty or not
        //can be a function
        for(let row=0; row<6; row++){
            
            if(gameTable[row][randomColumn] === ' '){
                
                
                emptyColNotFound = false
                break
            }
        }
        
    }
    
    console.log(randomColumn)
    
    
    for(let row=5; row>=0; row--){
        
        if(gameTable[row][randomColumn] === ' ' &&
        (gameTable[row][randomColumn] !== 'red' || gameTable[row][randomColumn] !== 'blue')){
            
            gameTable[row][randomColumn] = 'blue'
            
            // row-5-col-0
            divSelected = `row-${row}-col-${randomColumn}`
            
            break
            
        }
    }
    
    
    console.log('Computer Plays')
    console.log(gameTable)
    
    
    //insert to the html
    insertCircle(divSelected, 'blue')
    
    // Must end the game
    checkWinner('blue')
    
}

// function to disable the column selected
const disableColumn = (columnToDisable) => {
    
    for(let row = 0; row<6; row++){
        
        let divID = `row-${row}-col-${columnToDisable}`
        
        let div = document.getElementById(divID)
        
        div.classList.add('disable')
    }
} 


//function to check if the column is not empty
const checkColumnEmpty = (columnToSearch) => {
    for(let row=5; row>=0; row--){
        if(gameTable[row][columnToSearch] === ' '){
            return true
        }
    }

    return false
}


//function to make the player make a move
const playerPlays = (clickedDivID) => {
    
    
    // let clickedDiv = document.getElementById(clickedDivID)
    
    console.log(clickedDivID)
    

    let arr = clickedDivID.split('-')

    console.log(arr)

    let row = parseInt(arr[1])
    let col = parseInt(arr[3])

    console.log(row)
    console.log(col)

    let divSelected



    let columnEmpty = checkColumnEmpty(col)

    if(columnEmpty === false){


        //
        disableColumn(col)


        //return that the column is not empty
        return columnEmpty
    }


    console.log(columnEmpty)

    //It must find an empty column
    // Mark the choosen place in  the gameTable Matrix
    for(let row=5; row>=0; row--){

        if(gameTable[row][col] === ' ' &&
        (gameTable[row][col] !== 'red' || gameTable[row][col] !== 'blue')){

            gameTable[row][col] = 'red'
            

            // row-5-col-0
            divSelected = `row-${row}-col-${col}`

            break
        }
    }


    // playsCount++


    console.log('Player Plays')
    console.log(gameTable)


    //insert to the html
    insertCircle(divSelected, 'red')


    // Must check the game end the game
    checkWinner('red')



}


// function to to disable game/circle
const disableButton = () => {
    //Remove the click effect
    for (let i = 0; i < gameDivs.length; i++) {
        gameDivs[i].classList.add('disable')
    }
}




//function to set each gamecircle
const setGameCircle = (event) => {


    //can be a function
    if(gameStop){

        disableButton()

        console.log('Game Ended')
        return
    }
    
    // get the id of clicked element
    let clickedDivID = event.target.id
    
    
    console.log(clickedDivID)


    // must make sure that the clicked element is a div
    // will be false if any other element was clicked on
    if(!clickedDivID.includes('col')){
        return
    }


    //make player play and if the column is not empty then don't allow him to play
    let playerColumnEmpty = playerPlays(clickedDivID)

    if(playerColumnEmpty === false){

        return
    }


    //can be a function
    if(gameStop){

        disableButton()

        console.log('Game Ended')
        return
    }


    //make computer play with some delay
    setTimeout(computerPlays, 100)

    //can be a function
    if(gameStop){


        disableButton()
          
        console.log('Game Ended')
        return
    }


}


const setGameTable = () => {
    console.log('table is being set')

    for(let i=0; i<gameDivs.length; i++){

        document.addEventListener('click', setGameCircle)

    }
}


const resetGameTable = () => {

    playerColumnEmpty = true

    gameStop = false

    playsCount = 0

    winner = ''

    for(let row=0; row<6; row++){

        for(let column=0; column<7; column++){

            //restart the gameTable
            gameTable[row][column] = ' '


        }
    }

    // i<42
    for(let i =0; i<gameDivs.length; i++){
        gameDivs[i].className = 'game-circle'
        gameDivs[i].classList.remove('disable')
    }


    result.classList.add('hide-winner')


    console.log(gameTable)


    //Set game table again
    setGameTable()
}

document.addEventListener('DOMContentLoaded', () => {
    setGameTable()

    //clear all the divs using the reset button
    resetButton.addEventListener('click', resetGameTable)


})

// Accessing the HTML Elements

// getting all the game circles div
const gameDivs = document.querySelectorAll('.game-circle')

// getting reset button
const resetButton = document.querySelector('#play-again-btn')

// getting the result div
const result = document.querySelector('#result')

// game matrix
let gameTable = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ']]

// Setting the wins score for each player and will be initialized to 0
let redScore = document.getElementById('red-score-value')
let blueScore = document.getElementById('blue-score-value')
redScore.innerText = '0'
blueScore.innerText = '0'


// variable to stop the game
let gameStop = false

// variable to store the winner
let winner

// store the number of win for each player
let redWins = 0
let blueWins = 0

// variable to store the number of plays played
let playsCount = 0

// variable to check if the player selected circle is not empty
let playerColumnEmpty = true

// function to print out the winner in the HTML
const printWinner = () => {

    // Displaying the result div
    result.classList.remove('hide-winner')

    // Printing out the winner
    let winnerArr = winner.split('')
    let upperFirst = winnerArr[0].toUpperCase()
    let restLetters = winnerArr.splice(1).join('')
    let captializedWord = upperFirst.concat(restLetters)
    result.innerText = `${captializedWord} Won`

}



// Function to increase the wins count for each player
const increaseWinsCount = (player) => {
    if (player === 'red') {
        redWins++
        redScore.innerText = String(redWins)
    } else if (player === 'blue') {
        blueWins++
        blueScore.innerText = String(blueWins)
    }
}

// Function to disable all the gameCircles div
const disableDivs = () => {
    for (let i = 0; i < 42; i++) {
        divs[i].classList.add('disable')
    }
}


// Function to check the winner with theree conditions
const checkWinner = (player) => {

    //Checking for Horizontal Line '-'
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 4; column++) {

            let secondColumn = column + 1
            let thirdColumn = column + 2
            let fourthColumn = column + 3

            if (gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[row][secondColumn]
                && gameTable[row][secondColumn] === gameTable[row][thirdColumn] && gameTable[row][thirdColumn] === gameTable[row][fourthColumn]) {

                console.log("Horizontal Line")
                winner = gameTable[row][column]
                printWinner()
                increaseWinsCount(player)
                gameStop = true
                break;
            }
        }

    }


    //Checking for Vertical Line '|'
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 7; column++) {

            let secondRow = row + 1
            let thirdRow = row + 2
            let fourthRow = row + 3

            if (gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[secondRow][column]
                && gameTable[secondRow][column] === gameTable[thirdRow][column] && gameTable[thirdRow][column] === gameTable[fourthRow][column]) {

                console.log("Vertical Line")
                winner = gameTable[row][column]
                printWinner()
                increaseWinsCount(player)
                gameStop = true
                break;
            }
        }
    }


    // Checking for Diagonal line '\'
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 4; column++) {

            let secondRow = row + 1
            let secondColumn = column + 1

            let thirdRow = row + 2
            let thirdColumn = column + 2

            let fourthRow = row + 3
            let fourthColumn = column + 3

            if (gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[secondRow][secondColumn]
                && gameTable[secondRow][secondColumn] === gameTable[thirdRow][thirdColumn] && gameTable[thirdRow][thirdColumn] === gameTable[fourthRow][fourthColumn]) {

                console.log("Diagonal Line")

                winner = gameTable[row][column]
                printWinner()
                increaseWinsCount(player)
                gameStop = true
                break;
            }
        }
    }


    // Anti Diagonal '/'
    for (let row = 5; row > 2; row--) {
        for (let column = 0; column < 4; column++) {


            let secondRow = row - 1
            let secondColumn = column + 1


            let thirdRow = row - 2
            let thirdColumn = column + 2


            let fourthRow = row - 3
            let fourthColumn = column + 3


            if (gameTable[row][column] !== ' ' && gameTable[row][column] === gameTable[secondRow][secondColumn]
                && gameTable[secondRow][secondColumn] === gameTable[thirdRow][thirdColumn] && gameTable[thirdRow][thirdColumn] === gameTable[fourthRow][fourthColumn]) {

                console.log("Anti Diagonal Line")

                winner = gameTable[row][column]
                printWinner()
                increaseWinsCount(player)
                gameStop = true
                break;
            }

        }
    }

    //increase the plays count which helps to find a tie
    playsCount++
    console.log(playsCount)

    // Checking for tie
    if (playsCount === 42) {
        result.classList.remove('hide-winner')
        result.innerText = `It is a tie!!`
        console.log(`It is a tie!!`)
        gameStop = true
    }
}



// function to insert elements inside each square
const insertCircle = (divID, player) => {


    console.log(divID)

    let divToBeInserted = document.getElementById(divID)

    console.log(divToBeInserted)

    if (player === 'red') {
        divToBeInserted.classList.add('red-circle-img')
    } else {
        divToBeInserted.classList.add('blue-circle-img')
    }
}


// function to make the computer make a move
const computerPlays = () => {

    //Variable to store the selected div
    let divSelected

    let emptyColNotFound = true
    let randomColumn


    //Generating a random column that have spaces to add the computer positon
    while (emptyColNotFound) {

        // Generate random column between 0 and 7
        randomColumn = Math.floor(Math.random() * 7)

        //check if the row is empty or not
        // and insert the blue position in the empty column
        for (let row = 5; row >= 0; row--) {

            if (gameTable[row][randomColumn] === ' ' &&
                (gameTable[row][randomColumn] !== 'red' || gameTable[row][randomColumn] !== 'blue')) {

                gameTable[row][randomColumn] = 'blue'

                // row-5-col-0
                divSelected = `row-${row}-col-${randomColumn}`


                emptyColNotFound = false
                console.log('row: ' + row)


                break

            }
        }
    }

    console.log('col: ' + randomColumn)

    console.log('Computer Plays')
    console.log(gameTable)


    //insert to the html
    insertCircle(divSelected, 'blue')

    // Must end the game
    checkWinner('blue')

}

// function to disable the column selected
const disableColumn = (columnToDisable) => {

    for (let row = 0; row < 6; row++) {

        let divID = `row-${row}-col-${columnToDisable}`

        let div = document.getElementById(divID)

        div.classList.add('disable')
    }
}


// function to check if the column is not empty
//return true if the column empty. Othewise, return false
const checkColumnEmpty = (columnToSearch) => {
    for (let row = 5; row >= 0; row--) {
        if (gameTable[row][columnToSearch] === ' ') {
            return true
        }
    }
    return false
}


// function to make the player make a move. It will first take the
// clicked div id as a parameter and will make a move
// by checking which div clicked on and find the last empty div in that
// selected div column
const playerPlays = (clickedDivID) => {


    let arr = clickedDivID.split('-')
    let row = parseInt(arr[1])
    let col = parseInt(arr[3])

    console.log(row)
    console.log(col)

    let divSelected


    // First check if the clicked on div is not empty if it is empty
    // if it is not empty then return false and don't insert anything
    let columnEmpty = checkColumnEmpty(col)

    if (columnEmpty === false) {
        // call function to remove disable effect
        disableColumn(col)

        //return that the column is not empty
        return columnEmpty
    }


    console.log(columnEmpty)

    // It must find an empty column
    // Mark the choosen place in  the gameTable Matrix
    for (let row = 5; row >= 0; row--) {

        if (gameTable[row][col] === ' ' &&
            (gameTable[row][col] !== 'red' || gameTable[row][col] !== 'blue')) {

            // add the player position in the game table at the last row
            gameTable[row][col] = 'red'
            divSelected = `row-${row}-col-${col}`
            break
        }
    }

    console.log('Player Plays')
    console.log(gameTable)

    //insert to the html
    insertCircle(divSelected, 'red')

    // Must check the game end the game
    checkWinner('red')
}


// function to to disable game circle
const disableHover = () => {
    //Remove the click effect
    for (let i = 0; i < gameDivs.length; i++) {
        gameDivs[i].classList.add('disable')
    }
}


//function to set each gamecircle
const setGameCircle = (event) => {


    // if the game stopped then don't do anything
    if (gameStop) {
        disableHover()
        console.log('Game Ended')
        return
    }

    // get the id of clicked element
    let clickedDivID = event.target.id

    //make player play and if the column is not empty then don't allow him to play
    let playerColumnEmpty = playerPlays(clickedDivID)

    if (playerColumnEmpty === false) {
        return
    }

    // if the player won then stop the game
    if (gameStop) {
        disableHover()
        console.log('Game Ended')
        return
    }

    //make computer play with some delay
    setTimeout(computerPlays, 100)

    // if the computer won then stop the game
    if (gameStop) {
        disableHover()
        console.log('Game Ended')
        return
    }
}

// Function to set the game table and it will add event listen to each
// game circle
const setGameTable = () => {
    console.log('table is being set')
    for (let i = 0; i < gameDivs.length; i++) {

        // CHECK THIS AGAIN
        // document.addEventListener('click', setGameCircle) //BEFORE
        gameDivs[i].addEventListener('click', setGameCircle)
    }
}

// function to reset the game table and it will be run once a user
// clicked on the Play Again button
const resetGameTable = () => {

    // Resetting the variables
    gameStop = false
    playsCount = 0
    winner = ''
    playerColumnEmpty = true

    // resetting the game table matrix
    for (let row = 0; row < 6; row++) {
        for (let column = 0; column < 7; column++) {

            //restart the gameTable
            gameTable[row][column] = ' '


        }
    }

    // Resetting the class for the divs and removing the disable effect
    for (let i = 0; i < gameDivs.length; i++) {
        gameDivs[i].className = 'game-circle'
        gameDivs[i].classList.remove('disable')
    }


    // hide the winner div
    result.classList.add('hide-winner')

    //Set game table again
    setGameTable()
}

document.addEventListener('DOMContentLoaded', () => {
    //Set the game table
    setGameTable()

    //clear all the divs using the reset button
    resetButton.addEventListener('click', resetGameTable)
})

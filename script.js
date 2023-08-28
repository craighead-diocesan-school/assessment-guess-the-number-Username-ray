let intiNumberOfTime = 1
// Set 1 for the number of time that took to guess the number
let minNumber = 1
let maxNumber = 20
// Set 1 for minimum number and 20 for maximum number
let result = []
// Set the result as an empty array

function guessTheNumber() {
    let inputName = prompt("What's your name?")
    // Ask user name
    let numberOfTime = intiNumberOfTime
    // Add 1 for the number of time
    let correctNumber = getRandomIntInclusive(minNumber, maxNumber)
    // Warp to the function for randomly deciding the number the users guessing
    let selectedNumber = prompt('What number is I thinking of right now from 1 to 20?')
    while (selectedNumber != correctNumber) {
        if (selectedNumber < minNumber || selectedNumber > maxNumber) {
            selectedNumber = prompt('Your number is invalid. Please reinput a valid number.')
            // If selected number was not correct and was not valid, show 'Your number is[...]number.'
        } else {
            selectedNumber = prompt('Your number is incorrect. Please reinput another number.')
            numberOfTime = numberOfTime + 1
            // If selected number was not correct but was valid, show 'Your number is[...]number.' and add 1 to the number of time
        }
    }
    result.push({ name: inputName, count: numberOfTime })
    alert("Your number is correct. Let's check the score board.")
    // If selected number was correct, show 'Your number is[...]score board.'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
    // The maximum is inclusive and the minimum is inclusive
}

function scoreBoard() {
    var resultList = ''
    for (let i = 0; i < result.length; i++) {
        if (i != 0) {
            resultList += "\n"
        }
        resultList += result[i].name + ' : ' + result[i].count
    }
    alert(resultList)
    // Create a string output by alert with a newline and output that string with alert
}
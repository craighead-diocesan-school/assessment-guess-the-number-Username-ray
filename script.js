let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let count = 0

function guessTheNumber() {
    let index = Math.floor(Math.random() * 21)
    let selected = prompt('What number is I thinking of right now from 1 to 20?')
    while (selected != index) {
        if (selected != index && selected < 1 && selected > 20) {
            alert('Your number is invalid. Please reinput a valid number.')
        } else {
            alert('Your number is incollect.')
            selected = prompt('Please reinput another number.')
            count = count + 1
        }
    }
    alert("Your number is collect. Let's check the score board.")
}

function scoreBoard() {
    alert('You are ' + count + ' points behind.')
}
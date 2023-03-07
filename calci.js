$(document).ready(function() {
    var result = 0
    var prevEntry = 0
    var operation = null //none at its start
    var currentEntry = '0'
    // updateScreen(5425)
    updateScreen(result)

    $(".button").click(function() {
        // console.log(this); //element tag that is clicked
        // var a = document.querySelector('.screen') // = $(".screen") lay ra element tag
        // console.log(a);
        var btnPressed = $(this).html() //lay ky tu dc click
        console.log(btnPressed);

        if (btnPressed === 'C'){ //clear all input
            result = 0
            currentEntry = '0'

        } else if (btnPressed === 'CE'){ //clear recent entry
            currentEntry = '0'

        } else if (btnPressed === 'back'){ //cut 1 ky tu tu phia cuoi len
            currentEntry = currentEntry.substring(0, currentEntry.length-1)

        } else if (btnPressed === '+/-'){
            currentEntry *= -1

        } else if (btnPressed === '.'){
            currentEntry += '.'

        } else if (isNumber(btnPressed)){
            if (currentEntry === '0') currentEntry = btnPressed
            else currentEntry += btnPressed

        } else if (isOperator(btnPressed)){
            prevEntry = parseFloat(currentEntry)
            operation = btnPressed
            currentEntry = ''
            
        } else if (btnPressed === '%'){
            currentEntry /= 100

        } else if (btnPressed === 'sqrt'){
            currentEntry = Math.sqrt(currentEntry)

        } else if (btnPressed === '1/x'){
            currentEntry = 1/currentEntry

        } else if (btnPressed === 'pi'){
            currentEntry = Math.PI

        } else if (btnPressed === '='){
            currentEntry = operate(prevEntry, currentEntry, operation)
            operation = null
        }

        updateScreen(currentEntry)
    })
})

updateScreen = function(displayValue) {
    var displayValue = displayValue.toString()
    $('.screen').html(displayValue.substring(0, 10)) //only display 10 character
}

isNumber = function(value) {
    return !isNaN(value) //isNaN true -> not a number, isNaN fasle -> number
}

isOperator = function(value) {
    return value === '+' || value === '-' || value === '*' || value === '/'
}

operate = function(a, b, operation) {
    a = parseFloat(a)
    b = parseFloat(b)
    console.log(a, b, operation)
    if (operation === '+') return a + b
    if (operation === '-') return a - b
    if (operation === '*') return a * b
    if (operation === '/') return a / b
    
}
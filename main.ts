input.onButtonPressed(Button.A, function () {
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter = 0
})
function Sinalizar () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
let counter = 0
counter = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        Sinalizar()
        counter += 1
        music.ringTone(932)
        basic.pause(8)
        music.stopAllSounds()
    }
})

radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber.toString()))
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})

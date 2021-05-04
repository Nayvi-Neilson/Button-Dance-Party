input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("receivedString")
})
radio.onReceivedString(function (receivedString) {
    servos.P1.setAngle(24)
    basic.pause(1000)
    servos.P1.setAngle(90)
    basic.pause(231000)
    servos.P1.setAngle(24)
    basic.pause(1000)
})
radio.setGroup(14)
basic.forever(function () {
	
})

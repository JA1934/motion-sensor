let Reading = 0
basic.forever(function () {
    Reading = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(Reading)
    if (Reading == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})

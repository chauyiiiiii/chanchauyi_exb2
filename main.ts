let F = input.temperature() * 1.8 + 32
basic.forever(function () {
    basic.showString("C")
    basic.showString(" ")
    basic.showNumber(input.temperature())
    basic.showString("F")
    basic.showString(" ")
    basic.showNumber(F)
})

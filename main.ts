let b = 0
let a = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (a < -15) {
        basic.showArrow(ArrowNames.North)
    } else if (b < -15) {
        basic.showArrow(ArrowNames.West)
    } else if (b > 15) {
        basic.showArrow(ArrowNames.East)
    }
})
basic.forever(function () {
    basic.showArrow(ArrowNames.South)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    basic.pause(1000)
    a = input.rotation(Rotation.Pitch)
    b = input.rotation(Rotation.Roll)
    if (a < -15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 45)
        basic.pause(500)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
        basic.pause(300)
    } else if (b < -15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 60)
        basic.pause(500)
    } else if (b > 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 60)
        basic.pause(500)
    }
})

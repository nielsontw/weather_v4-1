weatherbit.startWeatherMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startRainMonitoring()
serial.redirect(
SerialPin.P15,
SerialPin.P14,
BaudRate.BaudRate9600
)
basic.showIcon(IconNames.House)
basic.forever(function () {
    basic.pause(180000)
    serial.writeLine("temperature" + Math.idiv(weatherbit.temperature(), 100) + "T")
    serial.writeLine("humidity" + Math.idiv(weatherbit.humidity(), 1024) + "H")
    serial.writeLine("pressure" + Math.idiv(weatherbit.pressure(), 25600) + "P")
    serial.writeLine("soil moisture" + weatherbit.soilMoisture() + "SM")
    serial.writeLine("soil temperature" + Math.idiv(weatherbit.soilTemperature(), 100) + "ST")
    serial.writeLine("rain" + weatherbit.rain() + "R")
    serial.writeLine("wind speed" + Math.trunc(weatherbit.windSpeed()) + "WS")
    serial.writeLine("wind direction" + weatherbit.windDirection() + "WD")
})

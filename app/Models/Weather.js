

// calculate Celsius using (Kelvin - 273)
export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.name = data.name
    }

    get cTemplate() {
        return `
        <span class="temperature" id="c-temp" onclick="app.weatherController.changeWeather()">${Math.floor(this.temp - 273)}°C</span>
        <p id="name">${this.name}</p>
        `
    }

    get fTemplate() {
        return `
        <span class="temperature" id="f-temp" onclick="app.weatherController.changeWeather()">${Math.floor((9 / 5) * (this.temp - 273) + 32)}°F</span>
        <p id="name">${this.name}</p>
        `
    }

}
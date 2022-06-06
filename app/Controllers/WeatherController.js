import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";


function _draw() {
    let weather = ProxyState.weather
    document.getElementById('weather').innerHTML = weather.cTemplate
}

export class WeatherController {
    constructor() {
        console.log('weather loaded');
        ProxyState.on('weather', _draw)
        this.getWeather()
    }

    changeWeather() {
        let weather = ProxyState.weather
        if (document.getElementById('c-temp')) {
            document.getElementById('weather').innerHTML = weather.fTemplate
        } else if (document.getElementById('f-temp')) {
            document.getElementById('weather').innerHTML = weather.cTemplate
        }
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }
}

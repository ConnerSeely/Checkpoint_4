import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";



const weatherApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})

class WeatherService {
    async getWeather() {
        const res = await weatherApi.get('')
        console.log('getWeather', res.data);
        ProxyState.weather = new Weather(res.data)
        console.log(ProxyState.weather);
    }

}

export const weatherService = new WeatherService()
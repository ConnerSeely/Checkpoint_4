import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";




const quoteApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuoteService {
    async getQuote() {
        const res = await quoteApi.get('')
        console.log('getQuote', res.data);
        ProxyState.quotes = new Quote(res.data)
        console.log(ProxyState.quotes);
    }

}

export const quoteService = new QuoteService()
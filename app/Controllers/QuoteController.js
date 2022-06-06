import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";



function _drawQuote() {
    let quote = ProxyState.quotes
    document.getElementById('quote').innerHTML = quote.Template
}

export class QuoteController {
    constructor() {
        console.log('quote loaded');
        this.getQuote()
        ProxyState.on('quotes', _drawQuote)
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }
}

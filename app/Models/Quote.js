

export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get Template() {
        return `
        <span class="quote-hover">${this.content}</span>
        <p class="author" id="author">${this.author}</p>
        `
    }

}
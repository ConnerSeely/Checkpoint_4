import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";


function _draw() {
    let image = ProxyState.images
    document.body.style.background = "url(" + ProxyState.images + ") no-repeat"
    document.body.style.backgroundSize = "cover"
}

export class ImageController {
    constructor() {
        console.log('image loaded');
        this.getImage()
        ProxyState.on('images', _draw)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }
}

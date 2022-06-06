import { ProxyState } from "../AppState.js";


const imagesApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

class ImageService {
    async getImage() {
        const res = await imagesApi.get('')
        console.log('getImage', res.data);
        ProxyState.images = res.data.largeImgUrl
        console.log(ProxyState.images);
    }
}

export const imageService = new ImageService()
/*
-the server returns the image url as: https://api.rawg.io/media/games/2ba/......jpg
-if we pass 'crop/600/400/' into the url the server returns cropped images
The function getCroppedImageUrl takes this url and returns the cropped version of it.
-the cropped image url will be: https://api.rawg.io/media/crop/600/400/games/2ba/......jpg
*/
import noImage from '../assets/no-image.webp';
const getCroppedImageUrl = (url:string) => {

    if(!url) return noImage;
    const target= 'media/';
    const index = url.indexOf(target)+target.length;
    return url.slice(0,index)+'crop/600/400/'+url.slice(index);

  
}

export default getCroppedImageUrl
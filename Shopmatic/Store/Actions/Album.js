import Category from '../../Models/Category'
import Album from '../../Models/Album'

export const SET_ALBUMS = 'SET_ALBUMS';


export const fetchAlbums = () => {
    return async dispatch => {
        const response = await fetch(
            'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
        );
        const resData = await response.json();
        
        const loadedAlbums = [];
        const feed = resData['feed'];
        const albumArray = feed['entry'];
        for (const key in albumArray){
            const item = albumArray[key]
            console.log(item)
            const titleDict = item['im:name'];
            const title = titleDict['label'];
            const idSuperDict = item['id'];
            const idDict = idSuperDict['attributes'];
            const id = idDict['im:id'];
            const artistDict = item['im:artist'];
            const artist = artistDict['label'];
            const imageArray = item['im:image'];
            var imageDict = [];
            for (const imageKey in imageArray){
                const imageItem = imageArray[imageKey];
                const attribute = imageItem['attributes'];
                const height = attribute['height'];
                if (height == 170){
                    imageDict = imageItem
                }
            }
            const imageUrl = imageDict['label'];
            const priceDict = item['im:price'];
            const price = priceDict['label'];
            const releaseDict = item['im:releaseDate'];
            const releaseDate = releaseDict['label'];
            const categoryDict = item['category'];
            const catAttributeDict = categoryDict['attributes'];
            const category = new Category(catAttributeDict['im:id'], catAttributeDict['label']);
            const album = new Album(id, title, imageUrl, artist, price, category, releaseDate);
            loadedAlbums.push(album)
        }
        
        dispatch({type:SET_ALBUMS, albums : loadedAlbums})

    };
}
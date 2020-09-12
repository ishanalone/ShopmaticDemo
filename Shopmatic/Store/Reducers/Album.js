import { SET_ALBUMS} from '../Actions/Album'

const initialState = {
    albums : [],
    categorisedAlbum : [],
    favouriteAlbums : []
};

const AlbumReducer = (state = initialState, action) => { 
    switch (action.type){
        case SET_ALBUMS :
            const albumList = action.albums;
            const categoryDict = albumList.reduce((dict, album) => {
                const key = album.category.name
                if (!dict[key]) {
                    dict[key] = [];
                 }
                 // Add object to list for given key's value
                 dict[key].push(album);
                 return dict;
            },{})
            return {
                albums : albumList,
                categorisedAlbum : categoryDict
            }

    }
    return state
}

export default AlbumReducer
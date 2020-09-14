import React, {useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as AlbumActions from '../Store/Actions/Album';
import AlbumCell from '../Components/AlbumCell'

const AlbumListScreen = props => {
    const albums = useSelector(state => state.albums.albums);
    const categorizedAlbum = useSelector(state => state.albums.categorisedAlbum);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AlbumActions.fetchAlbums());
    }, [dispatch]);
    const categories = Object.keys(categorizedAlbum);
    return <FlatList 
                data={categories} 
                keyExtractor={(item, index) => index.toString()} 
                renderItem={(itemData) => {
                    return (
                        <View>
                            <Text style={styles.category}> {itemData.item} </Text>
                            <FlatList
                                data={categorizedAlbum[itemData.item]}
                                keyExtractor = {(item, index) => index.toString()}
                                renderItem={(albumData) => {
                                    return(
                                        <AlbumCell 
                                            image={albumData.item.imageUrl} 
                                            title={albumData.item.title} 
                                            price={albumData.item.price}
                                            onPress={() => {
                                                props.navigation.navigate('albumDetail',{
                                                    albumId : albumData.item.id,
                                                    albumTitle : albumData.item.title
                                                });
                                            }}/>
                                    );
                                }}
                                horizontal={true}
                            />
                        </View>
                      );
                }}
            />

}


AlbumListScreen.navigationOptions = {
    headerTitle : "Top 100"
}

const styles = StyleSheet.create({
    category : {
        fontSize : 18,
        fontWeight : 'bold',
        color : 'black'
    }
});

export default AlbumListScreen
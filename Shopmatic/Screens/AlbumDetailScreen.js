import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'

const AlbumDetailScreen = props => {
    const albumId = props.navigation.getParam('albumId');
    const album = useSelector(state => state.albums.albums.find(album => album.id === albumId));
    console.log(album.imageUrl);
    return (
        <View>
        <View style={styles.topView}>
            <Image style={styles.image} source = {{uri:album.imageUrl}}/>
            
            <Text style={styles.title} numberOfLines={3}>{album.title}</Text>
            
        </View>
        <View >
            <Text style={styles.artist}>{album.artist}</Text>
            <Text style={styles.price}>{album.price}</Text>
        </View>
        </View>
    );
}

AlbumDetailScreen.navigationOptions = navItem => {
    return {
        headerTitle : navItem.navigation.getParam('albumTitle')
    };
    
}

const styles = StyleSheet.create({
    image :{
        width : 170,
        height : 170,
        borderRadius : 5,
        resizeMode : 'stretch',
        marginLeft : 10,
        marginTop : 10
    },
    topView : {
        flexDirection : 'row'
    },
    sideView : {
        marginLeft : 10,
        marginTop : 10
    },
    artist : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    price : {
        fontSize : 14
    },
    title : {
        fontSize : 25,
        fontWeight : 'bold',
        margin : 5
    }
});

export default AlbumDetailScreen
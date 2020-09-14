import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'
import moment from "moment";

const AlbumDetailScreen = props => {
    const albumId = props.navigation.getParam('albumId');
    const album = useSelector(state => state.albums.albums.find(album => album.id === albumId));
    console.log(album.imageUrl);
    return (
        <View>
        <View style={styles.topView}>
            <Image style={styles.image} source = {{uri:album.imageUrl}}/>
            <View style = {styles.sideView}>
                <Text style={styles.title} numberOfLines={5}>{album.title}</Text>
                <Text style={styles.artist}>{album.artist}</Text>
                <Text style={styles.price}>{album.price}</Text>
                <Text style={styles.price}>{moment(album.releaseDate).format('ll')}</Text>
            </View>
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
        marginTop : 10,
        flex : 1
    },
    topView : {
        flexDirection : 'row'
    },
    sideView : {
        marginLeft : 10,
        marginTop : 10,
        flex : 1.5
    },
    artist : {
        fontSize : 18,
        fontWeight : 'bold',
        marginTop : 10
    },
    price : {
        fontSize : 14
    },
    title : {
        fontSize : 22,
        fontWeight : 'bold'
       
    }
});

export default AlbumDetailScreen
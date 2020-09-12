import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Color from '../Constants/Colors'


const AlbumCell = props => {
    return (
        <View style = {styles.albumView}>
            <Image style = {styles.image} source = {{uri:props.image}}/>
            <Text style = {styles.title} numberOfLines={2}>{props.title}</Text>
            <Text style = {styles.price}>{props.price}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    albumView : {
        shadowColor : 'black',
        shadowOpacity : 0.25,
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 5,
        elevation : 5,
        borderRadius : 5,
        backgroundColor : 'white',
        height : 150,
        width : 100,
        margin : 5
    },
    image :{
        width : '100%',
        height : '60%',
        borderRadius : 5
    },
    title :{
        fontSize : 10,
        margin : 5,
        fontWeight : 'bold'
    },
    price : {
        fontSize : 8,
        color : Color.price,
        marginLeft : 5
    }
});

export default AlbumCell;
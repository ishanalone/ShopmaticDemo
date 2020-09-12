import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import AlbumListScreen from '../Screens/AlbumListScreen';
import AlbumDetailScreen from '../Screens/AlbumDetailScreen';
import Colors from '../Constants/Colors'

const AlbumNavigator = createStackNavigator({
    albumList : AlbumListScreen,
    albumDetail : AlbumDetailScreen
}, {
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor : Colors.primary
        },
        headerTintColor : Colors.text
    }
});

export default createAppContainer(AlbumNavigator);
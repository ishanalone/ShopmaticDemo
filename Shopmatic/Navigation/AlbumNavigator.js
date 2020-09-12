import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import AlbumListScreen from '../Screens/AlbumListScreen';
import Colors from '../Constants/Colors'

const AlbumNavigator = createStackNavigator({
    albumList : AlbumListScreen
}, {
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor : Colors.primary
        },
        headerTintColor : Colors.text
    }
});

export default createAppContainer(AlbumNavigator);
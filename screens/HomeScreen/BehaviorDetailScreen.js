import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';


function BehaviorDetailScreen( {route, navigation} )
{
    const child = route.params.child;
    const text = route.params.text;
    const date = route.params.date;
    const icon = route.params.icon

    return (
        <View> 
        <Text>{text}</Text>
        <Text>{date}</Text>
        <Text>{icon}</Text>
        </View>
    )
}

export default BehaviorDetailScreen;
import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';


function BehaviorDetailScreen( {route, navigation} )
{
    const id = route.params.id;
    const name = route.params.name;
    const icon = route.params.icon;
    const count = route.params.count;
    const goalCount = route.params.goalCount;
    const memo = route.params.memo;
    const date = route.params.date;
    const type = route.params.type;

    return (
        <View> 
        <Text>{name}</Text>
        <Text>{date}</Text>
        <Text>{count} / {goalCount}</Text>
        </View>
    )
}

export default BehaviorDetailScreen;
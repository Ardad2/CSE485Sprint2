import {View, Text, Button} from 'react-native'
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

        <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="+" onPress={addBehaviorHandler} color="black"/>
            </View>
            <Text>{count} / {goalCount}</Text>
            <View style={styles.button} >
                <Button title="-" onPress={addBehaviorHandler} color="black"/>
            </View>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#F0F0F0',
      backgroundColor: '#F0F0F0',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        backgroundColor: '#F0F0F0',
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    textStyle: {
      fontWeight: 'bold',
      padding: 10
    }
  });
  

export default BehaviorDetailScreen;
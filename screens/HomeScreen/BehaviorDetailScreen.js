import {View, Text, Button, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { incrementBehavior, decrementBehavior } from '../../store/redux/users';


function BehaviorDetailScreen( {route, navigation} )
{

    const dispatch = useDispatch();


    const id = route.params.id;
    const name = route.params.name;
    const icon = route.params.icon;
    const count = route.params.count;
    const goalCount = route.params.goalCount;
    const memo = route.params.memo;
    const date = route.params.date;
    const type = route.params.type;

    function decrementGoalCount() {
        dispatch(decrementBehavior(
            {
                username: "John",
                behaviorName: name
            }
          ));
     }

     function incrementGoalCount() {
        dispatch(incrementBehavior(
            {
                username: "John",
                behaviorName: name
            }
          ));
    }

    return (
        <View> 
        <Text>{name}</Text>
        <Text>{date}</Text>

        <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="+" onPress={incrementGoalCount} color="black"/>
            </View>
            <Text>{count} / {goalCount}</Text>
            <View style={styles.button} >
                <Button title="-" onPress={decrementGoalCount} color="black"/>
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
        backgroundColor: '#FFFFFF',
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
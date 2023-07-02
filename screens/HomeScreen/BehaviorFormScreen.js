import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { addBehavior, removeBehavior } from '../../store/redux/behaviors';


export default function BehaviorFormScreen( {route, navigation} )
{

  const [ date, setDate ] = useState(null);

  const dispatch = useDispatch();

  useEffect( () => {
    let today = new Date();
    let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    setDate(date);
  }, []);
        const behaviorList = useSelector((state) => state.behaviors.behaviors);

        const behaviorName = route.params.behaviorName;

    const [enteredBehaviorText, setEnteredBehaviorText] = useState('');

    function behaviorInputHandler(enteredText) {
        setEnteredBehaviorText(enteredText);
      };

    /*  function addBehaviorHandler(enteredBehaviorText) {
        setCourseBehaviors(currentCourseBehaviors => [...currentCourseBehaviors, {text: enteredBehaviorText, id: Math.random().toString(), date: date, icon: "Hello"}       ]);
      endAddBehaviorHandler();
      }*/

      function addBehaviorHandler() {
        //  route.params.onAddBehavior(enteredBehaviorText);
         // setEnteredBehaviorText('');
         dispatch(addBehavior(
           {
             id: Math.random().toString(),
             text: enteredBehaviorText,
             date: date,
             icon: "Hello"
           }
         ));

         navigation.navigate("HomeScreen");

      }

      function cancelBehaviorHandler() {
        navigation.goBack();
      }

    return (
        <View style ={styles.inputContainer}>
         { (behaviorName == "New") && (<TextInput 
        style={styles.textInput} 
        placeholder={behaviorName}
        defaultValue={behaviorName}

         onChangeText={behaviorInputHandler}
         value={enteredBehaviorText}
         />)
         }
        { (behaviorName != "New") && (
          <Text>{behaviorName}</Text>
         ) }
        
        <Text>Note</Text>
         <Text>Icon and Color</Text>
         <Text>Gaol and Goal Period</Text>



         <View style={styles.buttonContainer}>
             <View style={styles.button} >
                <Button title="Submit" onPress={addBehaviorHandler} color="black"/>
            </View>

        </View>
      </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
  });
  
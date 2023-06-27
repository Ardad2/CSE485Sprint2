import {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, dispatch } from 'react-redux';

import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BehaviorItem from '../../components/BehaviorItem';
import BehaviorInput from '../../components/BehaviorInput';
import IconButton from '../../components/IconButton';

import BehaviorDetailScreen from './BehaviorDetailScreen';
import BehaviorFormScreen from './BehaviorFormScreen';

const HomeStack = createStackNavigator();

export default function HomeScreen({navigation}) {

  const behaviorList = useSelector((state) => state.behaviors.behaviors);


  const [ date, setDate ] = useState(null);

  useEffect( () => {
    let today = new Date();
    let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    setDate(date);
  }, []);



  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseBehaviors, setCourseBehaviors] = useState([]);

  function startAddBehaviorHandler() {
   //setModalIsVisible(true);
   navigation.navigate("BehaviorListScreen")

  // navigation.navigate("BehaviorFormScreen", { onAddBehavior: addBehaviorHandler} )

  }

  function endAddBehaviorHandler() {
   // setModalIsVisible(false);
   
  }
  
  function addBehaviorHandler(enteredBehaviorText) {
    setCourseBehaviors(currentCourseBehaviors => [...currentCourseBehaviors, {text: enteredBehaviorText, id: Math.random().toString(), date: date, icon: "Hello"}       ]);
  endAddBehaviorHandler();
  }

  function deleteBehaviorHandler(id) {
    setCourseBehaviors( (currentCourseBehaviors) => {
      return currentCourseBehaviors.filter((behavior) => behavior.id != id);
    } );
  }

  function pressHandler(text, date, icon) {
    navigation.navigate("BehaviorDetailScreen", { child : "Hello", text: text, date: date, icon: icon});
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
    <BehaviorInput
     visible={modalIsVisible} 
     onAddBehavior={addBehaviorHandler} 
     onCancel={endAddBehaviorHandler}
     />
     <View> 
       <Text style={styles.headingText}>Welcome back John! What did you do today?</Text>
     </View>

     <View style={styles.plusButton}>  
    <IconButton icon="add-circle-outline" color="black" onPress={startAddBehaviorHandler} />
    </View>  
    
      <View style={styles.behaviorsContainer}>
        <FlatList data={behaviorList} renderItem = {itemData => {
          return <BehaviorItem 
          text={itemData.item.text} 
          id = {itemData.item.id}
          date={itemData.item.date}
          icon={itemData.item.icon}
          onDeleteItem={deleteBehaviorHandler}
          onPress={pressHandler}
          />

        }}
        keyExtractor={(item,index) => {return item.id}} 
        alwaysBounceVertical={true}
        /> 
        </View>
      </View>
        </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA'
    //You can add a "backgroundColor" in app.json.
  },
  behaviorsContainer: {
    flex: 5
  },
  headingText: {
    fontSize: 20,
    color: 'black'
  },
  plusButton: {
    alignItems: 'center'
  }
});

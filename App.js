import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ImageBackground } from 'react-native';
import Task from './components/Task'
import bgImage from './assets/blackboard-background.jpeg'


export default function App() {
  

  
  // setting up state for adding task 
  //  use state for things that change often 
  const [task, setTask] = useState(); 
  const [taskItems, setTaskItems] = useState([]);

 
  const handleAddTask = () => {
    // when add pluss makes it go down 
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy);
  }

  return (
    <ImageBackground source={bgImage} style={style.container}>
        
    
    {/* todays tasks  */}
    <View style={style.tasksWrapper}>
      <Text style={style.textTitle}>
        todays tasks!
      </Text>
    <View style={style.items}>
    {/* my tasks are going to ge here  */}
    {/* want to loop over each taskItem in array and output them one by one */}
    {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress ={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
    
    </View>
    </View>
    {/* write a task code */}
    {/* this pushes everything up isnt of covering it  */}
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height' } 
    style={style.writeTaskWrapper}
    >
      <TextInput 
      style={style.taskInput}
      placeholder={'write a task'}
      value={task}
      onChangeText={text => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}
    >
        <View style={style.addTextWrapper}>
        <Text style={style.addText}>+</Text>  
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
         
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    },
  items: {
    marginTop: 30
  },
writeTaskWrapper:{
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
taskInput:{
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: 'white',
  borderRadius: 50,
  borderColor: 'pink',
  borderWidth: 5,
  width: 300,

},
addTextWrapper:{
  width: 60,
  height: 60, 
  backgroundColor: 'white',
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRightColor: 'pink',
  borderLeftColor: 'lightyellow',
  borderTopColor: 'lightgreen',
  borderBottomColor: 'tan',
  borderWidth: 5
},
addText:{},
image: {
 
  resizeMode: 'cover',
  justifyContent: 'center'
}
});

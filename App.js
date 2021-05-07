import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Task from './components/Task'

export default function App() {
  return (
    <View style={style.container}>
    {/* todays tasks  */}
    <View style={style.tasksWrapper}>
      <Text style={style.textTitle}>
        todays tasks!
      </Text>
    <View style={style.items}>
    {/* my tasks are going to ge here  */}
    <Task />
    </View>
    </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'lightblue',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    },
  items: {

  }
});

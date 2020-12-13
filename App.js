import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

 const goalInputHandler = (enteredText)=>{
   setEnteredGoal(enteredText)
 }
const addGoalHandler = () => {
  setCourseGoals(currentGoals=> [...currentGoals, enteredGoal])
}
  return (
    <View style={styles.root}>
      <View
        style={styles.inputContainer}
      >
        <TextInput placeholder="Add your goal" style={styles.textInputStyle} onChangeText = {goalInputHandler}
        value = {enteredGoal} />
        <Button title="Add"
        onPress = {addGoalHandler} />
      </View>

      <ScrollView>
        {courseGoals.map((goal)=> <View key ={goal} style ={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 30,
  },
  textInputStyle: {
    width: '80%',
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

import React, { useState } from "react";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [...currentGoals, {id:Math.random().toString(), title: goalTitle}]);
  };
  return (
    <View style={styles.root}>
      <GoalInput onAddGoal = {addGoalHandler}/>

      <FlatList
      keyExtractor = {(item,index)=> item.id}
        data={courseGoals}
        renderItem={itemdata => 
          <GoalItem title = {itemdata.item.title} onDelete = {() => console.log('this is working')}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 30,
  }
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function GoalItem(props) {
  return (
    <TouchableOpacity onPress ={props.onDelete}>
    <View style={goalItemStyle.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const goalItemStyle = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
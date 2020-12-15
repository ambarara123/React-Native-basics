import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={inputStyle.inputContainer}>
      <TextInput
        placeholder="Add your goal"
        style={inputStyle.textInputStyle}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
}

const inputStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInputStyle: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;

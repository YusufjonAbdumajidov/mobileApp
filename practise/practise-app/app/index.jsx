import { Text, View, Image, ScrollView, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const Cat = props => {
  const [ isHungry, setIsHungry ] = useState(true);

  return (
    <View>
      <Text>Hello I am {props.name}, and I am {isHungry ? "hungry" : "full"}</Text>
      <Button 
        title={isHungry ? "Give me food" : "Thanks"}
        onPress={() => setIsHungry(false)} 
        disabled={!isHungry} />
    </View>
  )
}

export default function Index() {
  return (
    <Cat name="Az" />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
  }
})

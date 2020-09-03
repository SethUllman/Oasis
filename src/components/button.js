import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Button = (props) => {
  return(
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d089a",
    width: "75%",
    borderRadius: 10
  },
  text: {
    color: "white",
    fontSize: 18
  }
})


export default Button;
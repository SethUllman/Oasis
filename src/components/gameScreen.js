import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameScreen = (props) => {
  console.log(props);
  return(
    <View style={styles.view}>
      <Text>Game Screen</Text>
      <Text>{props.players}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameScreen;
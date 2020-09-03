import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GameScreen = () => {
  return(
    <View style={styles.view}>
      <Text>Game Screen</Text>
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
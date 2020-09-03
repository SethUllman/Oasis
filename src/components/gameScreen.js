import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerCounter from './playerCounter';

const GameScreen = (props) => {
  return(
    <View style={styles.view}>
      <PlayerCounter />
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
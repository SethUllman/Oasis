import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerCounter1 from './playerConfigs/playerCounter1';

const GameScreen = (props) => {

  const GenerateScreens = () => {
    if(props.players == 1){
      return <PlayerCounter1 />
    }
  }

  return(
    <View style={styles.view}>
      {GenerateScreens()}
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
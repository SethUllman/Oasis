import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerCounter1 from './playerConfigs/playerCounter1';
import PlayerCounter2 from './playerConfigs/playerCounter2';


const GameScreen = (props) => {

  const GenerateScreens = () => {
    if(props.players == 1){
      return <PlayerCounter1 />
    } else if(props.players == 2){
      return <PlayerCounter2 />
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
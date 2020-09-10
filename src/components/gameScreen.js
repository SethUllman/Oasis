import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PlayerCounter1 from './playerConfigs/playerCounter1';
import PlayerCounter2 from './playerConfigs/playerCounter2';
import PlayerCounter3 from './playerConfigs/playerCounter3';
import PlayerCounter4 from './playerConfigs/playerCounter4';
import PlayerCounter5 from './playerConfigs/playerCounter5';
import PlayerCounter6 from './playerConfigs/playerCounter6';


const GameScreen = (props) => {

  const GenerateScreens = () => {
    if(props.players == 1){
      return <PlayerCounter1 health={props.health}/>
    } else if(props.players == 2){
      return <PlayerCounter2 health={props.health}/>
    } else if(props.players == 3){
      return <PlayerCounter3 health={props.health}/>
    } else if(props.players == 4){
      return <PlayerCounter4 health={props.health}/>
    } else if(props.players == 5){
      return <PlayerCounter5 health={props.health}/>
    } else if(props.players == 6){
      return <PlayerCounter6 health={props.health}/>
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
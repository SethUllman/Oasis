import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Button = (props) => {

  Navigation.registerComponent("GameScreen", () => {props.component});
  console.log(props);

  return(
    <TouchableOpacity
      style={styles.touchable}
      onPress={() => Navigation.push(props.componentId, {
        component: {
          name: 'GameScreen',
          options: {
            topBar: {
              title: {
                text: 'GameScreen'
              }
            }
          }
        }
      })}
    >
      <View style={styles.view}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    flex: 0.1,
    width: "75%",
    alignItems: "center"
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d089a",
    width: "100%",
    borderRadius: 10
  },
  text: {
    color: "white",
    fontSize: 18
  }
})


export default Button;
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default PlayerCounter1 = (props) => {

  const [health, setHealth] = useState(props.health);

  return(
    <View style={{ justifyContent: "center", alignItems: "center"}}>
      <LinearGradient
        style={{flex: 1, justifyContent: "center", alignItems: "center"}}
        colors={["#060037", "#00d4ff"]}>
        <Text style={{position: "absolute", margin: 0, fontSize: 150, zIndex: 0, color: "white"}}>{health}</Text>
        <View style={styles.view}>
          <TouchableOpacity style={styles.touchableL} onPress={() => {setHealth(health - 1)}}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableR} onPress={() => {setHealth(health + 1)}}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row"
  },
  touchableL: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 1
  },
  touchableR: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1
  },
  text: {
    fontSize: 38,
    margin: 30,
    color: "white"
  }
})


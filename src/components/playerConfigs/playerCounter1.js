import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default PlayerCounter1 = (props) => {

  const [health, setHealth] = useState(20);

  return(
    <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "rgba(196, 161, 100, 1)"}}>
      <Text style={{position: "absolute", margin: 0, fontSize: 150, zIndex: 0}}>{health}</Text>
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchableL} onPress={() => {setHealth(health - 1)}}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableR} onPress={() => {setHealth(health + 1)}}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
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
    margin: 30
  }
})


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default PlayerCounter1 = (props) => {

  const [health1, setHealth1] = useState(props.health);
  const [health2, setHealth2] = useState(props.health);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        colors={["#060037", "#00809B"]}>
      <View style={{ justifyContent: "center", alignItems: "center", transform: [{rotate: "180deg"}], borderTopWidth: 1, borderColor: "white" }}>
        <Text style={{ position: "absolute", margin: 0, fontSize: 150, zIndex: 0, color: "white"}}>{health1}</Text>
        <View style={styles.view}>
          <TouchableOpacity style={styles.touchableL} onPress={() => { setHealth1(health1 - 1) }}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableR} onPress={() => { setHealth1(health1 + 1) }}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ position: "absolute", margin: 0, fontSize: 150, zIndex: 0, color: "white" }}>{health2}</Text>
        <View style={styles.view}>
          <TouchableOpacity style={styles.touchableL} onPress={() => { setHealth2(health2 - 1) }}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableR} onPress={() => { setHealth2(health2 + 1) }}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
    </View>
  );

}

const styles = StyleSheet.create({
  view: {
    flex: .5,
    flexDirection: "row",
  },
  touchableL: {
    height: "100%",
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


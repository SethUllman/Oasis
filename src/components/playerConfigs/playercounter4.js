import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default PlayerCounter4 = (props) => {

  const [health1, setHealth1] = useState(props.health);
  const [health2, setHealth2] = useState(props.health);
  const [health3, setHealth3] = useState(props.health);
  const [health4, setHealth4] = useState(props.health);

  return (
    <View style={{flex: 1, flexDirection: "row"}}>
      <LinearGradient
        style={{ flex: 1, flexDirection: "row" }}
        colors={["#060037", "##00809B"]}>
      <View style={{ flex: 1, justifyContent: "space-around", borderRightWidth: 1 }}>
        <View style={[styles.side2, { borderBottomWidth: 1 }]}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 150, zIndex: 0, transform: [{ rotate: "90deg" }], color: "white" }}>{health1}</Text>
          <View style={[styles.view, { transform: [{ rotate: "90deg" }] }]}>
            <TouchableOpacity style={[styles.touchableL, { width: "100%" }]} onPress={() => { setHealth1(health1 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "100%" }]} onPress={() => { setHealth1(health1 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.side2}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 150, zIndex: 0, transform: [{ rotate: "90deg" }], color: "white" }}>{health2}</Text>
          <View style={[styles.view, { transform: [{ rotate: "90deg" }] }]}>
            <TouchableOpacity style={[styles.touchableL, { width: "100%" }]} onPress={() => { setHealth2(health2 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "100%" }]} onPress={() => { setHealth2(health2 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>



      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View style={[styles.side2, { borderBottomWidth: 1 }]}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 150, zIndex: 0, transform: [{ rotate: "-90deg" }], color: "white" }}>{health3}</Text>
          <View style={[styles.view, { transform: [{ rotate: "-90deg" }] }]}>
            <TouchableOpacity style={[styles.touchableL, { width: "100%" }]} onPress={() => { setHealth3(health3 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "100%" }]} onPress={() => { setHealth3(health3 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.side2}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 150, zIndex: 0, transform: [{ rotate: "-90deg" }], color: "white" }}>{health4}</Text>
          <View style={[styles.view, { transform: [{ rotate: "-90deg" }] }]}>
            <TouchableOpacity style={[styles.touchableL, { width: "100%" }]} onPress={() => { setHealth4(health4 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "100%" }]} onPress={() => { setHealth4(health4 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </LinearGradient>
    </View>
  );

}

const styles = StyleSheet.create({
  side2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    flex: .5,
    flexDirection: "row"
  },
  touchableL: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 1,
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


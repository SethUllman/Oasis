import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default PlayerCounter5 = (props) => {

  const [health1, setHealth1] = useState(props.health);
  const [health2, setHealth2] = useState(props.health);
  const [health3, setHealth3] = useState(props.health);
  const [health4, setHealth4] = useState(props.health);
  const [health5, setHealth5] = useState(props.health);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, justifyContent: "space-around", borderRightWidth: 1 }}>
        <View style={[styles.side1, { borderBottomWidth: 1 }]}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 100, zIndex: 0, transform: [{ rotate: "90deg" }] }}>{health1}</Text>
          <View style={[styles.view, { transform: [{ rotate: "90deg" }] }]}>
            <TouchableOpacity style={[styles.touchableL, { width: "100%" }]} onPress={() => { setHealth1(health1 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "100%" }]} onPress={() => { setHealth1(health1 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.side1}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 100, zIndex: 0, transform: [{ rotate: "90deg" }] }}>{health2}</Text>
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
          <Text style={{ position: "absolute", margin: 0, fontSize: 100, zIndex: 0, transform: [{ rotate: "-90deg" }] }}>{health3}</Text>
          <View style={[styles.view2, { transform: [{ rotate: "-90deg" }] }]}>
            <TouchableOpacity style={[styles.touchableL, { width: "66.666%" }]} onPress={() => { setHealth3(health3 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "66.666%" }]} onPress={() => { setHealth3(health3 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.side2, { borderBottomWidth: 1 }]}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 100, zIndex: 0, transform: [{ rotate: "-90deg" }] }}>{health4}</Text>
          <View style={[styles.view2, { transform: [{ rotate: "-90deg" }]}]}>
            <TouchableOpacity style={[styles.touchableL, { width: "66.666%"}]} onPress={() => { setHealth4(health4 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "66.666%" }]} onPress={() => { setHealth4(health4 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.side2}>
          <Text style={{ position: "absolute", margin: 0, fontSize: 100, zIndex: 0, transform: [{ rotate: "-90deg" }] }}>{health5}</Text>
          <View style={[styles.view2, { transform: [{ rotate: "-90deg" }]}]}>
            <TouchableOpacity style={[styles.touchableL, { width: "66.666%" }]} onPress={() => { setHealth5(health5 - 1) }}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.touchableR, { width: "66.666%" }]} onPress={() => { setHealth5(health5 + 1) }}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  side1: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(196, 161, 100, 1)",
  },
  side2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(196, 161, 100, 1)",
  },
  view: {
    flex: .51,
    flexDirection: "row"
  },
  view2: {
    flex: .76,
    flexDirection: "row"
  },
  touchableL: {
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 1,
    // backgroundColor: "white"
  },
  touchableR: {
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 1,
    // backgroundColor: "red"
  },
  text: {
    fontSize: 38,
    margin: 30
  }
})


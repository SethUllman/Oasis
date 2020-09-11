import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import LinearGradient from 'react-native-linear-gradient';


// Home screen declaration
const HomeScreen = (props) => {

  const [players, setPlayers] = useState(1);
  const [health, setHealth] = useState(20);

  return (
    <View style={styles.root}>
      <LinearGradient 
        style={[styles.root, {width: "100%"}]}
        colors={["#FE8963", "#D53249"]}>
        <Text style={{flex: 0.1, justifyContent: "center", alignItems: "center", fontSize: 32}}>Players: {players}</Text>
        <View style={{flex: 0.1, width: "90%", flexDirection: "row", justifyContent: "space-between"}}>
          <TouchableOpacity style={[styles.players, { backgroundColor: players == 1 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)"}]} onPress={() => {setPlayers(1)}}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.players, { backgroundColor: players == 2 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => {setPlayers(2)}}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.players, { backgroundColor: players == 3 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => {setPlayers(3)}}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.players, { backgroundColor: players == 4 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => {setPlayers(4)}}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.players, { backgroundColor: players == 5 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => {setPlayers(5)}}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.players, { backgroundColor: players == 6 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => { setPlayers(6) }}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ flex: 0.1, justifyContent: "center", alignItems: "center", fontSize: 32 }}>Starting Health: {health}</Text>
        <View style={{ flex: 0.1, width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={[styles.health, { backgroundColor: health == 20 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => { setHealth(20) }}>
            <Text style={styles.text}>20</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.health, { backgroundColor: health == 30 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => { setHealth(30) }}>
            <Text style={styles.text}>30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.health, { backgroundColor: health == 40 ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => { setHealth(40) }}>
            <Text style={styles.text}>40</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.health, { backgroundColor: (health != 20 && health != 30 && health != 40) ? "rgba(55, 1, 1, 1.0)" : "rgba(55, 1, 1, 0.6)" }]} onPress={() => { setHealth(4) }}>
            <Text style={styles.text}>Custom</Text>
          </TouchableOpacity>
      </View>
      

        <TouchableOpacity
          color='#710ce3'
          style={styles.button}
          onPress={() => Navigation.push(props.componentId, {
            component: {
              name: 'Game',
              options: {
                topBar: {
                  title: {
                    text: 'Game'
                  }
                }
              },
              passProps: {
                players: players,
                health: health
              }
            }
          })} >
            <Text style={{color: "white", fontSize: 24}}>
              Begin Game
            </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white'
    },
    background: {
      color: "#370101",
      // color: "#1b96b6"
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(202, 203, 165, 1)'
    // backgroundColor: "rgba(196, 161, 100, 1)"
  },
  button: {
    backgroundColor: 'rgba(55, 1, 1, 1.0)',
    width: "90%",
    flex: 0.1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  players: {
    width: 55,
    height: 60,
    backgroundColor: "rgba(55, 1, 1, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  health: {
    width: 90,
    height: 60,
    backgroundColor: "rgba(55, 1, 1, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    color: "white",
    fontSize: 24
  }
});

export default HomeScreen;
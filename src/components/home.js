import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';


// Home screen declaration
const HomeScreen = (props) => {

  const [players, setPlayers] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={{flex: 0.1, justifyContent: "center", alignItems: "center", fontSize: 32}}>Players: {players}</Text>
      <View style={{flex: 0.1, width: "90%", flexDirection: "row", justifyContent: "space-between"}}>
        <TouchableOpacity style={styles.players} onPress={() => {setPlayers(1)}}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.players} onPress={() => {setPlayers(2)}}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.players} onPress={() => {setPlayers(3)}}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.players} onPress={() => {setPlayers(4)}}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.players} onPress={() => {setPlayers(5)}}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.players} onPress={() => { setPlayers(6) }}>
          <Text style={styles.text}>6</Text>
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
              players: players
            }
          }
        })} >
          <Text style={{color: "white", fontSize: 24}}>
            Begin Game
          </Text>
      </TouchableOpacity>
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
      color: "rgba(196, 161, 100, 1)"
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(202, 203, 165, 1)'
  },
  button: {
    backgroundColor: 'rgba(130, 68, 74, 1)',
    width: "90%",
    flex: 0.1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  players: {
    width: 55,
    height: 60,
    backgroundColor: "rgba(130, 68, 74, 1)",
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
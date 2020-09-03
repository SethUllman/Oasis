import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';


// Home screen declaration
const HomeScreen = (props) => {

  const [players, setPlayers] = useState(1);

  return (
    <View style={styles.root}>
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
      color: '#4d089a'
    }
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  button: {
    backgroundColor: '#4d089a',
    width: "80%",
    flex: 0.1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
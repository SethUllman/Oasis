/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import GameScreen from './src/components/gameScreen';

Navigation.registerComponent('GameScreen', () => GameScreen)

class App extends React.Component {
  render(){
    return (
      <View style={styles.home}>
        <TouchableOpacity
          text="Click to Navigate"
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
          <View>
            <Text>Start Game</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  }
});

export default App;

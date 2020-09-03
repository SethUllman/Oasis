const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');
import HomeScreen from './src/components/home';
import GameScreen from './src/components/gameScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Game', () => GameScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
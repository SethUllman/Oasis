import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';


// Home screen declaration
const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title='Push Settings Screen'
        color='#710ce3'
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
        })} />
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
  }
});

export default HomeScreen;


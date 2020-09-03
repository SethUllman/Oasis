import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default PlayerCounter = (props) => {

  return(
    <View>
      <Text>20</Text>
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchable}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  view: {
    flex: 0.5,
    flexDirection: "row"
  },
  touchable: {
    backgroundColor: "blue"
  }
})


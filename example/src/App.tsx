import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertX, convertY, scaleFont } from 'react-native-responsive-pixels';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const App = () => {
  return (
    <View style={{
      width: convertX(375, BASE_WIDTH),
      height: convertY(812, BASE_HEIGHT),
      backgroundColor: '#123155',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ fontSize: scaleFont(22), color: 'white' }}>Hakan Akin</Text>
      <Text style={{ fontSize: scaleFont(18), marginTop: convertY(15), color: 'white' }}>Senior React Native Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
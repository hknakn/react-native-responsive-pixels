import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertX, convertY, scaleFont } from 'react-native-responsive-pixels';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hakan Akin
      </Text>
      <Text style={styles.description}>
        Senior React Native Developer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: convertX(375, BASE_WIDTH),
    height: convertY(812, BASE_HEIGHT),
    backgroundColor: '#123155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scaleFont(22, BASE_WIDTH),
    color: 'white',
  },
  description: {
    fontSize: scaleFont(18, BASE_WIDTH),
    marginTop: convertY(15),
    color: 'white',
  }
});

export default App;
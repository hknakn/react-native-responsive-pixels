import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { convertX, convertY, scaleFont, setBaseSize } from 'react-native-responsive-pixels';

export default function App() {
  const [isBaseSizeReady, setBaseSizeReady] = useState<boolean>(false);

  useEffect(() => {
    if (!isBaseSizeReady) {
      setBaseSize(375, 812);
      setBaseSizeReady(true);
    }
  }, []);

  return (
    <View style={{
      width: convertX(375),
      height: convertY(812),
      backgroundColor: '#123455',
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

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Logo = () => (
  <View style={styles.container}>
    <Image
      source={require('../../assets/images/Creditail-logos_transparent.png')}
      style={{width: 79, height: 79}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 89,
    height: 89,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6E6FF',
    borderRadius: 4,
  },
});

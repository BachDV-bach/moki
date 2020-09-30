import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import IntroSlider from './src/components/introSlider.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <IntroSlider/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

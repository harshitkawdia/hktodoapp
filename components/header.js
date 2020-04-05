import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#70dbff'
  },
  title: {
    
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5, 
    textAlign: 'center'

  }
});
import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Persons Manager
      </Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "orangered"
  },
  title: {
   
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold"
  }
})
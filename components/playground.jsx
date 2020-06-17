import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Playgound = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.textOne}>One</Text>
      <Text style={styles.textTwo}>Two</Text>
      <Text style={styles.textThree}>Three</Text>
      <Text style={styles.textFour}>Four</Text>
    </View>
  );
}

export default Playgound;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 40,
    backgroundColor: "grey",
    // flexDirection: 'column',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:"center"

  },
  textOne: {
    flex:1,
    padding: 10,
    backgroundColor:"orange",

  },
  textTwo: {
    flex:1,
    padding: 20,
    backgroundColor:"skyblue",
  },
  textThree: {
    flex:2,
    padding: 30,
    backgroundColor:"violet",
  },
  textFour: {
    flex:1,
    padding: 40,
    backgroundColor:"green",

  },
})
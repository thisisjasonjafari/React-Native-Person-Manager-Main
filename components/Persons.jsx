import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Persons = ({ person, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(person.key)}>
      <Text style={styles.person}>
        {person.name}
      </Text>
    </TouchableOpacity>
  );
}

export default Persons;

const styles = StyleSheet.create({
  person: {
    padding: 20,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "orangered",
    borderRadius: 20,
    // borderStyle:"dashed",
    textAlign: "center",
    fontSize: 17
  }

})
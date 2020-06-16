import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native';




const AddPerson = ({ submitHandler, setPerson, person }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Name ...."
        placeholderTextColor="darkgrey"
        onChangeText={setPerson }
        value={person}

      />
      <Button
        onPress={submitHandler}
        title="Add new Person"
        color="orange"
      />


    </View>
  );
}

export default AddPerson;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    fontSize: 15,

  }
})
import React from 'react'
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles/globalStyle'



const AddPerson = ({ submitHandler, setPerson, person }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Name ...."
        placeholderTextColor="darkgrey"
        onChangeText={setPerson}
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

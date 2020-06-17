import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import {styles} from './styles/globalStyle'

const Persons = ({ person, pressHandler, completedHandler }) => {
  return (
    <TouchableOpacity onPress={() => completedHandler(person.key)}>

      <View style={styles.person}>
        <MaterialIcons name="delete" size={25} color="gray" onPress={() => pressHandler(person.key)} />

        <Text style={[
          styles.personName,
          person.compleded ? { textDecorationLine: "line-through" } : {}
        ]} >
          {person.name}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

export default Persons;

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from './components/header';
import Persons from './components/Persons';
import AddPerson from './components/AddPerson';


const App = () => {

  const [persons, setPersons] = useState([
    { name: "Jason Jafari", key: "1" },
    { name: "Sara RekabTalaei", key: "2" },
    { name: "Majid Bayati", key: "3" },
    { name: "Roy Jafarii", key: "4" },
  ])


  const [person, setPerson] = useState("")

  const pressHandler = key => {
    setPersons(prevPersons => prevPersons.filter(p => p.key !== key))
  }


  const submitHandler = () => {
    if (person.length > 3) {
      setPersons((prevPersons) => [
        ...prevPersons,
        {
          name: person,
          key: Math.floor(Math.random() * 1000).toString()
        }
      ])
      setPerson("")
      Keyboard.dismiss()
    } else {
      Alert.alert("Alterttt!!!", "Name must be grater than 3 ", [
        {
          text: "undrestand",
          onPress: () => console.log("Alert close")
        }
      ])
    }

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />


        <View style={styles.body}>
          <AddPerson
            submitHandler={submitHandler}
            setPerson={setPerson}
            person={person}
          />
          <View style={styles.items}>
            <FlatList
              data={persons}
              renderItem={({ item }) => (
                <Persons
                  person={item}
                  pressHandler={pressHandler}
                />
              )}
            />

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  body: {
    padding: 40,
  },
  items: {
    marginTop: 20,
  }
})
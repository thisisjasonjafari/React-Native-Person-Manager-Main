import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import Persons from './components/Persons';


const App = () => {

  const [persons, setPersons] = useState([
    { name: "Jason Jafari", key: "1" },
    { name: "Sara RekabTalaei", key: "2" },
    { name: "Majid Bayati", key: "3" },
    { name: "Roy Jafarii", key: "4" },
  ])

  const pressHandler = key =>{
    setPersons(prevPersons=> prevPersons.filter(p=> p.key !== key))
  }
  return (
    <View style={styles.container}>
      <Header />


      <View style={styles.body}>
        {/* Add Person */}
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
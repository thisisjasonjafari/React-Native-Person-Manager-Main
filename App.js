import React, { useState } from 'react';
import { AppLoading } from "expo";
import * as Font from "expo-font";
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
import Playgound from './components/playground';


const getFonts = () => {
  return Font.loadAsync({
      "yekan": require("./assets/fonts/byekan.ttf"),
      "yekan-bold": require("./assets/fonts/byekan.ttf"),
  });
};



const App = () => {

  const [persons, setPersons] = useState([
    { name: "Jason Jafari", key: "1", compleded: false },
    { name: "Sara RekabTalaei", key: "2", compleded: false },
    { name: "Majid Bayati", key: "3", compleded: false },
    { name: "Roy Jafarii", key: "4", compleded: false },
  ])


  const [person, setPerson] = useState("")
  const [fontLoading, setFontLoading] = useState(false);
  const pressHandler = key => {
    setPersons(prevPersons => prevPersons.filter(p => p.key !== key))
  }

  const completedHandler = (key) => {
    const allPersons = [...persons]
    const personIndex = allPersons.findIndex(p => p.key == key)
    const person = allPersons[personIndex]
    person.compleded = !person.compleded
    allPersons[personIndex] = person
    setPersons(allPersons)
  }


  const submitHandler = () => {
    if (person.length > 3) {
      setPersons((prevPersons) => [
        ...prevPersons,
        {
          name: person,
          key: Math.floor(Math.random() * 1000).toString(),
          compleded: false
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
  if(fontLoading){
    return (

      // <Playgound />
  
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
                    completedHandler={completedHandler}
                  />
                )}
              />
  
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  
  
    );
  }else {
    return (
        <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontLoading(true)}
        />
    );
}
 
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  body: {
    padding: 40,
    backgroundColor: "white",
    flex: 1
  },
  items: {
    marginTop: 20,
    flex: 1
  }
})
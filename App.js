import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const App = () => {

  const [persons, setPersons] = useState([
    { name: "Jason Jafari", key: "1" },
    { name: "Sara RekabTalaei", key: "2" },
    { name: "Majid Bayati", key: "3" },
    { name: "Roy Jafari", key: "4" },
  ])
  return (
    <View style={styles.container}>
      {/* {Header} */}
      <View style={styles.body}>
        {/* Add Person */}
        <View style={styles.items}>
          <FlatList
            data={persons}
            renderItem={({item})=>(
            <Text>{item.name}</Text>
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
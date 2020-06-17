import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  person: {
    padding: 20,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "orangered",
    borderRadius: 20,
    // borderStyle:"dashed",
    flexDirection: "row-reverse",
    justifyContent: "space-between"

  },
  personName: {

    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    fontSize: 15,

  },
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "orangered"
  },
  title: {

    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "yekan-bold"
  }

})
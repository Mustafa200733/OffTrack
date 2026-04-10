import { StyleSheet } from "react-native";
import {View, Text } from "react-native";
import Nav from "./Nav";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <Text style={styles.Text}>My Profile</Text>
         <Nav />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",

    heading:{
    backgroundColor: "#111",
    }
  },
  
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
  },  

});



import { StyleSheet } from "react-native";
import {View, Text } from "react-native";
import Nav from "./Nav";

export default function Plus() {
  return (
    <View style={styles.plus}>
      <Nav />
      <Text style={styles.Text}>New diary entry</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  plus: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
 Text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
  },  
});

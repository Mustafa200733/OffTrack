import { StyleSheet } from "react-native";
import {View, Text } from "react-native";
import Nav from "./Nav";

export default function Search() {
  return (
    <View style={styles.search} >
      <Text style={styles.Text}> Barcelona</Text>
            <Nav />

    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
        backgroundColor: "#ffffff",

  },
    Text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 910,
    marginLeft: 20,
  },  
});

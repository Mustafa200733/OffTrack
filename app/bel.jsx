import { StyleSheet} from "react-native";
import {View, Text} from "react-native"
import Nav from "./Nav";

export default function Bel() {
  return (
<View  style={styles.screen}>
<Text style={styles.Text}>🔔 Notifications</Text>
    <Nav />
</View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
  },  
});



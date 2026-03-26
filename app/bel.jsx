import { StyleSheet, Text, View } from "react-native";
import Nav from "./Nav";

export default function Bel() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>Bel</Text>
      </View>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 84,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
});

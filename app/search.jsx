import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "./Nav";

export default function Search() {
  return (
    <SafeAreaView style={styles.screen}>
      <Nav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

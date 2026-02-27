import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./home.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
      pointerEvents="none"
    >
      <Text style={styles.title}>
        Explore a{"\n"}new world{"\n"}with us
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // vertical center
    alignItems: "flex-start", // left align children
    paddingHorizontal: 20, // some side padding
  },

  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  title: {
    fontSize: 48, // much larger
    fontWeight: "700",
    color: "#fdfdfd",
    textAlign: "left",
    marginBottom: 24,
    // removed fixed top; container handles vertical centering
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 40, // space from bottom
    flexDirection: "column", // stack vertically
    alignItems: "center",
    paddingHorizontal: 20,
  },

  button: {
    width: "100%",
    height: 35,
    maxWidth: 300,
    backgroundColor: "#000",
    borderRadius: 13,
    marginBottom: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "100%",
    letterSpacing: 1,
  },
});

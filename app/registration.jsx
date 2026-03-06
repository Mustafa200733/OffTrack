import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";

export default function registration() {
  return (
    <ImageBackground
      source={require("./cret.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
      pointerEvents="none"
    >
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </Pressable>
        <Text style={styles.subheading}>Already have an account? Sign in</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 40,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    height: 54,
    backgroundColor: "#000",
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
     marginLeft: -39,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "690",
    letterSpacing: 3,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
        letterSpacing: 1,
     marginLeft: -39,

  },
});

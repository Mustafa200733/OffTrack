import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";

export default function Login() {
  return (
    <ImageBackground
      source={require("./log.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
      pointerEvents="none"
    >
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.subheading}>Dont have an account? Sign up</Text>
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
    width: "97%",
    height: 54,
    backgroundColor: "#000",
    borderRadius: 30,
    marginBottom: 22,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "690",
    letterSpacing: 2,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "610",
    color: "#ffffff",
        letterSpacing: 2,

  },
});

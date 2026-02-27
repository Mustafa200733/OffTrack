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
    width: "100%",
    height: 35,
    maxWidth: 300,
    backgroundColor: "#000",
    borderRadius: 13,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 1,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
});

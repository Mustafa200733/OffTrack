import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <ImageBackground
      source={require("./images/log.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
    >
      <View style={styles.buttonContainer}>
        <Link href="/home" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </Link>

        <Link href="/registration" asChild>
          <Pressable hitSlop={10}>
            <Text style={styles.subheading}>Dont have an account? Sign up</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
    gap: 12,
  },
 
  button: {
    width: "100%",
    height: 54,
    backgroundColor: "#000",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
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
    textAlign: "center",
  },
});

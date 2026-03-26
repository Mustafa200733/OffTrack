import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function registration() {
  return (
    <ImageBackground
      source={require("./images/cret.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
    >
      <View style={styles.buttonContainer}>
        <Link href="/home" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </Pressable>
        </Link>

        <Link href="/login" asChild>
          <Pressable hitSlop={10}>
            <Text style={styles.subheading}>Already have an account? Sign in</Text>
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "690",
    letterSpacing: 3,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 1,
    textAlign: "center",
  },
});

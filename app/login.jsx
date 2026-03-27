import { useMemo, useState } from "react";
import {Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View,
} from "react-native";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = useMemo(() => {
    return email.trim().length > 0 && password.length > 0;
  }, [email, password]);

  const handleLogin = () => {
    if (!isValid) {
      Alert.alert("Fout", "Vul je email en wachtwoord in.");
      return;
    }

    router.replace("/home");
  };

  return (
    <ImageBackground
      source={require("./images/log.png")}
      style={[styles.background, styles.container]}
      resizeMode="cover"
    >
      <View style={styles.form}>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.75)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />

        <TextInput
          style={styles.input}
          placeholder="Wachtwoord"
          placeholderTextColor="rgba(255,255,255,0.75)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
        />

        <Pressable
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

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
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 12,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
  },
  input: {
    height: 54,
    borderRadius: 18,
    paddingHorizontal: 16,
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },
  button: {
    width: "100%",
    height: 54,
    backgroundColor: "#000",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 2,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "610",
    color: "#ffffff",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 6,
  },
});

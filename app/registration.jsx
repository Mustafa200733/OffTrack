import { useMemo, useState } from "react";
import {Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View,
} from "react-native";
import { Link, useRouter } from "expo-router";

export default function Registration() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid = useMemo(() => {
    if (name.trim().length === 0) return false;
    if (email.trim().length === 0) return false;
    if (password.length === 0) return false;
    if (confirmPassword.length === 0) return false;
    if (password !== confirmPassword) return false;
    return true;
  }, [name, email, password, confirmPassword]);

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert("Fout", "Vul alle velden in.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Fout", "Wachtwoorden komen niet overeen.");
      return;
    }

    router.replace("/home");
  };

  return (
    <ImageBackground
      source={require("./images/cret.png")}
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
          textContentType="newPassword"
        />

        <TextInput
          style={styles.input}
          placeholder="Bevestig wachtwoord"
          placeholderTextColor="rgba(255,255,255,0.75)"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          textContentType="newPassword"
        />

        <Pressable
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleRegister}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </Pressable>

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
    color: "#140000",
    marginBottom: 8,
  },
  input: {
    height: 54,
    borderRadius: 18,
    paddingHorizontal: 16,
    color: "#020000",
    backgroundColor: "rgb(48, 32, 32)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  button: {
    width: "100%",
    height: 54,
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  buttonDisabled: {
    opacity: 0.6,
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
    marginTop: 6,
  },
});

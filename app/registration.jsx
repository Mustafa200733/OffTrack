import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Registration() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const errorTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, []);

  const isValid = useMemo(() => {
    if (username.trim().length === 0) return false;
    if (password.length === 0) return false;
    if (confirmPassword.length === 0) return false;
    if (password !== confirmPassword) return false;
    return true;
  }, [username, password, confirmPassword]);

  const handleRegister = async () => {
    const showMessage = (message) => {
      setError(message);
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => setError(""), 3000);
    };

    if (!username.trim()) {
      showMessage("Gebruikersnaam is verplicht.");
      return;
    }
    if (!password) {
      showMessage("Wachtwoord is verplicht.");
      return;
    }
    if (!confirmPassword) {
      showMessage("Bevestig wachtwoord is verplicht.");
      return;
    }
    if (password !== confirmPassword) {
      showMessage("Wachtwoorden komen niet overeen");
      return;
    }

    try {
      
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ username: username.trim(), password })
      );
      setError("");
      router.replace("/login");
    } catch (_storageError) {
      showMessage("Er ging iets mis bij registreren.");
    }
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
          placeholder="Gebruikersnaam"
          placeholderTextColor="rgb(0, 0, 0)"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          textContentType="username"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgb(0, 0, 0)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="newPassword"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgb(0, 0, 0)"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          textContentType="newPassword"/>
        
        <Pressable
          style={[styles.button]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </Pressable>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

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
    fontSize: 42,
    fontWeight: "700",
    color: "#f8f8f8",
    marginBottom: 8,
  },
  input: {
    height: 54,
    borderRadius: 28,
    paddingHorizontal: 16,
    color: "#000000",
    backgroundColor: "rgb(255, 255, 255)",
    borderWidth: 1,
    borderColor: "rgb(255, 255, 255)",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 2,

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

 
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "690",
    letterSpacing: 3,
  },
  errorText: {
    color: "#b00020",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 6,
  },
});

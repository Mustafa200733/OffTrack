import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const errorTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, []);

  const isValid = useMemo(() => {
    return username.trim().length > 0 && password.length > 0;
  }, [username, password]);

  const handleLogin = async () => {
    const showMessage = (message) => {
      setError(message);
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => setError(""), 3000);
    };

    if (!isValid) {
      showMessage("Vul je gebruikersnaam en wachtwoord in.");
      return;
    }

    try {
      const storedUserRaw = await AsyncStorage.getItem("user");
      const storedUser = storedUserRaw ? JSON.parse(storedUserRaw) : null;
      const isCorrectLogin =
        storedUser?.username === username.trim() && storedUser?.password === password;

      if (isCorrectLogin) {
        setError("");
        router.replace("/profile");
        return;
      }

      showMessage("Onjuiste gebruikersnaam of wachtwoord");
    } catch (_storageError) {
      showMessage("Er ging iets mis bij inloggen.");
    }
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
          placeholder="Gebruikersnaam"
          placeholderTextColor="rgb(0, 0, 0)"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
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
          textContentType="password"
        />

        <Pressable
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

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
    backgroundColor: "#000",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },


  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 2,
  },
  errorText: {
    color: "#b00020",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.2,
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

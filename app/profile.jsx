import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Nav from "./Nav";
import axios from "axios";

const OPENWEATHER_API_KEY = "d8a317cc158a78de7232b05ad8139eb9";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY.includes("JOUW_")) {
      Alert.alert(
        "API key ongeldig",
        "Zet een echte EXPO_PUBLIC_OPENWEATHER_API_KEY in je .env en herstart Expo."
      );
      return;
    }

    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: "Amsterdam",
          appid: OPENWEATHER_API_KEY,
          units: "metric",
          lang: "nl",
        },
      });
      setData(response.data);
    } catch (error) {
      const status = error?.response?.status;
      if (status === 401) {
        Alert.alert(
          "API key nog niet actief",
          "OpenWeather geeft 401 terug. Controleer de key en wacht eventueel 10-60 min na aanmaken."
        );
        return;
      }
      Alert.alert(
        "Data ophalen mislukt",
        `Status: ${status ?? "onbekend"}. Controleer internet of probeer later opnieuw.`
      );
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUserRaw = await AsyncStorage.getItem("user");
        const storedUser = storedUserRaw
          ? JSON.parse(storedUserRaw)
          : null;
        setUsername(storedUser?.username ?? "");
      } catch (_error) {
        setUsername("");
      }
    };

    loadUser();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image
          source={require("./images/backgroundm.png")}
          style={styles.headerImage}
        />

        <Image
          source={require("./images/Mustafa.png")}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.nameRow}>
        <Text style={styles.name}>
          Welkom, {username || "Gebruiker"}!
        </Text>
        <Image
          source={require("./images/pen.png")}
          style={styles.editIcon}
        />
      </View>

      <Text style={styles.pronouns}>he/him</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Mustafa is a travel enthusiast who enjoys discovering new places and
          experiencing different cultures. He likes exploring cities, trying new
          foods, and meeting people from around the world.
        </Text>
      </View>

      <View style={styles.container}>
        <Pressable style={styles.button} onPress={fetchData}>
          <Text style={styles.buttonText}>Haal Weer Op</Text>
        </Pressable>

        {data && (
          <View style={styles.dataContainer}>
            <Text style={styles.weatherTitle}>{data?.name ?? "Onbekende stad"}</Text>
            <Text style={styles.weatherText}>
              Temperatuur: {Math.round(data?.main?.temp ?? 0)} C
            </Text>
            <Text style={styles.weatherText}>
              Weer: {data?.weather?.[0]?.description ?? "Geen omschrijving"}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.favHeader}>
        <Image
          source={require("./images/Hartje.png")}
          style={styles.heart}
        />
        <Text style={styles.favTitle}>My favorites</Text>
      </View>

      <View style={styles.citiesContainer}>
        <Image
          source={require("./images/Cities.png")}
          style={styles.citiesImage}
        />
      </View>

      <View style={styles.navSpacer} />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    width: "100%",
    height: 220,
  },

  headerImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#fff",
    position: "absolute",
    bottom: -55,
    left: 20,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },

  editIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },

  pronouns: {
    marginLeft: 20,
    color: "#777",
    marginTop: 2,
  },

  card: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#333",
  },

  favHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginLeft: 20,
  },

  heart: {
    width: 22,
    height: 22,
    marginRight: 8,
    top: 100,
  },

  favTitle: {
    fontSize: 18,
    fontWeight: "bold",
    top: 100,
  },

  citiesContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden",
    top: 120,
  },

  citiesImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },

  navSpacer: {
    flex: 1,
  },
  container: {
    marginTop: 12,
    marginHorizontal: 20,
    gap: 8,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  dataContainer: {
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e2e2e2",
    gap: 4,
  },
  weatherTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  weatherText: {
    fontSize: 15,
    color: "#333",
  },
});

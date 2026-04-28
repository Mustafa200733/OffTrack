import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import Nav from "./Nav";
import axios from "axios";

const apiKey = (process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY ?? "").trim();
const trip = { city: "Rome" };

export default function Romedetail() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!apiKey) {
        setWeather(null);
        return;
      }

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(trip.city)}&appid=${apiKey}&units=metric&lang=nl`;
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (_error) {
        setWeather(null);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View>
      <Text style={styles.title}>{trip.city}</Text>
      <Link href="/home">
        <Image source={require("./images/kruis.png")} style={styles.kruis} />
      </Link>

      <Image source={require("./images/romedet.png")} style={styles.image} />

      <Text style={styles.dayTitle}>Day 1</Text>
      <Text style={styles.storyText}>
        I finally made it! After months of planning, I landed in Rome this morning. The city felt alive from the
        first minute, with cozy streets, old buildings, and amazing food around every corner.
      </Text>

      <Text style={styles.dayTitle}>Day 2</Text>
      <Text style={styles.storyText}>
        Today I explored the highlights of Rome, walked through historic neighborhoods, and enjoyed local dishes.
        Every street had something new to discover.
      </Text>

      <View style={styles.weatherContainer}>
        {weather ? (
          <>
            <Text style={styles.weatherText}>??? {Math.round(weather?.main?.temp ?? 0)}°C</Text>
            <Text style={styles.weatherText}>?? {weather?.weather?.[0]?.description ?? "Geen weerinformatie beschikbaar."}</Text>
          </>
        ) : (
          <Text style={styles.weatherFallback}>Geen weerinformatie beschikbaar.</Text>
        )}
      </View>

      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
  },
  dayTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 8,
  },
  storyText: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "bold",
  },
  kruis: {
    top: -39,
    left: 350,
  },
  weatherContainer: {
    marginTop: 12,
    marginHorizontal: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e4e4e4",
    gap: 4,
    marginBottom: 12,
  },
  weatherText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  weatherFallback: {
    fontSize: 15,
    color: "#555",
    fontWeight: "600",
  },
});

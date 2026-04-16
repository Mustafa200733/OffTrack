import { Image, StyleSheet, Text, View } from "react-native";
import Nav from "./Nav";

export default function Profile() {
  return (
    <View style={styles.screen}>

      {/* HEADER */}
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

      {/* NAME + EDIT */}
      <View style={styles.nameRow}>
        <Text style={styles.name}>Mustafa</Text>
        <Image
          source={require("./images/pen.png")}
          style={styles.editIcon}
        />
      </View>

      <Text style={styles.pronouns}>he/him</Text>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.cardText}>
          Mustafa is a travel enthusiast who enjoys discovering new places and
          experiencing different cultures. He likes exploring cities, trying new
          foods, and meeting people from around the world.
        </Text>
      </View>

      {/* FAVORITES HEADER */}
      <View style={styles.favHeader}>
        <Image
          source={require("./images/Hartje.png")}
          style={styles.heart}
        />
        <Text style={styles.favTitle}>My favorites</Text>
      </View>

      {/* HORIZONTAL CITIES */}
<View style={styles.citiesContainer}>
  <Image
    source={require("./images/Cities.png")}
    style={styles.citiesImage}
  />
</View>
<br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* HEADER */
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

  /* NAME */
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

  /* CITIES */
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
});
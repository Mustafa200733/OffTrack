import { StyleSheet} from "react-native";
import {View, Text, Image} from "react-native"
import Nav from "./Nav";

export default function Bel() {
  return (
<View  style={styles.screen}>
<Text style={styles.Text}>🔔 Notifications</Text>
    <View style={styles.card}>
      <Image source={require("./images/Mustafa1.png")}
      style={styles.CardImage}
      ></Image>
<Text style={styles.CardText}>
  <h3>Mustafa posted:</h3>
  <p>Ik luv het maatje! Lekker op die goede dingen.</p>
</Text>
<br />


    </View>
        <View style={styles.card}>
      <Image source={require("./images/imgbel1.png")}
      style={styles.CardImage}
      ></Image>
<Text style={styles.CardText}>
  <h3>Mustafa posted:</h3>
  <p>Ik luv het maatje! Lekker op die goede dingen.</p>
</Text>
    </View>
    <br />
        <View style={styles.card}>
      <Image source={require("./images/imgbel2.png")}
      style={styles.CardImage}
      ></Image>
<Text style={styles.CardText}>
  <h3>Mustafa posted:</h3>
  <p>Ik luv het maatje! Lekker op die goede dingen.</p>
</Text>
    </View>
    <br />
        <View style={styles.card}>
      <Image source={require("./images/imgbel3.png")}
      style={styles.CardImage}
      ></Image>
<Text style={styles.CardText}>
  <h3>Mustafa posted:</h3>
  <p>Ik luv het maatje! Lekker op die goede dingen.</p>
</Text>
    </View>
    <br />
        <View style={styles.card}>
      <Image source={require("./images/imgbel4.png")}
      style={styles.CardImage}
      ></Image>
<Text style={styles.CardText}>
  <h3>Mustafa posted:</h3>
  <p>Ik luv het maatje! Lekker op die goede dingen.</p>
</Text>



    </View>
    <br />
        <View style={styles.card}>
      <Image source={require("./images/imgbel5.png")}
      style={styles.CardImage}
      ></Image>
<Text style={styles.CardText}>
  <h3>Mustafa posted:</h3>
  <p>Ik luv het maatje! Lekker op die goede dingen.</p>
</Text>



    </View>
    <br />
        <br />
            <br />

                <br />
                    <br />
                        <br />

    <Nav />
</View>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
    top: 20,
  },  
  card: {
    top: 44, 
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "90%",
    height: 100,

  },
  CardImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginBottom: 10,
  },

  CardText: {
    fontSize: 14,
    top: -90,
    left: 85,
  },

});



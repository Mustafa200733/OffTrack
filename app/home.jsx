import { StyleSheet, View, Text, Pressable, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Nav from "./Nav";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.Text}>🏖️ My Trips</Text>
      
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      <Link href="/Barcelonadetail" asChild>
              <Pressable style={styles.iconWrapper}>
                <Image 
                  source={require('./images/Barcelona.png')}
                  style={styles.image}
                />
              </Pressable>
            </Link>
              <Link href="/Newyorkdetail" asChild>
              <Pressable style={styles.iconWrapper}>
                <Image 
                  source={require('./images/Newyork.png')}
                  style={styles.image}
                />
              </Pressable>
            </Link>
              <Link href="/Tokyodetail" asChild>
              <Pressable style={styles.iconWrapper}>
                <Image 
                  source={require('./images/Tokyo.png')}
                  style={styles.image}
                />
              </Pressable>
            </Link>



              <Link href="/Romedetail" asChild>
              <Pressable style={styles.iconWrapper}>
                <Image 
                  source={require('./images/Rome.png')}
                  style={styles.image}
                />
              </Pressable>
            </Link>

              <Link href="/Chongqingdetail" asChild>
              <Pressable style={styles.iconWrapper}>
                <Image 
                  source={require('./images/Chongqing.png')}
                  style={styles.image}
                />
              </Pressable>
            </Link>


            
      </ScrollView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Text: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 20,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 14,
  },
  iconWrapper: {
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ededed",
  },
  image: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
  },

});

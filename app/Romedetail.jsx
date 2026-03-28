import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router';

export default function Romedetail() {
  
  return (
   <View>
       <Text style={styles.Text}>Rome</Text>
        <Link href="/home">
             <Image source={require('./images/kruis.png')} 
             style={styles.kruis}
             ></Image>
       </Link>
       <Image source={require('./images/romedet.png')}
                               style={styles.image}
 >
       </Image>
      <Text style={styles.Textt} >Day 1</Text>
          <Text style={styles.Text3}>
          
          
I finally made it! After months of planning, I landed in Rome this morning. The moment I stepped out of the airport, I felt the warm Mediterranean breeze and the city’s vibrant energy. My hotel is in the Gothic Quarter, a maze of narrow, cobblestone streets filled with history. I spent the afternoon wandering around, marveling at the medieval buildings and charming plazas. For dinner, I had my first taste of authentic tapas—patatas bravas, jamón ibérico, and a glass of sangria. A perfect start to my trip!
      
      <br />
      <br />
      </Text>
           <Text style={styles.Textt}>Day 2</Text>     
       <Text style={styles.Text3}> 
      
Today was all about Antoni Gaudí. I started my morning at the breathtaking Sagrada Família. The towering spires and intricate details left me speechless. I could’ve spent hours admiring the stained glass windows as sunlight danced through them. Next, I visited Park Güell, a whimsical wonderland filled with colorful mosaics and surreal architecture. Walking through the park felt like stepping into a fairytale. I ended my day strolling down Passeig de Gràcia, where I saw Casa Batlló and La Pedrera. Gaudí’s genius is everywhere!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
     Text: {
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
  
  Textt: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
  },
  Text3: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 20,
        fontWeight: "bold",

  },
  kruis: {
    top: -39,
    left: 350,
   
  },
})

import { StyleSheet, View, Pressable, Image } from 'react-native'
import { Link } from 'expo-router'

export default function Nav() {
  return (
    <View style={styles.navbar}>
      <Link href="/home" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/house.png')} 
            style={styles.image}
          />
        </Pressable>
      </Link>

      <Link href="/search" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/search.png')} 
            style={styles.image}
          />
        </Pressable>
      </Link>

      <Link href="/plus" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/plus.png')} 
            style={styles.image}
          />
        </Pressable>
      </Link>

      <Link href="/bel" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/bel.png')} 
            style={styles.image}
          />
        </Pressable>
      </Link>

      <Link href="/profile" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/pfp.png')} 
            style={styles.image}
          />
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',  
    bottom: 0,             
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',          
    paddingHorizontal: 10,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  }
})
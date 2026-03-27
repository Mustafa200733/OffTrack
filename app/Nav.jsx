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
            style={styles.plus}
          />
        </Pressable>
      </Link>

      <Link href="/Bel" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/bel.png')} 
            style={styles.bel}
          />
        </Pressable>
      </Link>

      <Link href="/profile" asChild>
        <Pressable style={styles.iconWrapper}>
          <Image 
            source={require('./images/pfp.png')} 
            style={[styles.image, styles.avatar]}
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
    height: 66,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',          
    paddingHorizontal: 12,
  },
  iconWrapper: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  avatar: {
    borderRadius: 12,
    resizeMode: 'cover',
  },

  plus: {
    width: 71,
    height: 52,
    top: 5,
  },

  bel: {
    width: 51,
    height: 32,
  },
})

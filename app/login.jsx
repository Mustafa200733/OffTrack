import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native'

export default function login() {
  return (
    <ImageBackground
      source={require('./log.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        <Text style={styles.subheading}>Dont have an account? Sign up</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  button: {
    width: '85%',
    maxWidth: 480,
    backgroundColor: '#000',
    paddingVertical: 11,
    borderRadius: 33,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
})

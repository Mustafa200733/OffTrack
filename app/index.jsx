import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Explore a{'\n'}new world{'\n'}with us
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    width: '85%',
    maxWidth: 360,
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
  },
});


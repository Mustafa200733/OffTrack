import { StyleSheet, View } from 'react-native'
import Nav from './Nav';

export default function profile() {
  return (
        <View style={styles.container}>
    
      <Nav />  
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,              
  },
})



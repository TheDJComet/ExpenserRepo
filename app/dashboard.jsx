import { StyleSheet, Text, View } from 'react-native';

import { Link } from "expo-router";

const dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Your Budget At a Glance!</Text>

      <Link href="/">Go to Home</Link>
    </View>

    
  )
}

export default dashboard

const styles = StyleSheet.create({
    container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
})
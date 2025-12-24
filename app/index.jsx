import { Image, StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome To Expenser</Text>
      <View style={styles.genericButton}>
        <Link href="/dashboard">Go to Dashboard</Link>
      </View>
      <Image source={require("../assets/images/Temp-Budget.jpeg")} style={styles.image} />
      <View style={styles.buttonContainer}>
        <View style={styles.signUpButton}> 
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c02828ff",
  },
  image: {
    width: "100%",
    height: "20%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    padding: 10,
    backgroundColor: "#28a745",
    borderRadius: 5,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
  signUpButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 18,
  },

  genericButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#001a36ff",
    borderRadius: 5,
  },
  genericButtonText: {
    color: "white",
    fontSize: 18,
  },
});
import { StyleSheet } from "react-native";

import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack screenOptions={{ headerShown: true, headerTintColor: "#530000ff", }} />;
}

export default RootLayout;

const styles = StyleSheet.create({});
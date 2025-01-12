import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar as SB,
} from "react-native";
import HomePage from "./app/screens/HomePage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
});

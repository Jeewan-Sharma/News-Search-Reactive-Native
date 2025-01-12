import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar as SB,
} from "react-native";
import HomePage from "./app/screens/HomePage";
import ArticleDetails from "./app/screens/ArticleDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
});

import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

function HomePage(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>News Search</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput style={styles.input} placeholder="Search News" />
        <TouchableOpacity>
          <View style={styles.searchWrapper}>
            <Text style={styles.searchText}>
              <AntDesign name="search1" size={24} color="black" />
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    marginTop: 5,
    fontSize: 30,
    color: "#444444",
    fontWeight: "bold",
  },
  inputWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
  },
  searchWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchText: {
    fontSize: 20,
  },
});

export default HomePage;

import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getData } from "../api/Api";

import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

function HomePage(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await getData(searchQuery);
      setData(result.articles);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const renderArticle = ({ item }) => (
    <View style={styles.article}>
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Text style={styles.articleDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>News Search</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Search News"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleSearch}>
          <View style={styles.searchWrapper}>
            <Text style={styles.searchText}>
              <AntDesign name="search1" size={24} color="black" />
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Show loading indicator */}
      {loading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      {/* Show error message */}
      {error && (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {/* Display fetched articles using FlatList */}
      {data && !loading && !error && (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderArticle}
          contentContainerStyle={styles.articlesWrapper}
        />
      )}
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
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  articlesWrapper: {
    marginTop: 20,
  },
  article: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 0,
    backgroundColor: "#ffff",
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  articleDescription: {
    fontSize: 14,
    color: "#555",
  },
});

export default HomePage;

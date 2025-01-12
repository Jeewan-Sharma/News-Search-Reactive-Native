import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
} from "react-native";

function ArticleDetails({ route }) {
  const { article } = route.params;

  const handleOpenURL = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>
        By {article.author} | Published on{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </Text>
      {article.urlToImage ? (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      ) : null}
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>

      <View style={styles.footer}>
        <Text style={styles.readMore} onPress={handleOpenURL}>
          Read full article
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    color: "#555",
  },
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    color: "#333",
    marginVertical: 10,
    fontStyle: "italic",
  },
  content: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  footer: {
    marginTop: 20,
  },
  readMore: {
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
  },
});

export default ArticleDetails;

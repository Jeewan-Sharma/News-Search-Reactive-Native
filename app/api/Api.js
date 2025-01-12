import axios from "axios";

export const getData = async (keyword) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=183daca270264bad86fc5b72972fb82a`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

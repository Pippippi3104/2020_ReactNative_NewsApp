import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from "../components/ListItem";
import Loading from "../components/Loading";
import dummyArticles from "../dummies/articles.json";
import Constants from "expo-constants";
import axios from "axios";

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});

/* export default HomeScreen = () => では動かない */
export default function HomeScreen({navigation}) {

  /* 面倒な書き方 */
  const items = dummyArticles.map( (article, index) => {
    return (
      <ListItem 
        imageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        /* keyが無いと参照先の管理ができない */
        key={index}
      />
    );
  });

  /* hook利用 */
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchArticles();
  }, []);

  /* NewsAPI */
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {items} */}

      {/* スクロールできるようになる */}
      <FlatList 
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage} 
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}



import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from "./components/ListItem";
import dummyArticles from "./dummies/articles.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});

export default function App() {

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
  const [articles, setArticles] = useState([dummyArticles])
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}



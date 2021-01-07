import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from "./components/ListItem";
import articles from "./dummies/articles.json";

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
  const items = articles.map( (article, index) => {
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



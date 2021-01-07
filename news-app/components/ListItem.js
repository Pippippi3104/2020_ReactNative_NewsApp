import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    /* 行方向に整列 */
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    /* 使える幅を全て使う */
    flex: 1,
    /* 列方向に整列（デフォルト） */
    flexDirection: "column",
    padding: 10,
    /* いい感じに行間を調整 */
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});

const ListItem = ({ imageUrl, title, author }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: imageUrl }}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>{author}</Text>
            </View>
        </View>
    )
}

export default ListItem;
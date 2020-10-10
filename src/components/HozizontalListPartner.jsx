import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { Rating} from "react-native-ratings";

HozizontalListPartner = (props) => {
  return (
    <View style={{ width: "100%", marginTop: 15 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <ItemPartner item={item} />}
      />
    </View>
  );
};

ItemPartner = (props) => {
  return (
    <View style={styles.container}>
      <Rating
        type="custom"
        imageSize={25}
        style={{
          marginRight: 16,

          marginBottom: -13,
          borderRadius:30
        }}
        ratingColor="orange"
        ratingBackgroundColor="white"
        tintColor="#FF9138"
        startingValue={0}
      />
      <View style={styles.containerItem}>
        <Image source={props.item.image} style={styles.image} />
        <Text style={styles.text} numberOfLines={2}>
          {props.item.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

  containerItem: {
    flexWrap: "wrap",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    marginRight: 16,
    padding: 16,
    flexDirection: "row",
    zIndex: -1,
  },
  text: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333333",
    lineHeight: 18,
    fontWeight: "500",
    width: 140,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    borderRadius: 2,
  },
});
export default HozizontalListPartner;

import React from 'react';
import { View, Text,StyleSheet,Image,FlatList } from 'react-native';

                                             
HozizontalListDiscount= (props) => {
  return (
    <View style={{width:'100%',marginTop:12}}>
      <FlatList  horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      keyExtractor={item=>item.key}
      renderItem={
          ({item})=>(
            <ItemDiscount item={item}/>
          )
      }
      />
    </View>
  );
};

ItemDiscount= (props) => {
  return (
    <View style={styles.containerItem}>
        <Image source={props.item.image} style={styles.image}/>
      <Text style={styles.text} numberOfLines={2}>{props.item.title}</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    containerItem:{
        marginRight:16,
        width:160,
        flexDirection:'column'
    },
    text:{
        marginTop:8,
        fontSize:14,
        color:'#333333',
        lineHeight:18,
        fontWeight:'500'
    },
    image:{
        width:160,
        height:80,
        resizeMode:'cover',
        borderRadius:7
    }
})
export default HozizontalListDiscount;
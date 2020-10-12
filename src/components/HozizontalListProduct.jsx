import React from 'react';
import { View, Text ,StyleSheet,FlatList,Image} from 'react-native';
                                             
const HozizontalListProduct= (props) => {
  return (
    <View style={{width:'100%',marginTop:12}}>
      <FlatList  horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.data}
      keyExtractor={item=>item.key}
      renderItem={
          ({item})=>(
            <ItemProduct item={item}/>
          )
      }
      />
    </View>
  );
};

const ItemProduct= (props) => {
  return (
    <View style={styles.containerItem}>
        <Image source={props.item.image} style={styles.image}/>
      <Text style={styles.text} numberOfLines={3}>{props.item.title}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  containerItem:{
      marginRight:16,
      width:180,
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
      width:180,
      height:160,
      resizeMode:'cover',
      borderRadius:7
  }
})
export default HozizontalListProduct;
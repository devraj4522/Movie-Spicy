import React from 'react';
import { FlatList, View, Image, TouchableOpacity, Text } from 'react-native';
import { getImageUrl } from '../../../api/url';
import { useRoute } from '@react-navigation/native';

const Item = ({ poster_path,title, navigation, id }) => {

  return (
    <TouchableOpacity onPress={
      () => {navigation.push("Single", { id: id })}}>
      <View style={{ flex: 0, margin: 4, borderRadius: 8, width: 120, height: 175}}>
        <Image source={{ uri: `${getImageUrl("w500", poster_path)}` }} style={{
          flex: 1,
          height: 175,
          width: 120,
          borderRadius: 12,
        }} />
      </View>
      <Text> {title}</Text>
    </TouchableOpacity>
  );
}


const SingleRecomendation = ({ navigation, data }) => {
  
  
  // Render Item in the FlatList
    const renderItem = ({ item }) => {
    return (
      <Item poster_path={item.poster_path} title={item.title} id={item.id} navigation={navigation}/>
    );
  }
  
  return (
    <View>
      <Text style={{fontSize: 23}}>Recommendations</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator ={false}
      />
    </View>
  );
}

export default SingleRecomendation
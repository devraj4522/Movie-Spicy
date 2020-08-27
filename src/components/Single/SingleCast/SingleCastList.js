import React from 'react';
import { FlatList, View, Image, TouchableOpacity, Text } from 'react-native';
import { getImageUrl } from '../../../api/url';
import Logo from '../../../assets/icons/open-menu.png';
import RC from '../Video/Video'

const Item = ({ poster_path,name, navigation, id }) => {

  // console.log(id)
  return (
    <TouchableOpacity onPress={
      () => { navigation.navigate("Cast", { id: id })}} >
      <View style={{ flex: 0, margin: 4, borderRadius: 8, width: 120, height: 175}}>
        <Image source={{ uri: `${getImageUrl("w500", poster_path)}` }} style={{
          flex: 1,
          height: 175,
          width: 120,
          borderRadius: 12,
        }} />
      </View>
      <Text> {name}</Text>
    </TouchableOpacity>
  );
}


const SingleCastList = ({ navigation, data }) => {

  const renderItem = ({ item }) => {
    
    return (
      <Item poster_path={item.profile_path} name={item.name} navigation={navigation} id={item.credit_id}/>
    );
  }

  return (
    <View style={{marginBottom: 15}}>
      <Text style={{fontSize: 23, marginBottom: 3}}>Cast</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.cast_id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator ={false}
      />
    </View>
  );
}

export default SingleCastList
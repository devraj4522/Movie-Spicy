import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image, FlatList } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  getImageUrl,
} from '../../../api/url';
import { requestHorizontalCard } from '../../../api/api';


const Item = ({ poster_path, navigation, id }) => {

  return (
    <TouchableOpacity onPress={
      () => {
        navigation.navigate("Single",{
          id: id
        });
      }} >
      <View style={styles.card}>
        <Image source={{uri: `${getImageUrl("w500", poster_path)}`}} style={{
          flex: 1,
          height: 175,
          width: 120,
          borderRadius: 12,
        }} />
      </View>
    </TouchableOpacity>
  );
}

// Props types refers Popular, Must Watch and Top Rated. 
// Title is The Title of type on the top of horzontal card. 
const HorizontalCard = ({ title, navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the url and set data in the state.
  useEffect(() => {
    // Decide the type of the card
    requestHorizontalCard(title, setData);
  }, []);
  

  const renderItem = ({ item }) => (
    <Item poster_path={item.poster_path} id ={item.id} navigation={navigation} />
  );
  
  if (isLoading) {
    return (
      <ActivityIndicator size="large" color="#00ff00" />
    );
  } else {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.container}>
          <View >
            <Text style={styles.text}>{title}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => {  }}>
              <Text style={styles.more}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default HorizontalCard;

import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Image, FlatList, TouchableOpacity } from 'react-native';
import {
  getImageUrl,
} from '../../api/url';
import { requestTrendingMovieList } from '../../api/api';


// const Item = ({ poster_path, navigation, id }) => {

//   return (
//     <TouchableOpacity onPress={
//       () => {
//         navigation.navigate("Single",{
//           id: id
//         });
//       }} >
//       <View style={{}}>
//         <Image source={{uri: `${getImageUrl("w500", poster_path)}`}} style={{
//           flex: 1,
//           height: 175,
//           width: 120,
//           borderRadius: 12,
//         }} />
//       </View>
//     </TouchableOpacity>
//   );
// }

// Props types refers Popular, Must Watch and Top Rated. 
// Title is The Title of type on the top of horzontal card. 
const Trending_Movie = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the url and set data in the state.
  // useEffect(() => {
  //   // Decide the type of the card
  //   let page = 1;
  //   requestTrendingMovieList(page, setData);
  // }, []);
  

  // const renderItem = ({ item }) => (
  //   <Item poster_path={item.poster_path} id ={item.id} navigation={navigation} />
  // );
  
  if (false) {
    return (
      <ActivityIndicator size="large" color="#00ff00" />
    );
  } else {
    return (
      <View style={{}}>
        <View style={{}}>
          <View >
            <Text ></Text>
          </View>
          {/* <View>
            <TouchableOpacity onPress={() => {  }}>
              <Text style={{}}>More</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        {/* <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
    );
  }
}

export default Trending_Movie;

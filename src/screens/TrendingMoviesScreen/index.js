import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import { requestTrendingMovieList } from '../../api/api';
import { getImageUrl } from '../../api/url';
// import YouTube from 'react-native-youtube';
// import { WebView } from 'react-native-webview';

const RenderItem = ({ item, navigation }) => {

  const id = item.id;
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Single", {
        id: id
      })
    }}
      style={{ margin: 8 }}>
      <View>
        <View style={{ height: 180, width: 125 }}>
          <Image source={{ uri: `${getImageUrl("w500", item.poster_path)}` }} style={{
            width: 125,
            height: 180,
            borderRadius: 8,
          }} />
        </View>
        <View>
        <Text style={{ fontSize: 17 }}>{item.title}</Text>
          <View>
            <Text style={{ fontSize: 14 }}>
              Releases On
        </Text>
            <View>
              <Text style={{ color: "#45CE30" }}>
                {item.release_date}
              </Text>
              <Text> popularity - {item.popularity}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const TrendingMoviesScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  var page = 1;

  // Fetch the url and set data in the state.
  useEffect(() => {
    // Decide the type of the card
    requestTrendingMovieList(page, setData);
  }, []);

  if (data) {
    return (
      <View style={styles.mainContainer} >
        <HomeHeader {...navigation} />
        <View>
          <View>
            <Text style={{ fontSize: 23 }}> Trending Movies</Text>

            {/* <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
        style={{ marginTop: 20 }}
      /> */}

          </View>
          <View>
            <FlatList
              data={data}
              renderItem={(item) => <RenderItem {...item} navigation={navigation} />}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={{ margin: 20, }}
              onEndReached={() => requestTrendingMovieList(page + 1, setData)}
            />
          </View>
        </View>
      </ View>
    );
  } else {
    return (
      <ActivityIndicator size="large" color="#00ff00" />
    );
  }
}

export default TrendingMoviesScreen;

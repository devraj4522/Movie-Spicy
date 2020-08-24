import React, { useState, useEffect } from 'react';
import { Body, Container, Content, Form, Item, Label, Input, View, List, ListItem, Left, Right, Icon } from 'native-base';
import { Image, Text, TextInput, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { requestSearchMovieList } from '../../api/api'
import MovieList from './MovieList';



const Search = (navigation) => {

  const [searchMovieData, setSearchMovieData] = useState([]);

  const requestMovie = async (text) =>{
    if (text!="") {
      const search = await requestSearchMovieList(text)
      if (search) {
        setSearchMovieData(search.results)

      }
    }
  };

  // Buffering Condition for the movie. in case of Searching.
  return (
    <View style={{
      flex: 1,
      // margin: 16,
      paddingTop: 12,
    }}>
      <View>
        <View style={{
          // flex: 1,
          flexDirection: "row",
          // margin: 12,
          marginTop: 30,
        }}>
          <FontAwesome onPress={() => { navigation.goBack() }}
            name="chevron-left"
            color="#2B2B52"
            size={30}
            style={{ fontWeight: "800", }}
          />
          <TextInput
            style={{
              marginHorizontal: 16,
              backgroundColor: "grey",
              borderRadius: 24,
              flexDirection: "row",
              padding:8,
              color:"#fff"
            }}
            placeholder={"Avengers: End Game"}
            onChangeText={(text) => requestMovie(text)}
            returnKeyType={"search"}
            autoCorrect={false}
          />
        </View>
        <View>
        <MovieList data={searchMovieData} navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

export default Search;
import React from 'react';
import { Text, View } from 'react-native';
import Search from '../../components/Search/Search'


const SearchScreen = ({navigation, route}) => {
  
  return (
      <Search {...navigation}/>
  );
}

export default SearchScreen;

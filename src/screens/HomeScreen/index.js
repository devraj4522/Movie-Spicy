import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import {} from 'native-base';
import styles from './styles';
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import HorizontalCard from '../../components/Home/HorizontalCard/HorizontalCard'
import { ScrollView } from 'react-native-gesture-handler';



const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer} >
        <HomeHeader {...navigation} />
        <HorizontalCard  title="Popular" navigation={navigation} />
        <HorizontalCard navigation={navigation} title="Top Rated" />
        <HorizontalCard navigation={navigation} title="Must Watch" />
        <HorizontalCard navigation={navigation} title="Holliwood" />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

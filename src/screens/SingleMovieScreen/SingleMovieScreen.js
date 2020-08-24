import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import SingleHeader from '../../components/Single/SingleHeader/SingleHeader';
import {
  requestSingleMovieHeader,
  requestCastCard,
  requestRecomendationCard,
  requestMovieAllImagesCard,
} from '../../api/api';
import styles from './styles';
import { Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import SingleBody from '../../components/Single/SingleBody/SingleBody';
import SingleCastList from '../../components/Single/SingleCast/SingleCastList';
import SingleRecomendation from '../../components/Single/SingleRecomendation/SingleRecomendation';
import SingleImagesListCard from '../../components/Single/SingleImagesListCard/SingleImagesListCard';
import ImageModal from '../../components/Modal/ImageModal/ImageModal';

const SingleMovieScreen = ({ navigation, route }) => {

  var id = route.params.id;

  // Set All the Api Json data in state.
  const [data, setData] = useState([]);
  const [castData, setCastData] = useState([]);
  const [recomendationData, setRecomendationData] = useState([]);
  const [movieImagesListData, setMovieImagesListData] = useState([]);


  // Initially app is loading until it loads data in state
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    requestSingleMovieHeader(id, setData);
    requestCastCard(id, setCastData);
    requestRecomendationCard(id, setRecomendationData);
    requestMovieAllImagesCard(id, setMovieImagesListData);
  }, [])
  
  if (data.overview) {
    var overview = data.overview.substring(0, 150) + "...";
  }

  return (
    <Container>
      <ScrollView>
          <SingleHeader data={data} navigation={navigation} />
        <View style={{ margin: 16 }}>
          <SingleBody data={data} overview={overview} />
          <SingleCastList data={castData} navigation={navigation} />
          <SingleRecomendation data={recomendationData} navigation={navigation} />
          <SingleImagesListCard data={movieImagesListData} navigation={navigation} />
        </View>
        <View style={{height: 400}}></View>
      </ScrollView>
    </Container>
  );
}

export default SingleMovieScreen;

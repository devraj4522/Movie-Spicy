import {useEffect, useState} from 'react';
import {getPopularUrl, getImageUrl, getSearchUrl, getMovieCastsListUrl, getRecomendationUrl, getSingleMovieImagesListUrl, getSingleMovieUrl, getSinglePersonUrl, getTrendingUrl, getYoutubeVideoIdUrl} from './url';
import { setUrlToHorizontalCard } from '../utils/Utils';


export const request = async (url) => {
  return fetch(url)
    // .then(handleErrors)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

const handleErrors = (response) => {
  if (!response.ok) throw Error(response.statusText);
  return response;
};

export const requestHorizontalCard = async (title, setData) => {
  
  let url = setUrlToHorizontalCard(title) // Decide the type of the card
  const cardList = await request(url);
  const cardListResults = cardList.results;
  if (cardListResults) {
    setData(cardListResults);
  }
};

export const requestCastCard = async (id, setData) => {
  const url = getMovieCastsListUrl(id);
  const data  = await request(url);
  const castList = data.cast;
  if (castList) {
    setData(castList);
  }     
};

export const requestSinglePerson = async (id, setData, setIsLoading) => {
  const url = getSinglePersonUrl(id);
  const data  = await request(url);
  if (data) {
    setData(data);
    setIsLoading(false);
  }     
};

export const requestRecomendationCard = async (id, setData) => {
  const url = getRecomendationUrl(id);
  const data  = await request(url);
  const recomendation = data.results;
  if (recomendation) {
    setData(recomendation);
  }
};

export const requestMovieAllImagesCard = async (id, setData) => {
  const url = getSingleMovieImagesListUrl(id);
  const data  = await request(url);
  const poster = data.backdrops;
  if (poster) {
    setData(poster);
  } 
};

export const requestSingleMovieHeader= async (id, setData) => {
  const url = getSingleMovieUrl(id);
  const data  = await request(url);
  if (data) {
    setData(data);
  }
  else{
    console.log("Not data")
  } 
};

export const requestSearchMovieList= async keyword => {
  return await request(getSearchUrl(keyword));
};

export const requestTrendingMovieList= async (page, setData) => {
  const data  = await request(getTrendingUrl(page));
  if (data) {
    setData(data.results);
  }
  else{
    console.log("Not data")
  } 
};

export const requestYouTubeVideoData= async (id, setData ) => {
  const data  = await request(getYoutubeVideoIdUrl(id));

  // Get Only first Video
  const results = data.results[0]
  if (results) {
    setData(results);
  }
  else{
    console.log("Not data")
  } 
};
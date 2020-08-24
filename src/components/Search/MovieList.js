import React, { useState, useEffect } from 'react';
import { Card, Body, Container, Content, Form, Label, Input, View, List, ListItem, Left, Right, Icon, CardItem } from 'native-base';
import { Image, Text, TextInput, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { getImageUrl } from '../../api/url';


const Item = ({ title, id, navigation, poster_path, overview, averageVote }) => {

  return (
    <Content>
      <TouchableOpacity
        onPress={
          () => {
            navigation.navigate("Single", {
              id: id
            });
          }}>
        <Card style={{ marginBottom: -12, }}>
          <CardItem>
            <Body>
              <Text style={{
                color: "#3C40C6",
                fontSize: 17
              }}>
                {title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}>
                <Image source={{ uri: `${getImageUrl("w500", poster_path)}` }} style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10,
                }} />
                <View style={{ margin: 5 }}>
                  <Text style={{ flex: 0.8, }}>{overview.slice(0, 50)}...</Text>
                  <Text style={{ color: "#019031", fontSize: 14, justifyContent: "space-around" }}>Average Vote{averageVote}</Text>
                </View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </Content>

  );
}

const RenderItem = ({ item, navigation }) => {

  return (
    <Item title={item.title} id={item.id} navigation={navigation} poster_path={item.poster_path} overview={item.overview} averageVote={item.vote_average} />
  );
};


const MovieList = ({ data, navigation }) => {

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default MovieList;
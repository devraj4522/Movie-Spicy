import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base'
import SingleRecomendation from '../Single/SingleRecomendation/SingleRecomendation';


// Render Buttons for flatList

const CastBody = ({ data, navigation }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Button style={{ marginLeft: 8, borderRadius: 6 }} bordered dark active><Text style={{ margin: 2 }}> {item.title} </Text></Button>
        </TouchableOpacity>
    )

    return (
        <View>
            <Text style={{ marginTop: 13, marginBottom:5,fontSize:23 }}>Popular Movies</Text>
            <View style={{ flexDirection: "row" }}>
                <FlatList
                    data={data.person.known_for}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <View>
                <View style={{ marginVertical: 16 }}>
                    <Text style={{ fontSize: 23,}}> OverViews</Text>
                    <Text style={{fontSize:17, color:"orange", fontWeight:"bold", margin:3}}>{data.job}</Text>
                    <Text style={{fontSize:16, marginVertical:7}}>{data.media.overview}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 23}} >Popularity</Text>
                    <Text style={{fontSize: 16, color:"green"}}>{data.person.popularity}</Text>
                </View>
            </View>
        </View>
    );
}

export default CastBody;
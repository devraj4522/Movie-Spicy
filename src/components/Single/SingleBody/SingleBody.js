import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base'
import YoutubePlayer from 'react-native-youtube-iframe';


const YoutubeVideoRender = ({data}) =>{

    if (data.site == "YouTube") {
        return(
            <View style={{marginTop: 15}}>
                <Text style={{fontSize: 20, color: "#FF0000"}}>{data.name}</Text>
                <View style={{ width: "100%", height: 200 }}>
                    <YoutubePlayer
                        height={300}
                        play={true}
                        videoId={data.key}
                    />
                </View>
            </View>
        );
    } else {
        return (
        <View></View>
        );
    }
}

const SingleBody = ({ overview, data, video }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Button style={{ marginLeft: 8, borderRadius: 6 }} bordered dark active><Text style={{ margin: 2 }}> {item.name} </Text></Button>
        </TouchableOpacity>
    )

    return (
        <View style={{ marginVertical: 16}}>
            <View style={{ flexDirection: "row" }}>
                <FlatList
                    data={data.genres}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <YoutubeVideoRender data={video} />
            <View style={{ marginTop: 15 }}>
                <View>
                    <Text style={{ fontSize: 23  }}>
                        OverViews
                    </Text>
                <Text style={{marginVertical: 2, color: "#282828", fontSize: 15}}>
                    {overview}
                </Text>
                </View>
            </View>
        </View>
    );
}

export default SingleBody;
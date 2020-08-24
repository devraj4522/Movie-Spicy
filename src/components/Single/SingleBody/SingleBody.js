import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base'


// Render Buttons for flatList

const SingleBody = ({ overview, data }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Button style={{ marginLeft: 8, borderRadius: 6 }} bordered dark active><Text style={{ margin: 2 }}> {item.name} </Text></Button>
        </TouchableOpacity>
    )

    return (
        <View style={{ margin: 16 }}>
            <View style={{ flexDirection: "row" }}>
                <FlatList
                    data={data.genres}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                />
            </View>
            <View>
                <View styles={{ marginTop: 50 }}>
                    <Text style={{ fontSize: 23 }}>
                        OverViews
                </Text>
                    <Text>
                        {overview}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default SingleBody;
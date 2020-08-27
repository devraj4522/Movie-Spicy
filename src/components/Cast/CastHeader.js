import React from 'react';
import { getImageUrl } from '../../api/url';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CastHeader = ({ navigation, data }) => {

    // Image for Background Image as a header
    let imageUrl = getImageUrl("w500", data.person.profile_path);
    let image = { uri: imageUrl };

    return (
        <View style={{
            // flex:1,
            height: 300
        }}>
            <ImageBackground source={image} style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                flexDirection: "column",
            }}>
                <LinearGradient
                    colors={["transparent", "#000000"]}
                    style={{ marginBottom: 0, height: "100%" }}
                >
                    <FontAwesome onPress={() => { navigation.goBack() }}
                        name="chevron-left"
                        color="#ffffff"
                        size={30}
                        style={{ fontWeight: "800", margin: 12, marginTop: 30 }}
                    />
                    <View style={{ margin: 16, marginTop: 170 }}>
                        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#ffffff" }}>{data.person.name}</Text>
                        <View style={{
                            width: 30,
                            height: 5,
                            backgroundColor: "orange",
                            margin: 8,
                            marginTop: 2,
                            marginBottom: 12,
                        }}></View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

export default CastHeader;
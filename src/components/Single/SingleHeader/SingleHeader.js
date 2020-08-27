import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import {
    getImageUrl,
} from '../../../api/url';
import { LinearGradient } from 'expo-linear-gradient';



const SingleHeader = ({ navigation, id, data }) => {

    // Image for Background Image as a header
    let imageUrl = getImageUrl("w500", data.poster_path);
    let image = { uri: imageUrl };

        return (
                    <View style={styles.innerContainer}>
                        <ImageBackground source={image} style={styles.headerImage}>
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
                                <View style={{ margin: 16, marginTop: 120 }}>
                                    <Text style={{ fontSize: 35, fontWeight: "bold", color: "#ffffff" }}>{data.title}</Text>
                                    <View style={styles.titleBar}></View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
        );
    }

export default SingleHeader;
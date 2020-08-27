import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    innerContainer: {
        height: 300,
    },
    headerImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        flexDirection: "column",
    },
    titleBar: {
        width: 30,
        height: 5,
        backgroundColor: "orange",
        margin: 8,
        marginTop: 2,
        marginBottom: 12,
    },    
});
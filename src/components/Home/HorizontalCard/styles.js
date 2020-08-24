import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    cardContainer:{
        // flex:1,
        // flexDirection: "row",
        // justifyContent: "space-between",
        // backgroundColor:"blue",
        marginBottom: 20,
    },
    card:{
        flex: 0,
        margin: 4, 
        // marginTop: 4,
        borderRadius: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
    },
    container:{ 
        flexDirection: "row", 
        justifyContent: "space-between" 
    },
    more:{
        fontSize: 15,
        fontWeight: '600',
        color: "orange",
    }


});
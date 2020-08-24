import React, {useState} from 'react';
import {  TouchableWithoutFeedback, TouchableHighlight, FlatList, View, Image, TouchableOpacity, Text, Modal, Alert, Dimensions } from 'react-native';
import { getImageUrl } from '../../../api/url';
import Logo from '../../../assets/icons/open-menu.png'
import ImageModal from '../../Modal/ImageModal/ImageModal';
import {Container} from 'native-base';

const Item = ({ poster_path }) => {

    const [modalVisible, setModalVisible] = useState(false)
  return (  

    <View >
      <Modal 
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={()=>setModalVisible(false)} style={{backgroundColor:"blue"}}>
        <View style={{flex:1,
        backgroundColor: "rgba(0,0,0,0.5)",
        }}>
        <Image source={{ uri: `${getImageUrl("w500", poster_path)}` }} style={{
            // flex: 1,
            width: "90%",
            height: "70%",
            borderRadius: 12,
            // margin: "30%",
            // marginLeft: "10%",
            justifyContent:"center",
            alignItems:"center",      
            // marginTop: "10%",
            backgroundColor: "rgba(0,0,0,0.5)",
            // opacity=0.5
          }} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      <TouchableOpacity onPress={
        () => {setModalVisible(true)}} >
        <View style={{ flex: 0, margin: 4, borderRadius: 8, height: 120, width: 175}}>
          <Image source={{ uri: `${getImageUrl("w500", poster_path)}` }} style={{
            flex: 1,
            width: 175,
            height: 120,
            borderRadius: 12,
          }} />
        </View>
      </TouchableOpacity>
      </View>
  );
}


const SingleImagesListCard = ({ navigation, data }) => {

    // Render Item in the FlatList
    const renderItem = ({ item }) => {
    return (
      <Item poster_path={item.file_path} />
    );
  }

  return (
    <View>
      <Text style={{fontSize: 23}}>Images</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.file_path}
        horizontal={true}
        showsHorizontalScrollIndicator ={false}
      />
    </View>
  );
}

export default SingleImagesListCard;
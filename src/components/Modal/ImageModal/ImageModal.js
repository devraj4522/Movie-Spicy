import React, { useState } from 'react';
import { Modal, View, Text,TouchableWithoutFeedback } from 'react-native';

const ImageModal = () =>{

    const [modalVisible, setModalVisible] = useState(false)
    
    return(
      <Modal 
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={()=>setModalVisible(false)} style={{backgroundColor:"red"}}>
        <View style={{backgroundColor:"red"}}>
            <Text>
                Modal Image
            </Text>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
}

export default ImageModal;
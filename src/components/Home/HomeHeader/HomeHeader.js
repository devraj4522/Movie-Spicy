import React from 'react';
import { Text, View, Button, TouchableWithoutFeedback,Image } from 'react-native';
import { Container } from 'native-base';
import styles from './styles';
import {FontAwesome} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';


const MenuIconView = (props)=>{

  return(
        <View>
          <TouchableWithoutFeedback onPress={() => props.toggleDrawer()}>
            <TouchableOpacity onPress={() => props.toggleDrawer()}>
                <FontAwesome name={"bars"} color="#F4C724" size={40} />
            </TouchableOpacity>
        </TouchableWithoutFeedback>
        </View>
        );
}

const SearchIconView = (props) =>{

  return(
    <TouchableOpacity onPress={() => props.navigate("Search")}>
      <FontAwesome name={"search"} color="#F4C724" size={20} />
    </TouchableOpacity>
  );
}

const Title = () =>{
  return(
    <View style={styles.title}>
      <Text style={styles.titleText}>
        Home 
      </Text>
      <View style={styles.titleBar}></View>
    </View>
    
  );
}

const HomeHeader = (props) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <MenuIconView {...props} style={styles.menu} />
        <SearchIconView {...props} style={styles.search} />
      </View>
      <Title />
    </View>
  );
}

export default HomeHeader;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen/index';
import TrendingMoviesScreen from '../screens/TrendingMoviesScreen/index';

const Drawer = createDrawerNavigator()

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator 
    drawerStyle={{backgroundColor:"#218F76", width:"50%"}}
    drawerType={"slide"}
    drawerContentOptions={{
      activeTintColor: "#ffffff",
      activeBackgroundColor: "transparent",
      inactiveTintColor: "#EAF0F1"
    }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="Trending" component={TrendingMoviesScreen} />
    </Drawer.Navigator>  
  );
}

export default HomeDrawerNavigator;

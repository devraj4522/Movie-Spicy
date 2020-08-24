import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TrendingMoviesScreen from './src/screens/TrendingMoviesScreen/index';
import HomeDrawerNavigator from './src/Drawer/HomeDrawerNavigator';
import SingleMovie from './src/screens/SingleMovieScreen/SingleMovieScreen'
import SearchScreen from './src/screens/SearchScreen/SearchScreen'
import CastScreen from './src/screens/CastScreen/CastScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerTitle: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      >
        <Stack.Screen name="Home" component={HomeDrawerNavigator} />
        <Stack.Screen name="Trending" component={TrendingMoviesScreen} />
        <Stack.Screen name="Single" component={SingleMovie} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cast" component={CastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

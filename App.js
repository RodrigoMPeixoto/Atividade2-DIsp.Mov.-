import React, { Component } from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import { NavigationContainer } from 'react-navigation-native';

import Login from './src/component/Login';
import Home from './src/component/Home';
 
const MainNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
      tabBarLabel: 'uma frase qualquer',
    }
  }
})

export default createAppContainer(MainNavigation);
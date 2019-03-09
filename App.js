import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Login from "./screens/login";
const AppNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({ 
      headerStyle: {
          height: 0,
          elevation:0,
      }  
    }),
  },
  // {
  //   initialRouteName: 'Login',
  // }
});

export default createAppContainer(AppNavigation);

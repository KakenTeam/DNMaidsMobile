import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Login from "./screens/login";
import Signup from "./screens/signup";
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
  Signup:{
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
      header: null //this will hide the header
    },
  }
  // {
  //   initialRouteName: 'Login',
  // }
});

export default createAppContainer(AppNavigation);

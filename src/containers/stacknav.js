import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from  'react-navigation-stack';

import MainScreen from "./MainScreen";
import DetailScreen from "./DetailScreen";


const stackNav = createStackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Text>asdS</Text>
                  </TouchableOpacity>
      ),
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    })     
  },
});

export default stackNav;

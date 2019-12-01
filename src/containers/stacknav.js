import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './screens/mainScreen';
import DetailScreen from './DetailScreen';
import sytles from '../style/stacknav';

const stackNav = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Main',

        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={sytles.mainPageIcon}>O</Text>
          </TouchableOpacity>
        ),
      }),
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Detail',
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: sytles.mainPage,
      headerTintColor: sytles.mainPage.color,
    },
  },
);

export default stackNav;

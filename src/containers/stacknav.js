import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './screens/mainScreen';
import DetailScreen from './screens/kuafor/detay';
import sytles from '../style/stacknav';

const stackNav = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Main',

        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name='home' style={{fontSize: 20, color: 'red'}}/>
          </TouchableOpacity>
        ),
      }),
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Detail',
        headerTransparent:true,
        headerStyle:{backgroundColor:'transparent'}
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

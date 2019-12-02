import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';

import SideBar from './menu';
import AnaSayfa from './screens/anasayfa';

const AppDrawerNavigator = createDrawerNavigator(
  {
    AnaSayfa,
    AnaSayfa,
    AnaSayfa,
    AnaSayfa,
  },
  {
    contentComponent: props => <SideBar {...props} />,
    contentOptions: {
      activeTintColor: '#e82a2a',
    },
  },
);

AppRegistry.registerComponent('efrahim', () =>
  createAppContainer(AppDrawerNavigator),
);

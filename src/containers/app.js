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
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Store from '../state/store';
import Preloaded from '../state/preloaded';
import 'react-native-gesture-handler';
const store = Store(Preloaded);
import SideBar from './menu';
import AnaSayfa from './screens/anasayfa';
import IslemKuafor from './screens/IslemKuafor';

const AppDrawerNavigator = createAppContainer(
  createDrawerNavigator(
    {
      AnaSayfa,
      IslemKuafor,
      AnaSayfa,
      AnaSayfa,
    },
    {
      contentComponent: props => <SideBar {...props} />,
      contentOptions: {
        activeTintColor: '#e82a2a',
      },
    },
  ),
);
const App = () => (
  <Provider store={store}>
    <AppDrawerNavigator />
  </Provider>
);
AppRegistry.registerComponent('efrahim', () => App);

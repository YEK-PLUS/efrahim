import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SideMenu from './menu'
import stackNav from './stacknav';

const drawernav = createDrawerNavigator({
  Item1: {
      screen: stackNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

AppRegistry.registerComponent('efrahim', () => createAppContainer(drawernav));

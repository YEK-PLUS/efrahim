import React from 'react';
import { StackActions } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SideBar from './sideBar';
import * as Screens from '../screens';

const Stack = createStackNavigator(
{
  AnaSayfa: {
    screen: Screens.AnaSayfa,
  },
  HizmetSec: {
    screen: Screens.HizmetSec,
  },
  KuaforDetay: {
    screen: Screens.KuaforDetay,
  },
  Iletisim: {
    screen: Screens.Iletisim,
  },
  Giris: {
    screen: Screens.Giris,
  },
  SaatSec: {
    screen: Screens.SaatSec,
  },
  Tesekkurler: {
    screen: Screens.Tesekkurler,
  },
  Randevularim: {
    screen: Screens.Randevularim,
  },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
)
export default createAppContainer(
  createDrawerNavigator(
	{
		Stack
	},
    {
		contentComponent: props => <SideBar {...props} />,
		contentOptions: {
			activeTintColor: '#e82a2a',
      	},
    },
  ),
);
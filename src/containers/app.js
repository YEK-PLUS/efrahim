import React from 'react';
import {AppRegistry} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import Store from '../state/store';
import Preloaded from '../state/preloaded';
import 'react-native-gesture-handler';
const store = Store(Preloaded);
import SideBar from './menu';
import AnaSayfa from './screens/anasayfa';
import IslemKuafor from './screens/IslemKuafor';
import Detay from './screens/detay';
import getMeet from './screens/getMeet';
import form from './screens/form';
import thanks from './screens/thanks';

const AppDrawerNavigator = createAppContainer(
  createDrawerNavigator(
    {
      AnaSayfa,
      IslemKuafor,
      Detay,
      getMeet,
      form,
      thanks
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

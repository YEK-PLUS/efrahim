import React from 'react';
import {AppRegistry} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
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
  createStackNavigator(
    {
      AnaSayfa:{
        screen:AnaSayfa,
        navigationOptions: () => ({
          title: 'Ana Sayfa',
          headerBackTitle: null,
        }),
      },
      IslemKuafor:{
        screen:IslemKuafor,
        navigationOptions: () => ({
          title: 'Ana Sayfa',
          headerBackTitle: null,
        }),
      },
      Detay:{
        screen:Detay,
        navigationOptions: () => ({
          title: 'Ana Sayfa',
          headerBackTitle: null,
        }),
      },
      getMeet:{
        screen:getMeet,
        navigationOptions: () => ({
          title: 'Ana Sayfa',
          headerBackTitle: null,
        }),
      },
      form:{
        screen:form,
        navigationOptions: () => ({
          title: 'Ana Sayfa',
          headerBackTitle: null,
        }),
      },
      thanks:{
        screen:thanks,
        navigationOptions: () => ({
          title: 'Ana Sayfa',
          headerBackTitle: null,
        }),
      },
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

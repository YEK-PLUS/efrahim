import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {APP_SLUG} from '../settings'
import Drawer from './drawer'
import Store from '../redux'
const store = Store()
const App = () => (
	<Provider store={store}>
		<Drawer />
	</Provider>
)
AppRegistry.registerComponent(APP_SLUG, () => App);
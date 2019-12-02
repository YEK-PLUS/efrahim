/* @flow */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Linking,
  Image,
  Share,
} from 'react-native';
import {Icon, Button, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR_MENU, COLOR_MENUIKI, IMAGE_MENU} from '../../style/main';
import MenuItem from '../../components/menuItem';
export default class Menu extends Component {
  render() {
    return (
      <LinearGradient
        style={{flex: 1}}
        start={{x: 2, y: 2}}
        end={{x: 2, y: 0.2}}
        colors={[COLOR_MENU, COLOR_MENUIKI]}>
        <SafeAreaView style={styles.sarf}>
          <View style={styles.container}>
            <Image source={{uri: IMAGE_MENU}} style={styles.resim} />
          </View>
          <ScrollView>
            <MenuItem
              text="ANA SAYFA"
              icon="home"
              press={() => this.props.navigation.navigate('AnaSayfa')}
            />
            <MenuItem
              text="İLETİŞİM"
              icon="paper-plane"
              press={() => this.props.navigation.navigate('Iletisim')}
            />
            <MenuItem
              text="HAKKINDA"
              icon="information-circle-outline"
              press={() => this.props.navigation.navigate('Hakkinda')}
            />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  sarf: {
    flex: 1,
    top: 60,
  },
  container: {
    alignItems: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resim: {
    height: 200,
    width: 200,
    borderRadius: 100,
    bottom: 50,
  },
});

/* @flow */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR_MENU, COLOR_MENUIKI, IMAGE_MENU} from '../../style/main';
import MenuItem from '../../components/menuItem';
export default class Menu extends Component {
  render() {
    return (
      <LinearGradient
        style={styles.linear}
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
  linear: {
    flex: 1,
  },
  sarf: {
    flex: 1,
    top: 60,
  },
  container: {
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

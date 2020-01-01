import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, ScrollView, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import API from '../api';
import styles,{MENU_COLOR,MENU_COLOR_2,APP_LOGO} from '../styles/sidemenu';
import MenuItem from '../components/menuItem';
export default class Menu extends Component {
  async componentDidMount() {
    const email = await AsyncStorage.getItem('@email');
    const password = await AsyncStorage.getItem('@password')
    if(email&&password){
      const body = {user_email:email,user_password:password}
      const log = await API('login',body)
      if(log && log.user_id){
        this.setState({logined:true})
        console.log(log,'true')
      }
      else{
        this.setState({logined:false})
        console.log(log,'basarisiz')
      }
    }
  }
  state={
    logined:false
  }
  render() {
    return (
      <LinearGradient
        style={styles.linear}
        start={{x: 2, y: 2}}
        end={{x: 2, y: 0.2}}
        colors={[MENU_COLOR,MENU_COLOR_2]}>
        <SafeAreaView style={styles.sarf}>
          <View style={styles.container}>
            <Image source={{uri: APP_LOGO}} style={styles.resim} />
          </View>
          <ScrollView>
            {!this.state.logined?
              <MenuItem
                text="Giris"
                icon="paper-plane"
                press={() => this.props.navigation.navigate('Giris')}
              />:
              <MenuItem
                text="Randevularim"
                icon="paper-plane"
                press={() => this.props.navigation.navigate('Randevularim')}
              />
            }
            
            <MenuItem
              text="ANA SAYFA"
              icon="home"
              press={() => this.props.navigation.navigate('AnaSayfa')}
            />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
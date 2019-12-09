import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
} from 'native-base';
import {View, StyleSheet, Linking,Text,Image} from 'react-native';
import {COLOR_HEADER, COLOR_TITLE, TITLE, COLOR_MAIN} from '../../style/main';
import Hizmetler from '../../components/hizmetler';
export default class TabsExample extends React.Component {
  KuaforYukle() {
    let a = [];
    for (var i = 9; i >= 1; i--) {
      a.push(
        <Hizmetler
          navigation={this.props.navigation}
          name="Sac Kesimi"
          image="https://i.hizliresim.com/lQgRmQ.png"
        />,
      );
    }
    return a;
  }
  render() {
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={COLOR_HEADER}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="ios-menu" style={styles.menu} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{TITLE}</Title>
          </Body>
          <Right/>
        </Header>
        <Body>
          <View style={styles.container}>
            <View style={styles.ornekReklam}>
              <View style={styles.ornekReklamContainer}>
                <Image style={styles.reklamImage} source={{uri:'https://ae01.alicdn.com/kf/Hb56350fe56f64b1baec8c231345269faG.png'}}/>
              </View>
            </View>
            <View style={styles.containerSub}>{this.KuaforYukle()}</View>
          </View>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  reklamImage:{
     height:'100%',
    width:'100%'
  },
  ornekReklamContainer:{
    height:'100%',
    width:'100%'
  },
  ornekReklam:{
    height:90,
    marginVertical:20,
    paddingHorizontal:20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  containerSub: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  main: {
    backgroundColor: COLOR_MAIN,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: COLOR_HEADER,
  },
  menu: {
    color: COLOR_TITLE,
    fontSize: 35,
  },
  title: {
    color: COLOR_TITLE,
    left: 10,
    fontFamily: 'BadScript-Regular',
  },
  icon2: {
    color: '#fff',
    fontSize: 40,
  },
  tablar: {
    backgroundColor: COLOR_HEADER,
  },
  tabtext: {
    color: 'white',
  },
  tab: {
    backgroundColor: COLOR_HEADER,
  },
});

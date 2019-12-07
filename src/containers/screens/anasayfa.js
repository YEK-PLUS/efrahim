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
import {View, StyleSheet, Linking} from 'react-native';
import {COLOR_HEADER, COLOR_TITLE, TITLE, COLOR_MAIN} from '../../style/main';
import Hizmetler from '../../components/hizmetler';
export default class TabsExample extends React.Component {
  KuaforYukle() {
    let a = [];
    for (var i = 9; i >= 1; i--) {
      a.push(
        <Hizmetler
          navigation={this.props.navigation}
          name="Sac Kesim"
          image="https://image.flaticon.com/icons/png/512/82/82742.png"
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
        </Header>
        <Body>
          <View style={styles.container}>
            <View style={styles.containerSub}>{this.KuaforYukle()}</View>
          </View>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLOR_MAIN,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: COLOR_HEADER,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
  },
  containerSub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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

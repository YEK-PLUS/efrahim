import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Drawer,
} from 'native-base';
import {
  View,
  ScrollView,
  StyleSheet,
  Linking,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {COLOR_HEADER, COLOR_TITLE, TITLE, COLOR_MAIN} from '../../style/main';
import Hizmetler from '../../components/kuaforFoto';
export default class TabsExample extends Component {
  KuaforYukle() {
    let a = [];
    for (var i = 9; i >= 1; i--) {
      a.push(
        <Hizmetler
          navigation={this.props.navigation}
          name="J.FLA"
          image="https://66.media.tumblr.com/a330d98ba819cf3fb204fcf9e2b3c204/tumblr_p1q9o0xN2o1wih5cfo3_250.png"
        />,
      );
    }
    return a;
  }
  render() {
    const {name} = this.props.navigation.state.params;
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={COLOR_HEADER}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{name}</Title>
          </Body>
          <Right></Right>
        </Header>
        <Body>
        <ScrollView>
            <View style={styles.containerSub}>{this.KuaforYukle()}</View>
          </ScrollView>
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
  containerSub: {
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  menu: {
    color: COLOR_TITLE,
    fontSize: 35,
  },
  title: {
    color: COLOR_TITLE,
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

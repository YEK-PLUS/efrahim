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
import {View, ScrollView, StyleSheet} from 'react-native';
import {COLOR_HEADER, COLOR_TITLE, COLOR_MAIN} from '../../style/main';
import KuaforFoto from '../../components/kuaforFoto';
export default class TabsExample extends React.Component {
  KuaforYukle() {
    let a = [];
    const {name} = this.props.navigation.state.params;
    for (var i = 9; i >= 1; i--) {
      a.push(
        <KuaforFoto
          navigation={this.props.navigation}
          name="Efrahim"
          islem={name}
          sube="Izmir"
          image="https://i.hizliresim.com/NLQ29N.jpg"
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
          <Right />
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
    width: '100%',
    flex: 1,
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

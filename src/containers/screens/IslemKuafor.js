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
import API from '../../api';
import KuaforFoto from '../../components/kuaforFoto';
export default class TabsExample extends React.Component {
  KuaforYukle() {
    if(this.state && this.state.data){
      const {name} = this.props.navigation.state.params;
      let a = [];
      for (let b in this.state.data){
        a.push(
          <KuaforFoto
            navigation={this.props.navigation}
            name={this.state.data[b].bus_title}
            islem={name}
            data={this.state.data[b]}
            sube={this.state.data[b].bus_google_street}
            image={'http://kuaforefrahim.com/panel/uploads/business/'+this.state.data[b].bus_logo}
          />,
        );
      }
      return a;
    }
    else{
      let a = [];

      return a;

    }
    
  }
  async componentDidMount() {
    const data = await API('get_business');
    this.setState({ data });
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

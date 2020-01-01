import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_BUSS_IMG_PATH} from '../settings';
import styles,{HEADER_COLOR} from '../styles/Randevularim';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Tab,
  TabHeading,
  Tabs,
  List,
  Footer,
} from 'native-base';
import {ListItem} from 'native-base';
import KuaforFoto from '../components/kuaforFoto'
import API from '../api';
class Iletisim extends React.Component {
  async componentDidMount() {
    const user_id = await AsyncStorage.getItem('@id');
    const data = await API('my_appointments',{user_id})
    console.log(data)
    this.setState({data})
  }
  state={
    randevular:[]
  }
  rendevular(){
    if(this.state && this.state.data){
      let a = [];
      for (let b in this.state.data){
        const data = this.state.data[b];
        a.push( 
          <ListItem key={ `randevu-${b}` } style={styles.randevu}>
            <View style={styles.business}>
              <Text style={styles.listItemText}>{data.bus_title}</Text>
              <Text style={styles.listItemText}>{data.doct_name}</Text>
            </View>
            <View style={styles.business}>
              <Text style={styles.listItemText}>{data.appointment_date}</Text>
              <Text style={styles.listItemText}>{data.start_time}</Text>
            </View>
          </ListItem>
        )
      }
      return a;
    }
    else{
      return (<Text>asd</Text>)
    }
  }
  render() {
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={HEADER_COLOR}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Randevularim</Title>
          </Body>
          <Right />
        </Header>
        <Body style={styles.content}>
          <View style={styles.content}>
            <ScrollView>
              <List>
                {this.rendevular()}
              </List>
            </ScrollView>
          </View>
        </Body>
      </Container>
    );
  }
}
export default (Iletisim)
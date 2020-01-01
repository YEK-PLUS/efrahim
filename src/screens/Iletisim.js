import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Text,View,ScrollView,TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_BUSS_IMG_PATH} from '../settings';
import styles,{HEADER_COLOR} from '../styles/iletisim';
import API from '../api';
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
import KuaforFoto from '../components/kuaforFoto'
class Iletisim extends React.Component {
  constructor(props){
    super(props)
    this.saveInputs = this.saveInputs.bind(this)
    this.sendValueToAPI = this.sendValueToAPI.bind(this)
    this.state = {
      email:'',
      name:'',
      phone:'',
    }
  }
  form(text,name) {
    return (
      <View key={name} style={styles.formInputOutter}>
        <Text style={styles.formText}>{text}</Text>
        <TextInput 
        onChangeText={(e) => {this.saveInputs(e,name)}} 
        name={name} 
        style={styles.formTextGray} 
        placeholder={text}>
        {this.state[name]}
        </TextInput>
      </View>
    );
  }
  saveInputs(e,name){
    let a = {};
    a[name] = e
    this.setState({a});
  }
  sendValueToAPI(){
    const {doct_id,data,hour,image,price} = this.props.navigation.state.params;
    const {bus_id} = data;
    const {start_time,time_token} = hour;
    const {user_id,user_fullname,user_email,user_phone }= this.state
    const appointment_date = new Date().toISOString().substr(0,10);
    const body = {
      doct_id,
      bus_id,
      user_id,
      appointment_date,
      start_time,
      time_token,
      user_fullname,
      user_email,
      user_phone
    }
    console.log(body)
    API('add_appointment',body).then(e=>{
      console.log(e)
      body.image = image;
      body.price = price;
      this.props.navigation.navigate('Tesekkurler',body)
    })
  }
  async componentDidMount() {
    const user_id = await AsyncStorage.getItem('@id');
    const user_fullname = await AsyncStorage.getItem('@name');
    const user_email = await AsyncStorage.getItem('@email');
    const user_phone = await AsyncStorage.getItem('@phone');
    this.setState({user_id})
    this.setState({user_fullname})
    this.setState({user_email})
    this.setState({user_phone})
  }
  render() {
    const {name, image} = this.props.navigation.state.params;
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={HEADER_COLOR}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Iletisim bilgisi ekle</Title>
          </Body>
          <Right />
        </Header>
        <Body style={styles.content}>
          <View style={styles.content}>
            {this.form('Adiniz','user_fullname')}
            {this.form('Telefon Numarasi','user_phone')}
            {this.form('E-Posta Adresi','user_email')}
            <Button
              style={styles.sendButton}
              onPress={this.sendValueToAPI}>
              <Text style={styles.buttonText}>Randevu Al</Text>
            </Button>
          </View>
        </Body>
      </Container>
    );
  }
}
export default (Iletisim)
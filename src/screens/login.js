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
import Reklam from '../components/reklam'
import Hizmetler from '../components/hizmetler'
class AnaSayfa extends React.Component {
  constructor(props){
    super(props)
    this.saveInputs = this.saveInputs.bind(this)
    this.sendValueToAPI = this.sendValueToAPI.bind(this)
    this.state = {
      msg:'',
      email:'',
      password:'',
    }
  }
  form(text,name) {
    return (
      <View key={name} style={styles.formInputOutter}>
        <Text style={styles.formText}>{text}</Text>
        <TextInput 
          onChangeText={(e) => {this.saveInputs(e,name)}} 
          name={name} style={styles.formTextGray} 
          placeholder={text}>
          {this.state[name]}
        </TextInput>
      </View>
    );
  }
  saveInputs(e,name){
    let a = {};
    a[name] = e
    this.setState(a);
  }
  sendValueToAPI(){
    const {email,password} = this.state;
    const body = {user_email:email,user_password:password}
    API('login',body).then(e=>{
      if(e && e.user_id){
        AsyncStorage.setItem('@email',e.user_email)
        AsyncStorage.setItem('@id',e.user_id)
        AsyncStorage.setItem('@password',password)
        AsyncStorage.setItem('@phone',e.user_phone)
        AsyncStorage.setItem('@name',e.user_fullname)
        this.props.navigation.navigate('AnaSayfa')
        console.log(e,'basarili')
        
      }
      else{
        this.setState({msg:'Yanlis sifre veya e posta'})
      }
    })
  }
  async componentDidMount() {
    const email = await AsyncStorage.getItem('@email');
    const password = await AsyncStorage.getItem('@password')
    if(email&&password){
      const body = {user_email:email,user_password:password}
      const log = await API('login',body)
      if(log && log.user_id){
        this.setState({msg:''})
        this.props.navigation.navigate('AnaSayfa')
        console.log(log,'basarili')
      }
      else{
        this.setState({msg:'Yanlis sifre veya e posta'})
        console.log(log,'basarisiz')
      }
      
    }
    this.setState({email})
    this.setState({password})
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
            <Title style={styles.title}>Giris Yap</Title>
          </Body>
          <Right />
        </Header>
        <Body style={styles.content}>
          <View style={styles.content}>
            <Text style={styles.bigText}>
            {this.state.msg}
            </Text>
            {this.form('E-Posta','email')}
            {this.form('Sifre','password')}
            <Button
              style={styles.sendButton}
              onPress={this.sendValueToAPI}>
              <Text style={styles.buttonText}>Giris</Text>
            </Button>
          </View>
        </Body>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  kuaforPopup:state.popup.kuaforPopup
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(popupAction, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(AnaSayfa)
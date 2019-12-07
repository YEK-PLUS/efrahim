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
  Tab,
  TabHeading,
  Tabs,
  List,
  Footer
} from 'native-base';
import {View, ScrollView, StyleSheet,Text} from 'react-native';
import {COLOR_HEADER, COLOR_TITLE, COLOR_MAIN} from '../../style/main';
import KuaforFoto from '../../components/kuaforFoto';
import HizmetItem from '../../components/hizmetItem';
export default class TabsExample extends React.Component {
  form(text){
    return (
      <View style={styles.formInputOutter}>
        <Text style={styles.formText}>{text}</Text>
        <Text style={styles.formTextGray}>{text}</Text>
      </View>
    );
  }
  render() {
    const {name,image} = this.props.navigation.state.params;
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={COLOR_HEADER}>
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
            {this.form('Adiniz')}
            {this.form('Telefon Numarasi')}
            {this.form('E-Posta Adresi')}
            <Button  style={styles.sendButton} onPress={() => this.props.navigation.navigate('thanks',{name,image})}>
              <Text style={styles.buttonText}>
                Randevu Al
              </Text>
            </Button>
          </View>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonText:{
    color:'#fff',
    textAlign:'center',
    width:'100%'
  },
  sendButton:{
    backgroundColor:COLOR_HEADER,
    color:'#fff',
    marginVertical:30,
    textAlign:'center'
  },
  content:{
    paddingHorizontal:15,
    paddingVertical:20,
    width:'100%',
  },
  formText:{
    paddingVertical:7
  },
  formTextGray:{
    paddingVertical:5,
    width:'100%',
    color:'gray',
    borderBottomColor:'black',
    borderBottomWidth:5
  },
  formInputOutter:{
    paddingVertical:10,
    display:'flex',
    flexDirection:'column',
    width:'100%',
  },
  main: {
    flex: 1,
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
    fontFamily: 'BadScript-Regular',
  },
});

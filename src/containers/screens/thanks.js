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
import {View, ScrollView, StyleSheet,Text,Image} from 'react-native';
import {COLOR_HEADER, COLOR_TITLE, COLOR_MAIN} from '../../style/main';
export default class TabsExample extends React.Component {
  render() {
    const {name,image} = this.props.navigation.state.params;
    return (
      <Container style={styles.main}>
        <Body style={styles.body}>
          <Text style={styles.boldTitle}>
            Randevu Aldiginiz Icin
          </Text>
          <Text style={styles.boldTitle}>
            Tesekkurler
          </Text>
          <View style={styles.berberContainer}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.tariha}>
              <Text style={styles.boldTitle}>{name}</Text>
              <View style={styles.tarih}>
                <Text>Tarih</Text>
                <Text style={styles.tarihText}>20 Ocak 2020</Text>
              </View>
            </View>
          </View>
          <Text style={styles.saat}>
            Saat : 14:00
          </Text>
          <View style={styles.tutar}>
            <Text style={styles.tutarText}>
              Tutar
            </Text>
            <Text style={{...styles.tutarText,...{textAlign:'right',color:'red',fontWeight:'bold',fontSize:25}}}>
              30.00 TL
            </Text>
          </View>
          <Button  style={{...styles.sendButton,...{marginVertical:0,marginTop:30}}} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonText}>
                Ana Sayfaya Don
              </Text>
            </Button>
            <Button  style={{...styles.sendButton,...{marginVertical:0,marginTop:10}}} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonText}>
                Randevularim
              </Text>
            </Button>
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
  tutar:{
    marginVertical:10,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  tutarText:{
    fontSize:20,
    width:'50%',
  },
  tarihText:{
    paddingHorizontal:40
  },
  tarih:{
    display:'flex',
    flexDirection:'row',
  },
  tariha:{
    paddingHorizontal:20
  },
  berberContainer:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    flexWrap:'wrap',
    height:100,
    marginVertical:30,
    alignItems:'center'
  },
  image:{
    height:100,
    width:100,
    borderRadius:100,
  },
  boldTitle:{
    fontSize:25,
    fontWeight:'bold',
    width:'100%',
    textAlign:'left'
  },
  saat:{
    fontSize:17,
    width:'100%',
    textAlign:'left'
  },
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
  main: {
    flex: 1,
    backgroundColor: COLOR_MAIN,
    display: 'flex',
    flexDirection: 'column',
  },
  body:{
    width:'100%',
    paddingVertical:50,
    paddingHorizontal:30,
  }
});

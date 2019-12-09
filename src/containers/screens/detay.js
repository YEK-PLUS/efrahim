import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Linking,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Container, Header, Content, TabHeading,Tab, Tabs, Left, Body,Footer, Right, Title,Icon, Button, Drawer,List, ListItem,Badge } from 'native-base';
import {COLOR_HEADER, COLOR_TITLE, COLOR_MAIN} from '../../style/main';
import Star from '../../components/star';
import HizmetItem from '../../components/hizmetItem';
const Detay = props => {
  const {name,islem,image} = props.navigation.state.params;
  return (
    <Container>
        <View style={styles.head}>
          <Left style={styles.button}>
            <Button style={styles.buttonIcon} transparent onPress={() => props.navigation.navigate('IslemKuafor',{name:islem,islem:name})}>
              <Icon style={styles.buttonIcon} name="arrow-back" />
            </Button>  
          </Left>
          <Body>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{
                  uri:
                    'https://i.hizliresim.com/NLQ29N.jpg',
                }}
              />
              <View style={styles.titleArea}>
                <View style={styles.titleBerber}>
                  <Text style={styles.titleBerberTitle}>{name}</Text>
                  <Star/>
                </View>
                <View>
                  <TouchableOpacity>
                    <Icon style={styles.info} name="ios-information-circle-outline" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Body>
         
        </View>
        <Tabs style={styles.tab} tabBarUnderlineStyle ={{backgroundColor:COLOR_TITLE}} >
          <Tab
            tabStyle={styles.tablar} 
            activeTextStyle={styles.tabtext}
            activeTabStyle={styles.tablar} 
            textStyle={styles.tabtext} 
            scrollWithoutAnimation={false}  
            tabBarUnderlineStyle ={{backgroundColor: 'red'}} 
            heading={
              <TabHeading  style={styles.tablar}> 
                <Icon  style={styles.tabtext} name="md-hand"/>
                <Text style={styles.tabtext} >Hizmetler</Text> 
              </TabHeading>
            }>
             <List>
              <HizmetItem/>
              <HizmetItem/>
              <HizmetItem/>
              <HizmetItem/>
            </List>
          </Tab>
          <Tab
            tabStyle={styles.tablar} 
            activeTextStyle={styles.tabtext}
            activeTabStyle={styles.tablar} 
            textStyle={styles.tabtext} 
            scrollWithoutAnimation={false}  
            tabBarUnderlineStyle ={{backgroundColor: 'red'}} 
            heading={
              <TabHeading  style={styles.tablar}> 
                <Icon  style={styles.tabtext} name="ios-chatboxes"/>
                <Text style={styles.tabtext} >Degerlendirmeler</Text> 
              </TabHeading>
            }>
            <Text>test</Text>
          </Tab>
        </Tabs>
        <Footer style={styles.footer}>
          <View style={styles.footerTextArea}>
            <Text style={styles.footerTextMin}>
              Tahmini Zaman : 00:00
            </Text>
            <Text style={styles.footerTextMax}>
              Tutar : 40.0 TL
            </Text>
          </View>
          <Button onPress={() => props.navigation.navigate('getMeet',{name,image})} style={styles.footerButton}>
            <Text style={styles.footerTextMin}>
               Devam Et
            </Text>
           
          </Button>
        </Footer>
      </Container>
  );
};

const styles = StyleSheet.create({
  footerButton:{
    backgroundColor:'transparent',
    borderRadius:5,
    paddingHorizontal:10,
    borderWidth: 1,
    borderColor: '#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  footerTextMin:{
    color:'white',
  },
  footerTextMax:{
    color:'white',
    fontWeight:'bold',
  },
  footerTextArea:{
    display:'flex',
    flexDirection:'column',
  },
  footer:{
    backgroundColor:COLOR_HEADER,
    display:'flex',
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
    justifyContent:'space-between'
  },
  listItemLeft:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row'
  },
  listItem:{
    display:'flex',
    justifyContent:'space-between',
  },
  button:{
    width:'auto',
    position:'absolute',
    zIndex:999,
    top:10,
    left:10,
    color:'white'
  },
  info: {
    color: 'white',
  },
  buttonIcon:{
    color:'white'
  },
  starArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleArea: {
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBerber: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'red'
  },
  titleBerberTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'flex-end',
    height: 230,
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red',
    height: Dimensions.get('window').height - 300,
  },
  titleArea: {
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBerber: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  titleBerberTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    backgroundColor: 'transparent',
  },
  head: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center'
  },
  title: {
    color: COLOR_TITLE,
    left: 60,
    fontFamily: 'BadScript-Regular'
  },
  icon2: {
    color:'#fff',
    fontSize: 40
  },
  tablar: {
    backgroundColor: '#fff',
  },
  tabtext: {
    color:'black',
    marginHorizontal:10
  },
  tab:{
    backgroundColor: COLOR_HEADER,
  }
});

export default Detay;

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
            <Title style={styles.title}>Randevu</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          
          <View style={styles.containerSub}>

            <View style={styles.berberad}>
              
              <View style={styles.berbersag}>
                  <View style={styles.berberadup}>
                    <Text style={{fontSize: 25}}>{name}</Text>
                  </View>
                  <View style={styles.berberaddown}>
                    <Text style={{fontSize: 15}}> Tahmini Zaman: 1 saat 20 dk</Text>
                  </View>
              </View>
              <View style={styles.berbersol}>
                <Icon style={{fontSize: 50}} name='ios-information-circle'/>
              </View>
            </View>
            <View style={{...styles.berberad,...{paddingVertical:0,paddingBottom:5}}}>
              <Text style={{fontSize: 25}}>Tutar</Text>
              <Text style={{fontSize: 25,color:'red'}}>20.00 TL</Text>
            </View>
            <View style={{...styles.berberad,...{paddingVertical:15}}}>
              <View style={styles.berbercontent}>
                <Icon style={{fontSize: 40}} name='ios-calendar'/>
                <Text style={{fontSize: 25,paddingHorizontal:10}}>01 Ocak 2020</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabs}>
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
                    <Text style={styles.tabtext}>Sabah</Text> 
                  </TabHeading>
                }>
                 <List>
                  <HizmetItem noPrize={true} icon='md-alarm' text='10:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='11:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='12:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='13:00'/>
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
                    <Text style={styles.tabtext} >Ogle</Text> 
                  </TabHeading>
                }>
                 <List>
                  <HizmetItem noPrize={true} icon='md-alarm' text='10:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='11:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='12:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='13:00'/>
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
                    <Text style={styles.tabtext} >Aksam</Text> 
                  </TabHeading>
                }>
                 <List>
                  <HizmetItem noPrize={true} icon='md-alarm' text='10:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='11:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='12:00'/>
                  <HizmetItem noPrize={true} icon='md-alarm' text='13:00'/>
                </List>
              </Tab>
            </Tabs>
          </View>
        </Body>
        <Footer style={styles.footer}>
          <Button style={styles.footerButton}>
            <Text style={styles.footerButton}> Hizli Randevu</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  footerButton:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    backgroundColor:COLOR_HEADER,
    color:'white',
    textAlign:'center'
  },
  footer:{
    backgroundColor:COLOR_MAIN,
    paddingHorizontal:10,
    height:70,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
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
  },
  berbercontent:{
    backgroundColor:'#fff',
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
  },
  berberad:{
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },

  berbersag:{
    display:'flex',
    flexDirection:'column',
    
  },
  berbersol:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
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
  containerSub: {
    width: '100%',
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
    fontFamily: 'BadScript-Regular',
  },
  icon2: {
    color: '#fff',
    fontSize: 40,
  },
});

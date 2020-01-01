import React from 'react';
import {Text,View,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_CAT_IMG_PATH} from '../settings';
import styles,{HEADER_COLOR,TITLE_COLOR} from '../styles/saatSec';
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
  Tab,
  TabHeading,
  Tabs,
  List,
  Content,
  Footer,
} from 'native-base';
import HizmetItem from '../components/hizmetItem'
import KuaforPopUp from '../components/kuaforpopup';
import Hizmetler from '../components/hizmetler'
class AnaSayfa extends React.Component {
  constructor(props){
    super(props)
    this.saatClick = this.saatClick.bind(this)
  }
  async componentDidMount() {
    const {bus_id} = this.props.navigation.state.params.data;
    const {doct_id} = (await API('get_doctors',{bus_id}))[0];
    const time_slot = await API('get_time_slot',{bus_id,doct_id,date:'nextweek'})
    this.setState({ data:time_slot });
    this.setState({ doct_id });
    this.setState({ selected : null })
  }

  saatClick(e,cat){
    let time_token;
    if(cat === 'morning'){
      time_token = 1;
    }
    if(cat === 'afternoon'){
      time_token = 2;
    }
    if(cat === 'evening'){
      time_token = 3;
    }
    const click = (a) => {
      if(e.is_booked === false){
        this.setState({
          selected:{
            time_token,
            start_time:e.slot
          }
        })
      }
    }
    return click
  }
  SaatYukle(cat){
    if(this.state && this.state.data){
      let a = [];
      for (let b in this.state.data[cat]){
        const d = this.state.data[cat][b]
        const click = this.saatClick(d,cat)
        let opts = {
          click:click,
          noPrize:true,
          icon:'md-alarm',
          text:d.slot.substr(0,5),
          busy:d.is_booked
        }
        a.push( <HizmetItem key={`saat-${b}`} {...opts} />)
      }
      return a;
    }
    else{
      return (<Text>asd</Text>)
    }
  }
  loadDate(){
    var tarih=new Date();
    var gun=tarih.getDate();
    var ay=tarih.getMonth();
    var yil=tarih.getFullYear();
    var gunler= ['Pazar', 'Pazartesi', 'Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    var aylar= ['Ocak', 'Şubat', 'Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    return `${gun} ${aylar[ay]} ${yil}`
  }
  render() {
    let { islem,image, price,hour,data,services} = this.props.navigation.state.params;
    price = price?price:'0',
    hour = hour?hour:'00:00:00'
    const name = this.props.navigation.state.params.data.bus_title;
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={HEADER_COLOR}>
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
        <Content>
        <Body>
          <View style={styles.containerSub}>
            <View style={styles.berberad}>
              <View style={styles.berbersag}>
                <View style={styles.berberadup}>
                  <Text style={{fontSize: 25}}>{name}</Text>
                </View>
                <View style={styles.berberaddown}>
                  <Text style={{fontSize: 15}}>
                    {' '}
                    Tahmini Zaman: {parseInt(hour.substr(0,2))} saat {parseInt(hour.substr(3,5))} dk
                  </Text>
                </View>
              </View>
              <View style={styles.berbersol}>
                <TouchableOpacity onPress={() => {this.props.kuafor(!this.props.kuaforPopup)}}>
                  <Icon style={{fontSize: 50,color:'black'}} name="ios-information-circle" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                ...styles.berberad,
                ...{paddingVertical: 0, paddingBottom: 5},
              }}>
              <Text style={{fontSize: 25}}>Tutar</Text>
              <Text style={{fontSize: 25, color: 'red'}}>{price} TL</Text>
            </View>
            <View style={{...styles.berberad, ...{paddingVertical: 15}}}>
              <View style={styles.berbercontent}>
                <Icon style={{fontSize: 40}} name="ios-calendar" />
                <Text style={{fontSize: 25, paddingHorizontal: 10}}>
                  {this.loadDate()}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.tabs}>
            <Tabs
              style={styles.tab}
              tabBarUnderlineStyle={{backgroundColor: TITLE_COLOR}}>
              <Tab
                tabStyle={styles.tablar}
                activeTextStyle={styles.tabtext}
                activeTabStyle={styles.tablar}
                textStyle={styles.tabtext}
                scrollWithoutAnimation={false}
                tabBarUnderlineStyle={{backgroundColor: 'red'}}
                heading={
                  <TabHeading style={styles.tablar}>
                    <Text style={styles.tabtext}>Sabah</Text>
                  </TabHeading>
                }>
                <ScrollView>
                  <List>
                    {this.SaatYukle('morning')}
                  </List>
                </ScrollView>
              </Tab>
              <Tab
                tabStyle={styles.tablar}
                activeTextStyle={styles.tabtext}
                activeTabStyle={styles.tablar}
                textStyle={styles.tabtext}
                scrollWithoutAnimation={false}
                tabBarUnderlineStyle={{backgroundColor: 'red'}}
                heading={
                  <TabHeading style={styles.tablar}>
                    <Text style={styles.tabtext}>Ogle</Text>
                  </TabHeading>
                }>
                <ScrollView>
                  <List>
                    {this.SaatYukle('afternoon')}
                  </List>
                </ScrollView>
              </Tab>
              <Tab
                tabStyle={styles.tablar}
                activeTextStyle={styles.tabtext}
                activeTabStyle={styles.tablar}
                textStyle={styles.tabtext}
                scrollWithoutAnimation={false}
                tabBarUnderlineStyle={{backgroundColor: 'red'}}
                heading={
                  <TabHeading style={styles.tablar}>
                    <Text style={styles.tabtext}>Aksam</Text>
                  </TabHeading>
                }>
                <ScrollView>
                  <List>
                    {this.SaatYukle('evening')}
                  </List>
                </ScrollView>
              </Tab>
            </Tabs>
          </View>
        </Body>
        </Content>
        <KuaforPopUp
          name={name}
          loc={data.bus_google_street}
          image={image}
          data={data}
          desc={data.bus_description}
        />
        <Footer style={styles.footer}>
          <Button
            onPress={() =>{
              if(this.state.selected){
                this.props.navigation.navigate('Iletisim', {price,image,data,services,hour:this.state.selected,doct_id:this.state.doct_id})
              }
            }}
            style={{...styles.berberad, ...{backgroundColor: HEADER_COLOR}}}>
            <Text style={styles.footerButton}> Hizli Randevu</Text>
          </Button>
        </Footer>
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
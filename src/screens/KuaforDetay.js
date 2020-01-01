import React from 'react';
import {Text,View,ScrollView,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_BUSS_IMG_PATH} from '../settings';
import styles,{TITLE_COLOR} from '../styles/kuaforDetay';
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
  TabHeading,
  Tab,
  Tabs,
  List,
  ListItem,
  Footer
} from 'native-base';
import HizmetItem from '../components/hizmetItem'
import YorumItem from '../components/yorumItem'
import Star from '../components/star'
import KuaforPopUp from '../components/kuaforpopup';
class HizmetSec extends React.Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  navigate(){
    const {navigation} = this.props;
    const {image,data} = navigation.state.params;
    let {hour,price} = this.state;

    if(hour&&price){
      navigation.navigate(
        'SaatSec',
        { 
          data , 
          image , 
          hour,
          price,
          services:{
            data:this.state.data,
            selected:this.state.selected
          }
        }
      )
    }
  }
  async componentDidMount() {
    this.setState({ selected : [] })
    const {bus_id} = this.props.navigation.state.params.data;
    const data = await API('get_services',{bus_id});
    const review = await API('get_reviews',{bus_id});
    this.setState({ data });
    this.setState({ review });
  }
  KuaforYukle(){
    if(this.state && this.state.data){
      const {name} = this.props.navigation.state.params;
      let a = [];
      for (let b in this.state.data){
        let opts = {
          navigation:this.props.navigation,
          click:() => {
            let select = this.state.selected;
            select[b] = !this.state.selected[b]
            this.setState({selected:select})
            const hour = this.calcTime();
            const price = this.calcPrice();
            this.setState({hour,price})
          },
          icon:this.state.selected[b],
          text:this.state.data[b].service_title,
          data:this.state.data[b],
          Prize:this.state.data[b].service_price,
        }
        a.push( <HizmetItem key={`kuafor-detay-${b}`} {...opts} />)
      }
      return a;
    }
    else{
      return []
    }
  }
  YorumYukle(){
    if(this.state && this.state.review){
      const {name} = this.props.navigation.state.params;
      let a = [];
      for (let b in this.state.review){
        let opts = {
          name:this.state.review[b].user_fullname,
          reviews:this.state.review[b].reviews,
          ratings:this.state.review[b].ratings
        }
        a.push( <YorumItem key={`kuafor-yorum-${b}`} {...opts}/> )
      }
      return a;
    }
    else{
      return []
    }
  }
  calcTime(){
    let times = [];
    let time = 0 ;
    if(this.state && this.state.data){
      times = [];
      for (let n in this.state.selected){
        if(this.state.selected[n]){
          let {business_approxtime} = this.state.data[n]
          let _time = business_approxtime.replace(':','').replace(':','')
          times.push(parseInt(_time))
        }
      }
    }
    for( let t in times ){
      time += times[t]
    }
    let hour = parseInt((time%1000000)/10000 );
    let min = parseInt((time%10000)/100);
    let sec = parseInt(time%100);

    hour = hour<10?'0'+hour:hour
    min = min<10?'0'+min:min
    sec = sec<10?'0'+sec:sec
    return hour+':'+min+':'+sec
  }
  calcPrice(){
    let prices = [];
    let price = 0 ;
    if(this.state && this.state.data){
      prices = [];
      for (let n in this.state.selected){
        if(this.state.selected[n]){

          let {service_price} = this.state.data[n]
          let _time = service_price
          prices.push(parseInt(_time))
        }
      }
    }
    for( let t in prices ){
      price += prices[t]
    }
    return price
  }
  render() {
    const {name, islem, image,data} = this.props.navigation.state.params;
    return (
      <Container>
        <View style={styles.head}>
          <Left style={styles.button}>
            <Button
              style={styles.buttonIcon}
              transparent
              onPress={() =>
                this.props.navigation.navigate('HizmetSec', {
                  name: islem,
                  islem: name,
                })
              }>
              <Icon style={styles.buttonIcon} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
              <View style={styles.titleArea}>
                <View style={styles.titleBerber}>
                  <Text style={styles.titleBerberTitle}>{name}</Text>
                  <Star count={data.avg_rating}/>
                </View>
                <View>
                  <TouchableOpacity onPress={() => {this.props.kuafor(!this.props.kuaforPopup)}}>
                    <Icon
                      style={styles.info}
                      name="ios-information-circle-outline"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Body>
        </View>
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
                <Icon style={styles.tabtext} name="md-hand" />
                <Text style={styles.tabtext}>Hizmetler</Text>
              </TabHeading>
            }>
            <View style={{flex: 1}}>
              <ScrollView>
                <List>
                  {this.KuaforYukle()}
                </List>
              </ScrollView>
            </View>
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
                <Icon style={styles.tabtext} name="ios-chatboxes" />
                <Text style={styles.tabtext}>Degerlendirmeler</Text>
              </TabHeading>
            }>
            <ScrollView>
                <List>
                  {this.YorumYukle()}
                </List>
            </ScrollView>
          </Tab>
        </Tabs>
        <Footer style={styles.footer}>
          <View style={styles.footerTextArea}>
            <Text style={styles.footerTextMin}>Tahmini Zaman : {this.calcTime()}</Text>
            <Text style={styles.footerTextMax}>Tutar : {this.calcPrice()}</Text>
          </View>
          <Button
            onPress={this.navigate}
            style={styles.footerButton}>
            <Text style={styles.footerTextMin}>Devam Et</Text>
          </Button>
        </Footer>
        <KuaforPopUp
          name={name}
          loc={data.bus_google_street}
          image={image}
          data={data}
          desc={data.bus_description}
        />
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
export default connect(mapStateToProps,mapDispatchToProps)(HizmetSec)
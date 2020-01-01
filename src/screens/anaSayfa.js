import React from 'react';
import {Text,View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_CAT_IMG_PATH} from '../settings';
import styles,{HEADER_COLOR,APP_NAME} from '../styles/anaSayfa';
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
  async componentDidMount() {
    const data = await API('get_categories');
    this.setState({ data });
  }
  KuaforYukle(){
    if(this.state && this.state.data){
      let a = [];
      for (let b in this.state.data){
        let opts = {
          navigation:this.props.navigation,
          name:this.state.data[b].title,
          data:this.state.data[b],
          image:APP_CAT_IMG_PATH+this.state.data[b].image
        }
        a.push( <Hizmetler key={`hizmet-${b}`} {...opts} />)
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
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="ios-menu" style={styles.menu} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{APP_NAME}</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          <View style={styles.container}>
            <Reklam image={'https://ae01.alicdn.com/kf/Hb56350fe56f64b1baec8c231345269faG.png'}/>
            <View style={styles.containerSub}>{this.KuaforYukle()}</View>
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
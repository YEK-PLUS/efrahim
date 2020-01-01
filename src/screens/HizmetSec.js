import React from 'react';
import {Text,View,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_BUSS_IMG_PATH} from '../settings';
import styles,{HEADER_COLOR} from '../styles/hizmetSec';
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
class HizmetSec extends React.Component {
  async componentDidMount() {
    const data = await API('get_business');
    this.setState({ data });
  }
  KuaforYukle(){
    if(this.state && this.state.data){
      let a = [];
      const {name} = this.props.navigation.state.params;
      for (let b in this.state.data){
        let opts = {
          navigation:this.props.navigation,
          name:this.state.data[b].bus_title,
          islem:name,
          data:this.state.data[b],
          sube:this.state.data[b].bus_google_street,
          image:APP_BUSS_IMG_PATH+this.state.data[b].bus_logo
        }
        a.push( <KuaforFoto key={`kuafor-${b}`} {...opts} />)
      }
      return a;
    }
    else{
      return (<Text>asd</Text>)
    }
  }
  render() {
    const {name} = this.props.navigation.state.params;
    return (
      <Container style={styles.main}>
        <Header style={styles.header} androidStatusBarColor={HEADER_COLOR}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>{name}</Title>
          </Body>
          <Right />
        </Header>
        <Body>
          <ScrollView>
            <View style={styles.containerSub}>{this.KuaforYukle()}</View>
          </ScrollView>
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
export default connect(mapStateToProps,mapDispatchToProps)(HizmetSec)
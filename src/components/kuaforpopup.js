import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import {
  Icon,
} from 'native-base';
import Star from './star';
import * as popupAction from '../redux/actions/popup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
  kuaforPopup:state.popup.kuaforPopup
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(popupAction, dispatch);
}
const KuaforPopUp = props => {
  const {image, islem, name, navigation, loc,data,desc} = props;
  const {bus_contact} = data
  const formatDesc = desc.replace('<p>','').replace('</p>','')
  const click = () => {
    navigation.navigate('Detay', {name, islem, image,data});
  };
  let opacity = props.kuaforPopup;
  if(opacity){

  return (
      <View style={styles.outter} onPress={() => {props.kuafor(!props.kuaforPopup)}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.close} onPress={() => {props.kuafor(!props.kuaforPopup)}}>
            <Icon
                style={styles.closeIcon}
                name="ios-close"
              />
          </TouchableOpacity>
          <Image source={{uri:image}} style={styles.image}/>
        
          <View style={styles.bigTextOutter}>
            
            <View style={styles.bigTextInner}>
              <Text style={styles.berberName}>
                {name}
              </Text>
              <Text style={styles.berberCXO}>
                {loc}
              </Text>
            </View>
            <TouchableOpacity style={styles.close} onPress={() => {Linking.openURL(`tel:+9${bus_contact}`)}}>
              <Icon
                style={styles.info}
                name="ios-call"
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text style={styles.desc}>
              {formatDesc}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
  else{
    return null;
  }

};
const styles = StyleSheet.create({
  closeIcon:{
    fontSize:50,
  },
  close:{
    right:10,
    zIndex:9999,
    position:'absolute',
  },
  desc:{
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:15,
  },
  info: {
    color: 'black',
    fontSize:50,
  },
  berberCXO:{
    fontSize:18,
  },
  berberName:{
    fontSize:25,
    fontWeight:'bold'
  },
  bigTextInner:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
  },
  bigTextOutter:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal:20
  },
  outter:{
    position:'absolute',
    display:'flex',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor:'rgba(0,0,0,0.5)',
    alignItems:'center',
    justifyContent:'center',
    zIndex:999999
  },
  container: {
    width: Dimensions.get('window').width / 10 * 9,
    height: Dimensions.get('window').height / 3 * 2 ,
    backgroundColor:'white',
  },
  image:{
    alignSelf: 'stretch',
    width: '100%',
    height: '50%',
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(KuaforPopUp)

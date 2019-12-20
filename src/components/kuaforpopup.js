import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  Icon,
} from 'native-base';
import Star from '../components/star';
const KuaforPopUp = props => {
  const {image, islem, name, navigation, loc,data,desc} = props;
  const formatDesc = desc.replace('<p>','').replace('</p>','')
  const click = () => {
    navigation.navigate('Detay', {name, islem, image,data});
  };

  if(props.opacity){

  return (
      <View style={styles.outter}>
        <View style={styles.container}>
          <Icon
              style={styles.close}
              name="ios-close"
            />
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
            <Icon
              style={styles.info}
              name="ios-call"
            />
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
  close:{
    right:10,
    fontSize:50,
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

export default KuaforPopUp;

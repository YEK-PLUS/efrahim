import React, {Component} from 'react';
import {Text, View, StyleSheet, Image,Dimensions,TouchableOpacity} from 'react-native';
import {NavigationActions } from 'react-navigation';

const KuaforFoto = (props) => {
  const {image,name,navigation} = props
  const click = () => {
    navigation.navigate('Detail', {name} )
  }
  return  (
    <TouchableOpacity onPress={() => click()}>
      <View style={styles.container} >
        <Image source={{uri:image}} style={styles.image}/>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width:(Dimensions.get('window').width/2) - 10,
    height:(Dimensions.get('window').width/2) - 10 + 40,
    margin:5,
    borderRadius:10
  },
  text:{
    position:'relative',
    top:-50,
    color:'white',
    width:'100%',
    textAlign:'center',
    fontSize:40,
    lineHeight:50,
    backgroundColor:'rgba(0,0,0,0.5)',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:10
  }
});

export default KuaforFoto;
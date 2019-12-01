import React, {Component} from 'react';
import {Text,Image, View, StyleSheet, Button,ScrollView,TouchableNativeFeedback} from 'react-native';

const Detay = (props) => {
  const {name} = props.navigation.state.params
  return  (
    <ScrollView>
      <View style={styles.container} >
        <Image style={styles.image} source={{uri:'https://i.pinimg.com/originals/1d/f1/ed/1df1ed3b1cd18822c4a2818c6a6bf19a.jpg'}}/>
        <View style={styles.titleArea}>
          <View style={styles.titleBerber}>
            <Text style={styles.titleBerberTitle}>{name}</Text>
            <Text style={styles.titleBerberTitle}>{name}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-end',
    height: 250,
  },
  image:{
    flex:1,
    width: '100%',
    height: 250,
    resizeMode: 'center',
    position:'absolute',
  },
  titleArea:{
    width: '100%',
    paddingHorizontal: 20,
    display:'flex',
    flexDirection:'row',
  },
  titleBerber:{
    width: 'auto',
    display:'flex', 
    flexDirection:'column',
  },
  titleBerberTitle:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    paddingVertical: 5,
  }
});

export default Detay;

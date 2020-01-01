import React from 'react';
import {View,Image} from 'react-native';
import styles from '../styles/reklam';

const MenuItem = props => {
  const {image} = props;
  return (
    <View style={styles.ornekReklam}>
	  <View style={styles.ornekReklamContainer}>
	    <Image
	      style={styles.reklamImage}
	      source={{uri:image}}
	    />
	  </View>
	</View>
  );
};

export default MenuItem;
 
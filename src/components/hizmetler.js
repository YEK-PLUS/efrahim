import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/hizmetler'
const KuaforFoto = props => {
  const {image, name, navigation} = props;
  const click = () => {
    navigation.push('HizmetSec',{name})
  };
  return (
    <TouchableOpacity onPress={() => click()}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default KuaforFoto;

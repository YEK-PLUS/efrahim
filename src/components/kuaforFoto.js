import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Star from './star';
import styles from '../styles/kuaforFoto'
const KuaforFoto = props => {
  const {image, islem, name, navigation, sube,data} = props;
  const click = () => {
    navigation.navigate('KuaforDetay', {name, islem, image,data});
  };
  return (
    <TouchableOpacity onPress={() => click()}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.textArea}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.bottomTitle}>
            <Text style={styles.text2}>{sube}</Text>
            <Star count={data.avg_rating}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default KuaforFoto;

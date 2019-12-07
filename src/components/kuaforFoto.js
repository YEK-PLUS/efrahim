import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Star from '../components/star';
const KuaforFoto = props => {
  const {image,islem, name, navigation, sube} = props;
  const click = () => {
    navigation.navigate('Detay', {name,islem,image});
  };
  return (
    <TouchableOpacity onPress={() => click()}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.textArea}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.bottomTitle}>
            <Text style={styles.text2}>{sube}</Text>
            <Star />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 10,
    height: Dimensions.get('window').width / 2 - 10 + 40,
    margin: 5,
    borderRadius: 10,
  },
  textArea: {
    position: 'relative',
    top: -55,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottomTitle: {
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
  text2: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default KuaforFoto;

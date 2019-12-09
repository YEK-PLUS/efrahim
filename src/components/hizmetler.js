import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const KuaforFoto = props => {
  const {image, name, navigation} = props;
  const click = () => {
    navigation.navigate('IslemKuafor', {name});
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
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 3 - 10,
    height: Dimensions.get('window').width / 3 - 10,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin: 5,
    borderRadius: 10,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 10 - 30 - 20,
    height: Dimensions.get('window').width / 3 - 10 - 30 - 20,
    borderRadius: 10,
  },
});

export default KuaforFoto;

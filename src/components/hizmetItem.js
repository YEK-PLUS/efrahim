import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {  ListItem,Icon } from 'native-base';

const KuaforFoto = props => {
  const {image, name, navigation} = props;
  const click = () => {
    navigation.navigate('IslemKuafor', {name});
  };
  return (
    <ListItem style={styles.listItem} iconLeft>
      <View style={styles.listItemLeft}>
        <Icon name={props.icon||'md-radio-button-off'} />
        <Text style={styles.listItemText}>{props.text||'Sac Kesim'}</Text>
      </View>
      <Text>{props.noPrize?'':'2 TL'}</Text>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  listItemText:{
    marginHorizontal:10
  },
  listItemLeft:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row'
  },
  listItem:{
    display:'flex',
    justifyContent:'space-between',
  },
});

export default KuaforFoto;

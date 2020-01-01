import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Star from './star'
import {ListItem, Icon} from 'native-base';

const KuaforFoto = props => {
  let {name,reviews,ratings}=props;
  return (
    <ListItem style={styles.listItem}>
      <View style={styles.header}>
        <Text style={styles.listItemText}>{name}</Text>
        <Star count={ratings}/>
      </View>
      <Text style={styles.yorum}>{reviews}</Text>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  header:{
    width:'100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listItemText: {
    fontSize:17,
  },
  yorum:{
    width:'100%',
    paddingHorizontal:20,
    fontSize:15,
  },
  listItem: {
    paddingHorizontal:0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});

export default KuaforFoto;

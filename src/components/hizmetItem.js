import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ListItem, Icon} from 'native-base';

const KuaforFoto = props => {
  let {icon}=props;
  icon = icon && (icon!=true&&icon!=false)?icon:(icon?'md-radio-button-on' : 'md-radio-button-off')
  const extUp={
    width:props.busy?'100%':'auto',
  }
  return (
    <ListItem style={{...styles.listItem,...extUp}} onPress={props.click} iconLeft>
      <View style={styles.listItemLeft}>
        <Icon style={{color:props.busy?'red':'black',}} name={icon} />
        <Text style={styles.listItemText}>{props.text || 'Sac Kesim'}</Text>
      </View>
      <Text>{props.noPrize ? '' : props.Prize+' TL'}</Text>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  listItemText: {
    marginHorizontal: 10,
  },
  listItemLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default KuaforFoto;

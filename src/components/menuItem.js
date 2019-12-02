import React, {Component} from 'react';
import {Icon, Button, Text} from 'native-base';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

const MenuItem = props => {
  const {text, icon, press} = props;
  return (
    <Button transparent style={{justifyContent: 'flex-start'}} onPress={press}>
      <Icon name={icon} style={styles.Iconlar} />
      <Text style={styles.textler}>{text}</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  Iconlar: {
    color: '#fff',
    fontSize: 30,
  },
  textler: {
    flex: 1,
    fontSize: 15,
    color: 'white',
  },
});

export default MenuItem;

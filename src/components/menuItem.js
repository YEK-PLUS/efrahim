import React from 'react';
import {Icon, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const MenuItem = props => {
  const {text, icon, press} = props;
  return (
    <Button transparent style={styles.button} onPress={press}>
      <Icon name={icon} style={styles.Iconlar} />
      <Text style={styles.textler}>{text}</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-start',
  },
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

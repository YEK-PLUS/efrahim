import React from 'react';
import {Icon, Button, Text} from 'native-base';
import styles from '../styles/menuItem';

const MenuItem = props => {
  const {text, icon, press} = props;
  return (
    <Button transparent style={styles.button} onPress={press}>
      <Icon name={icon} style={styles.Iconlar} />
      <Text style={styles.textler}>{text}</Text>
    </Button>
  );
};

export default MenuItem;

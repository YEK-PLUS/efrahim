import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const Star = props => {
  const {count} = props;
  return (
    <View style={styles.starArea}>
      <Icon style={styles.stars} name="star" />
      <Icon style={styles.stars} name="star" />
      <Icon style={styles.stars} name="star" />
      <Icon style={styles.stars} name="star" />
      <Icon style={styles.stars} name="star" />
    </View>
  );
};
const styles = StyleSheet.create({
  starArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  stars: {
    lineHeight: 20,
    fontSize: 20,
    color: 'yellow',
  },
});

export default Star;

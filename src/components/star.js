import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

const Star = props => {
  const {count} = props;
  const generate = () => {
    let stars = [];
    for (var i = count ; i > 0; i--) {
      stars.push(<Icon style={styles.stars} name="star" />)
    }
    return stars;
  }
  return (
    <View style={styles.starArea}>
      { generate() }
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

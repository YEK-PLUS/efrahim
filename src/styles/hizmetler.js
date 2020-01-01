import {
  StyleSheet,
  Dimensions,
} from 'react-native';
export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 3 - 10,
    height: Dimensions.get('window').width / 3 - 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 30,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 10 - 30 - 20,
    height: Dimensions.get('window').width / 3 - 10 - 30 - 20,
    borderRadius: 10,
  },
});
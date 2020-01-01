import {StyleSheet , Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2 - 10,
    height: Dimensions.get('window').width / 2 - 10 + 40,
    margin: 5,
    borderRadius: 10,
  },
  textArea: {
    position: 'relative',
    top: -55,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottomTitle: {
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
  text2: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
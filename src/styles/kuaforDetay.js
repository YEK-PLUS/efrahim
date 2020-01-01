import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main';
export {TITLE_COLOR} from './main';
export default StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    width: 'auto',
    position: 'absolute',
    zIndex: 999,
    top: 10,
    left: 10,
    color: 'white',
  },
  buttonIcon: {
    color: 'white',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 230,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
  },
  titleArea: {
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBerber: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  titleBerberTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    color: 'white',
  },
  tabtext: {
    color: 'black',
    marginHorizontal: 10,
  },
  tab: {
    backgroundColor: HEADER_COLOR,
  },
  tablar: {
    backgroundColor: '#fff',
  },
  footer: {
    backgroundColor: HEADER_COLOR,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerTextMin: {
    color: 'white',
  },
  footerTextMax: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerTextArea: {
    display: 'flex',
    flexDirection: 'column',
  },
});
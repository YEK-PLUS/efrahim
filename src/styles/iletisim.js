import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main';
export {TITLE_COLOR,HEADER_COLOR} from './main';
export default StyleSheet.create({
  bigText:{
    paddingVertical: 7,
    fontSize:20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
  },
  sendButton: {
    backgroundColor: HEADER_COLOR,
    color: '#fff',
    marginVertical: 30,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
  },
  formText: {
    paddingVertical: 7,
  },
  formTextGray: {
    paddingVertical: 5,
    width: '100%',
    color: 'gray',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  formInputOutter: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  main: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: HEADER_COLOR,
  },

  menu: {
    color: TITLE_COLOR,
    fontSize: 35,
  },
  title: {
    color: TITLE_COLOR,
    fontFamily: 'BadScript-Regular',
  },
});
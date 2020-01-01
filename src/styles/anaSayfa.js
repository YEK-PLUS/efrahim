import {StyleSheet} from 'react-native';

import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main'; 
export {HEADER_COLOR} from './main'
export {APP_NAME} from '../settings'
export default StyleSheet.create({
  main: {
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
    left: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  containerSub: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

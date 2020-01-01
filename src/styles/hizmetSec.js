import {StyleSheet} from 'react-native';

import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main'; 
export {HEADER_COLOR} from './main'
export {APP_NAME} from '../settings'
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: HEADER_COLOR,
  },
  containerSub: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    color: TITLE_COLOR,
  },
});

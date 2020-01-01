import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main';
export {TITLE_COLOR,HEADER_COLOR} from './main';
export default StyleSheet.create({
  listItemText: {
    marginHorizontal: 7,
  },
  listItemLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  business:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width:'100%'
  },
  randevu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 20,
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
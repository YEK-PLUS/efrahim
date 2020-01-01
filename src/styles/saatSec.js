import {StyleSheet} from 'react-native';

import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main'; 
export {HEADER_COLOR,TITLE_COLOR} from './main'
export {APP_NAME} from '../settings'
export default StyleSheet.create({
  buttonIcon: {
    color: 'white',
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
  title: {
    color: TITLE_COLOR,
    fontFamily: 'BadScript-Regular',
  },
  containerSub: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  berberad: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  berbersag: {
    display: 'flex',
    flexDirection: 'column',
  },
  berbersol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  berbercontent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  tablar: {
    backgroundColor: '#fff',
  },
  tabtext: {
    color: 'black',
    marginHorizontal: 10,
  },
  tab: {
    backgroundColor: HEADER_COLOR,
  },
  footerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: MAIN_COLOR,
    paddingHorizontal: 10,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

import {StyleSheet , Dimensions} from 'react-native';
import {MAIN_COLOR,HEADER_COLOR,TITLE_COLOR} from './main'; 
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: MAIN_COLOR,
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    width: '100%',
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  boldTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'left',
  },
  berberContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    height: 100,
    marginVertical: 30,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  tariha: {
    paddingHorizontal: 20,
  },
  tarih: {
    display: 'flex',
    flexDirection: 'row',
  },
  tarihText: {
    paddingHorizontal: 40,
  },
  saat: {
    fontSize: 17,
    width: '100%',
    textAlign: 'left',
  },
  tutar: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tutarText: {
    fontSize: 20,
    width: '50%',
  },
  sendButton: {
    backgroundColor: HEADER_COLOR,
    color: '#fff',
    marginVertical: 30,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
  },
});
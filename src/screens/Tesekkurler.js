import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, ScrollView, StyleSheet, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as popupAction from '../redux/actions/popup';
import {APP_BUSS_IMG_PATH} from '../settings';
import styles,{HEADER_COLOR} from '../styles/Tesekkurler';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Tab,
  TabHeading,
  Tabs,
  List,
  Footer,
} from 'native-base';
import KuaforFoto from '../components/kuaforFoto'
class Iletisim extends React.Component {
  
  render() {
    const {name, image,appointment_date,start_time,price} = this.props.navigation.state.params;
    return (
      <Container style={styles.main}>
        <Body style={styles.body}>
          <Text style={styles.boldTitle}>Randevu Aldiginiz Icin</Text>
          <Text style={styles.boldTitle}>Tesekkurler</Text>
          <View style={styles.berberContainer}>
            <Image source={{uri: image}} style={styles.image} />
            <View style={styles.tariha}>
              <Text style={styles.boldTitle}>{name}</Text>
              <View style={styles.tarih}>
                <Text>Tarih</Text>
                <Text style={styles.tarihText}>{appointment_date.replace('-',' ').replace('-',' ')}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.saat}>Saat : {start_time.substr(0,5)}</Text>
          <View style={styles.tutar}>
            <Text style={styles.tutarText}>Tutar</Text>
            <Text
              style={{
                ...styles.tutarText,
                ...{
                  textAlign: 'right',
                  color: 'red',
                  fontWeight: 'bold',
                  fontSize: 25,
                },
              }}>
              {price} TL
            </Text>
          </View>
          <Button
            style={{
              ...styles.sendButton,
              ...{marginVertical: 0, marginTop: 30},
            }}
            onPress={() => this.props.navigation.navigate('AnaSayfa')}>
            <Text style={styles.buttonText}>Ana Sayfaya Don</Text>
          </Button>
          <Button
            style={{
              ...styles.sendButton,
              ...{marginVertical: 0, marginTop: 10},
            }}
            onPress={() => this.props.navigation.navigate('Randevularim')}>
            <Text style={styles.buttonText}>Randevularim</Text>
          </Button>
        </Body>
      </Container>
    );
  }
}
export default (Iletisim)
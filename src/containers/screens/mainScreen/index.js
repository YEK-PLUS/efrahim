import React, {Component} from 'react';
import {Text, View, StyleSheet, Button,ScrollView,TouchableNativeFeedback} from 'react-native';

import KuaforFoto from '../../../components/kuaforFoto.js'
class MainScreen extends Component {

  KuaforYukle() {
    let a = [];
    for (var i = 9; i >= 1; i--) {
      a.push(<KuaforFoto navigation={this.props.navigation} name='J.FLA' image='https://66.media.tumblr.com/a330d98ba819cf3fb204fcf9e2b3c204/tumblr_p1q9o0xN2o1wih5cfo3_250.png'/>);
    }
    return a ;
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.KuaforYukle()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  },
});

export default MainScreen;

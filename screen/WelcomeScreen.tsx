import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button,
  Dimensions
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { normalize } from '../assets/theme';

const {width:widthScreen} = Dimensions.get('screen');
const {height:heightScreen} = Dimensions.get('screen');

const WelcomeScreen = ({navigation}) => {
  const [type, setType] = React.useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length == 10) {
      setType({
        ...type,
        phone: val,
        check_textInputChange: true,
      });
    } else {
      setType({
        ...type,
        phone: val,
        check_textInputChange: false,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ccc" />

      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <View>
          <Text style={styles.text}>Đăng kí thành công </Text>
        </View>

        <View>
          <Text
            style={{
              height: 50,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: '85%',
              textAlign: 'justify',
              lineHeight: 25,
              color: '#333',
              marginBottom: 10,
              fontSize:normalize(15),
              fontWeight:'400'
            }}>
            Chúc mừng bạn đã đăng kí thành công
          </Text>
        </View>
        <View style={styles.login}>
          <Image style={styles.image} source={require('../image/image4.jpg')} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            backgroundColor: '#15AD9C',
            marginTop: 30,
            borderRadius: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: heightScreen*0.05,
          }}>
          <Text
            style={{
              fontSize: normalize(16),
              fontWeight: '700',
              color: '#fff',
              marginRight: 145,
              marginLeft: 40,
            }}>
           Bắt đầu trải nghiệm
          </Text>
          <MaterialIcons
            name="navigate-next"
            size={normalize(40)}
            color="#fff"
            style={{
              marginRight: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },

  login: {
    alignItems: 'center',
  },

  image: {
    width: widthScreen*0.85,
    height: heightScreen*0.3,
    marginTop: 10,
    borderRadius:30,
  },
  text: {
    alignItems: 'center',
    fontSize: normalize(30),
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
});

export default WelcomeScreen;

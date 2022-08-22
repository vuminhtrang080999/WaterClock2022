import React , {useEffect} from 'react';
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
  Alert,
  Dimensions,
  Keyboard,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import {StoreContext} from '../component/Context';
import {normalize} from '../assets/theme';

import RNOtpVerify from 'react-native-otp-verify';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const ForgetScreen = ({navigation, route}) => {
  const [type, setType] = React.useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    otp:'',
  });


  // useEffect(() => {
  //   RNOtpVerify.getHash().then(console.log).catch(console.log);
   
  //     RNOtpVerify.getOtp()
  //       .then(p => RNOtpVerify.addListener(otpHandler))
  //       .catch(p => console.log(p));
  // }, []);

  // const otpHandler = (message: string) => {
  //   const OTP = /(\d{4})/g.exec(message)[1];
  //   setType(type=>{
  //     type.otp=OTP
  //     return{...type}
  //   });
  //   RNOtpVerify.removeListener();
  //   Keyboard.dismiss();
  // }

  const textInputChange = val => {
    if (val.length === 6) {
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

  const {colors} = useTheme();

  const theme = useTheme();

  const store = React.useContext(StoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ccc" />
      <View
        style={{
          margin: 10,
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginRight: 270,
            marginLeft: -25,
          }}>
          <AntDesign name="left" size={normalize(30)} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View style={styles.login}>
          <Image style={styles.image} source={require('../image/login.png')} />
        </View>

        <View style={{marginTop: 10}}>
          <Text style={[styles.text, {color: colors.text}]}>Nhập mã OTP</Text>
        </View>

        <View>
          <Text
            style={{
              height: screenHeight * 0.05,
              marginTop: 10,
              width: '80%',
              textAlign: 'justify',
              lineHeight: 20,
              color: colors.text,
              fontSize: normalize(15),
            }}>
            Nhập mã OTP được gửi về số điện thoại
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 20,
          }}>
          <Foundation
            name="telephone"
            size={normalize(20)}
            color={colors.text}
          />

          <TextInput
            style={{
              paddingVertical: 0,
              color: colors.text,
              fontSize: normalize(20),
            }}
            placeholder="Nhập mã OTP"
            keyboardType="numeric"
            onChangeText={val => textInputChange(val)}
          />
        </View>
      </View>

      {type.check_textInputChange ? (
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Confirm')}
            style={{
              backgroundColor: '#15AD9C',
              paddingHorizontal: 20,
              marginBottom: 30,
              borderRadius: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '95%',
              height: screenHeight * 0.06,
            }}>
            <Text
              style={{
                fontSize: normalize(18),
                fontWeight: '700',
                color: '#ffff',
              }}>
              Tiếp tục
            </Text>
            <View style={{flex: 1}}></View>
            <MaterialIcons
              name="navigate-next"
              size={normalize(40)}
              color="#ffff"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#cccc',
              paddingHorizontal: 20,
              marginBottom: 30,
              borderRadius: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '95%',
              height: screenHeight * 0.06,
            }}>
            <Text
              style={{
                fontSize: normalize(18),
                fontWeight: '700',
                color: '#ffff',
              }}>
              Tiếp tục
            </Text>
            <View style={{flex: 1}}></View>
            <MaterialIcons
              name="navigate-next"
              size={normalize(40)}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo : ', ' Đã gửi thành công');
          }}>
          <Text
            style={{
              color: 'tomato',
              fontWeight: '500',
              fontFamily: 'OpenSans-MediumItalic',
              fontSize: normalize(16),
            }}>
            Gửi lại voice OTP
          </Text>
        </TouchableOpacity>

        <View style={{flex: 1}}></View>

        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo : ', ' Đã gửi thành công');
          }}>
          <Text
            style={{
              color: 'tomato',
              fontWeight: '500',
              fontFamily: 'OpenSans-MediumItalic',
              fontSize: normalize(16),
            }}>
            Gửi lại OTP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  login: {
    alignItems: 'center',
  },

  image: {
    resizeMode: 'stretch',
    width: screenWidth * 0.9,
    height: screenHeight * 0.08,
  },
  text: {
    alignItems: 'center',
    fontSize: normalize(30),
    fontWeight: '500',
    marginBottom: 30,
  },
  button: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    //backgroundColor: '#15AD9C',
    height: screenHeight * 0.06,
    borderRadius: 20,
  },
  block1: {
    marginTop: 10,
    backgroundColor: 'pink',
    marginHorizontal: 10,
    height: '6%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default ForgetScreen;

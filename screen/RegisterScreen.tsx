import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import axios from 'axios';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const RegisterScreen = ({navigation, route}) => {
  const [type, setType] = React.useState({
    UserAccount: '',
    Password: '',
    ConfirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length > 5 && val.length < 11) {
      setType({
        ...type,
        UserAccount: val,
        check_textInputChange: true,
      });
    } else {
      setType({
        ...type,
        UserAccount: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = number => {
    setType({
      ...type,
      Password: number,
    });
  };

  const handleConfirmPasswordChange = number => {
    setType({
      ...type,
      ConfirmPassword: number,
    });
  };

  const updateSecureTextEntry = () => {
    setType({
      ...type,
      secureTextEntry: !type.secureTextEntry,
    });
  };

  const {colors} = useTheme();

  const theme = useTheme();

  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#cccc" />
      <View
        style={{
          margin: 10,
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            marginRight: 290,
            marginLeft: -25,
          }}>
          <AntDesign name="left" size={normalize(30)} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.login}>
        <Image style={styles.image} source={require('../image/login.png')} />
      </View>

      <View style={{marginTop: 5, marginHorizontal: 20}}>
        <Text style={[styles.text, {color: colors.text}]}> Số điện thoại </Text>
      </View>

      <View style={{marginTop: 10, width: '90%', marginHorizontal: 20}}>
        <Text
          numberOfLines={2}
          style={{
            textAlign: 'justify',
            lineHeight: 25,
            color: colors.text,
            fontFamily: 'SourceSerifPro-ExtraLightItalic',
            fontSize: normalize(15),
          }}>
          Vui lòng điền đầy đủ thông tin
        </Text>
      </View>

      <View style={{width: screenWidth}}>
        <View style={styles.icon}>
          <Foundation
            name="telephone"
            size={normalize(25)}
            color={colors.text}
          />
          <TextInput
            style={{color: colors.text, fontSize: normalize(15)}}
            value={type.UserAccount}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
            onChangeText={val => textInputChange(val)}
          />
        </View>

        <View style={styles.icon}>
          <Foundation
            name="telephone"
            size={normalize(25)}
            color={colors.text}
          />
          <TextInput
            style={{color: colors.text, fontSize: normalize(15)}}
            value={type.Password}
            secureTextEntry={type.secureTextEntry ? true : false}
            placeholder="Tạo mật khẩu"
            keyboardType="numeric"
            onChangeText={number => handlePasswordChange(number)}
          />
          <View style={{flex: 1}}></View>
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {type.secureTextEntry ? (
              <Feather
                style={{margin: 20}}
                name="eye-off"
                color={colors.text}
                size={normalize(20)}
              />
            ) : (
              <Feather
                style={{margin: 20}}
                name="eye"
                color={colors.text}
                size={normalize(20)}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.icon}>
          <Foundation name="telephone" size={20} color={colors.text} />
          <TextInput
            style={{color: colors.text, fontSize: normalize(15)}}
            value={type.ConfirmPassword}
            secureTextEntry={type.secureTextEntry ? true : false}
            placeholder="Nhập lại mật khẩu"
            keyboardType="numeric"
            onChangeText={number => handleConfirmPasswordChange(number)}
          />

          <View style={{flex: 1}}></View>

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {type.secureTextEntry ? (
              <Feather
                style={{margin: 20}}
                name="eye-off"
                color={colors.text}
                size={normalize(20)}
              />
            ) : (
              <Feather
                style={{margin: 20}}
                name="eye"
                color={colors.text}
                size={normalize(20)}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {type.check_textInputChange && type.Password === type.ConfirmPassword ? (
        <TouchableOpacity
          onPress={() => {
            axios
              .get('http://222.252.14.147:6060/api/CreateUser', {
                params: {
                  UserAccount: type.UserAccount,
                  Password: type.Password,
                  ConfirmPassword: type.ConfirmPassword,
                },
              })
              .then(function (response) {
                //console.log('response.data:', response.data);
                if (response.data.CODE === '1') {
                  navigation.navigate('AddProfileScreen', {
                    User: type.UserAccount,
                    Pass : type.Password
                  });
                  //console.log('response:', response.data);
                } else {
                  //console.log('Thông tin sai');
                  Alert.alert('Thông báo ', response.data.MESSAGE);
                  //console.log('response:', response.data);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          style={{
            backgroundColor: '#15AD9C',
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
            borderRadius: 30,
            flexDirection: 'row',
            width: '100%',
            height: 60,
          }}>
          <Text
            style={{
              fontSize: normalize(20),
              fontWeight: '700',
              color: '#ffffff',
              //marginRight: 210,
              //marginLeft: 40,
            }}>
            Tiếp tục
          </Text>
          <View style={{flex: 1}}></View>
          <MaterialIcons
            name="navigate-next"
            size={normalize(40)}
            color={'#ffffff'}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Thông báo ', 'Vui lòng điền đủ thông tin');
          }}
          style={{
            backgroundColor: '#bbbb',
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
            borderRadius: 30,
            flexDirection: 'row',
            width: '100%',
            height: 60,
          }}>
          <Text
            style={{
              fontSize: normalize(20),
              fontWeight: '700',
              color: '#fff',
              //marginRight: 210,
              //marginLeft: 40,
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
      )}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.text, fontSize: normalize(15)}}>
          {' '}
          Bạn đã có tài khoản?{' '}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              color: '#15AD9C',
              fontWeight: '700',
              fontSize: normalize(15),
            }}>
            Đăng nhập ngay
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
    marginTop: 5,
    alignItems: 'center',
  },

  image: {
    width: screenWidth * 0.95,
    height: screenHeight * 0.1,
    resizeMode: 'stretch',
  },
  text: {
    alignItems: 'center',
    fontSize: normalize(30),
    fontWeight: '500',
  },
  icon: {
    marginHorizontal: 15,
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  styleTextInput: {
    marginTop: 10,
    width: 380,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default RegisterScreen;

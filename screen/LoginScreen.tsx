import React, {useState} from 'react';
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
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
import {useTheme} from '@react-navigation/native';
import {StoreContext} from '../component/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {normalize} from '../assets/theme';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';
import { set } from 'react-native-reanimated';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const LoginScreen = ({navigation, route}) => {
  const [type, setType] = React.useState({
    Password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    UserAccount: '',
    supported: false,
    isLoggedIn: false,
    userDetails:{},
  });

  const store = React.useContext(StoreContext);

  const {colors} = useTheme();

  const textInputChange = val => {
    if (val.trim().length === 10) {
      setType({
        ...type,
        check_textInputChange: true, 
        isValidUser: false,
        UserAccount: val,
      });
    } else {
      setType({
        ...type,
        check_textInputChange: false,
        isValidUser: false,
        UserAccount: val,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setType({
        ...type,
        Password: val,
        isValidPassword: true,
      });
    } else {
      setType({
        ...type,
        Password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setType({
      ...type,
      secureTextEntry: !type.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 6) {
      setType({
        ...type,
        isValidUser: true,
      });
    } else {
      setType({
        ...type,
        isValidUser: false,
      });
    }
  };

  React.useEffect(() => {
    
    (async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setType(type=>{
            type.isLoggedIn = true
            type.userDetails = credentials
            return {...type}
          })
        } else {
          console.log("No credentials stored");
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    })();
    navigation.addListener('focus', () => {
      setType(type=>{
        type.Password=''
        return{...type}
      })
    });
    

  //  TouchID.isSupported()
  //     .then(success => {
  //       setType(type => {
  //         type.supported = true;
  //         return {...type};
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Lỗi', error);
  //       Alert.alert('Thông báo ', 'Lỗi');
  //     });
  }, []);

  const handleLogin = async () =>{
    const username = '0343121212';
    const password = '888888';
    await Keychain.setGenericPassword(username, password);
    setType(type=>{
      type.isLoggedIn=true
      type.userDetails= {username, password}
      return {...type}
    })
    console.log('set Thành công' )

    // const configs = {
    //   title: 'Chạm vào cảm biến ',
    //   imageColor: '#1B97CF', // Android
    //   imageErrorColor: '#ff0000', // Android
    //   sensorDescription: 'Touch your finger', // Android
    //   sensorErrorDescription: 'Failed', // Android
    //   cancelText: 'Cancel',
    //   unifiedErrors: false, 
    // };
    // TouchID.authenticate('Đăng nhập', configs)
    //   .then(success => {
    //     if( success === true ){
    //       Alert.alert('Thông báo ', 'Thành công');
    //     }
       
    //     //navigation.navigate('Home');
    //   })
    //   .catch(error => {
    //     console.log('Lỗi 1:' + error);
    //   });
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <View
        style={{
          alignItems: 'center',
          margin: 10,
          flexDirection: 'row',
          padding: 20,
        }}>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding')}
          style={{
            marginRight: 270,
            marginLeft: -25,
          }}>
          <AntDesign name="left" size={normalize(30)} color={colors.text} />
        </TouchableOpacity> */}

        <View style={{flex: 1}}></View>
      </View>

      <View style={styles.login}>
        <Image style={styles.image} source={require('../image/login.png')} />
      </View>

      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={[styles.text, {color: colors.text}]}>Đăng nhập</Text>
      </View>

      <View style={styles.styleTextInput}>
        <View style={styles.icon}>
          <MaterialIcons
            name="local-phone"
            size={normalize(25)}
            color={colors.text}
          />
          <TextInput
            maxLength={10}
            style={{
              flex: 1,
              paddingVertical: 0,
              color: colors.text,
              fontSize: normalize(15),
            }}
            value={type.UserAccount}
            placeholder="Tài Khoản"
            keyboardType="numeric"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {type.check_textInputChange ? (
            <Animatable.View style={{marginRight: 20}} animation="bounceIn">
              <Feather name="check-circle" color="green" size={normalize(20)} />
            </Animatable.View>
          ) : null}
        </View>

        {type.isValidUser ? null : (
          <Animatable.View
            animation="fadeInLeft"
            duration={100}
            style={{
              justifyContent: 'center',
              width: '100%',
            }}>
            <Text
              style={{
                marginBottom: 10,
                color: colors.text,
                fontSize: normalize(15),
              }}>
              Username must be 10 characters long.
            </Text>
          </Animatable.View>
        )}
      </View>

      <View style={styles.styleTextInput}>
        <View style={styles.icon}>
          <Ionicons
            name="md-lock-closed-outline"
            size={normalize(25)}
            color={colors.text}
          />

          <TextInput
            style={{
              flex: 1,
              paddingVertical: 0,
              color: colors.text,
              fontSize: normalize(15),
            }}
            value={type.Password}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={type.secureTextEntry ? true : false}
            autoComplete="off"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {type.secureTextEntry ? (
              <Feather
                name="eye-off"
                size={normalize(25)}
                color={colors.text}
              />
            ) : (
              <Feather name="eye" size={normalize(25)} color={colors.text} />
            )}
          </TouchableOpacity>
        </View>
        {type.isValidPassword ? null : (
          <Animatable.View
            animation="fadeInLeft"
            duration={100}
            style={{
              justifyContent: 'center',
              width: '100%',
            }}>
            <Text
              style={{
                marginBottom: 10,
                color: colors.text,
                fontSize: normalize(15),
              }}>
              Password must be 6 characters long.
            </Text>
          </Animatable.View>
        )}
      </View>

      {/* <View
        style={{
          //backgroundColor: 'pink',
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            fontFamily: 'SourceSerifPro-LightItalic',
            color: colors.text,
            fontSize: normalize(15),
          }}>
          Đăng nhập bằng vân tay
        </Text>
        <TouchableOpacity >
          <Image
            style={{
              height: screenHeight * 0.05,
              width: screenWidth * 0.05,
              borderRadius: 40,
            }}
            source={require('../image/fingerprinter.png')}
          />
        </TouchableOpacity>
      </View> */}

      <View
        style={{
          marginHorizontal: 20,
          marginTop: 5,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', right: 0}}
          onPress={() =>
            navigation.navigate('Forget', {
              UserAccount: type.UserAccount,
            })
          }>
          <Text
            style={{
              color: '#2C5E54',
              fontWeight: '700',
              fontSize: normalize(15),
            }}>
            Quên mật khẩu ?
          </Text>
        </TouchableOpacity>
      </View>

      {type.check_textInputChange ? (
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              handleLogin
              axios
                .get('http://222.252.14.147:6060/api/Login', {
                  params: {
                    UserAccount: type.UserAccount,
                    Password: type.Password,
                  },
                })
                .then(function (response) {
                  //console.log('response:', response.data)
                  if (response.data.CODE === '1') {
                    <ActivityIndicator size="small" color="#15AD9C" />;
                    navigation.navigate('Home');
                    //console.log(route.params);
                    store.setState(state => {
                      state.USER_ID = response.data.USER_ID;
                      state.USER_ACCOUNT = response.data.USER_ACCOUNT;
                      state.USER_NAME = response.data.USER_NAME;
                      state.USER_ADDRESS = response.data.USER_ADDRESS;
                      state.USER_EMAIL = response.data.USER_EMAIL;

                      return {...state};
                    });

                    console.log('response:', response.data.USER_ID);
                  } else {
                    Alert.alert('Thông báo ', 'Thông tin đăng nhập không đúng');
                    console.log('response:', response.data);
                  }
                })
                .catch(function (error) {
                  Alert.alert('Lỗi ', error?.response?.data);
                  console.log('error:', error);
                });
            }}
            style={[styles.button, {backgroundColor: '#15AD9C'}]}>
            <Text
              style={{
                fontSize: normalize(15),
                fontWeight: '700',
                color: '#ffff',
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, {backgroundColor: '#bbbbbb'}]}>
            <Text
              style={{
                fontSize: normalize(15),
                fontWeight: '700',
                color: '#ffff',
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
        }}>
        <Text style={{color: colors.text, fontSize: normalize(15)}}>
          {' '}
          Chưa có tài khoản?{' '}
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              color: '#15AD9C',
              fontWeight: '700',
              fontSize: normalize(15),
            }}>
            Đăng kí ngay
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
    resizeMode: 'stretch',
    width: screenWidth * 0.9,
    height: screenHeight * 0.08,
  },
  text: {
    alignItems: 'center',
    fontSize: normalize(30),
    fontWeight: '500',
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 20,
  },
  styleTextInput: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    //backgroundColor: '#15AD9C',
    height: screenHeight * 0.06,
    borderRadius: 20,
  },
});

export default LoginScreen;

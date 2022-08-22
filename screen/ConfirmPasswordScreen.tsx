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
  Dimensions,
  Alert,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {normalize} from '../assets/theme';
import {useTheme} from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const RegisterScreen = ({navigation}) => {
  const [type, setType] = React.useState({
    confirm: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = text => {
    if (text.length === 6) {
      setType({
        ...type,
        check_textInputChange: true,
      });
    } else {
      setType({
        ...type,
        check_textInputChange: false,
      });
    }
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
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{
            padding: 20,
          }}>
          <AntDesign name="left" size={normalize(30)} color="#111" />
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: 20}}>
        <View style={styles.login}>
          <Image style={styles.image} source={require('../image/login.png')} />
        </View>

        <View style={{marginTop: 10}}>
          <Text style={[styles.text, {color: colors.text}]}>
            Xác nhận mật khẩu{' '}
          </Text>
        </View>

        <View style={{marginTop: 10,borderBottomWidth:1}}>
          <Text style={styles.text1}>Xin vui lòng tạo mật khẩu</Text>
          <TextInput
            maxLength={6}
            style={{fontSize: normalize(16), color:'#111111'}}
            //secureTextEntry={type.secureTextEntry ? true : false}
            keyboardType="numeric"
            //autoComplete="off"
            value={type.password}
            onChangeText={text=>{
              textInputChange(text)
              setType(type=>{
                type.password=text
                return{...type}
              })
            }}
            placeholder="Xin vui lòng tạo mật khẩu"
          />
        </View>

        <View style={{marginTop: 10, borderBottomWidth:1 }}>
          <Text style={styles.text1}>Xin vui lòng nhập lại mật khẩu</Text>
          <TextInput
            maxLength={6}
            style={{fontSize: normalize(16), color:'#111111'}}
            //secureTextEntry={type.secureTextEntry ? true : false}
            keyboardType="numeric"
            //autoComplete="off"
            placeholder="Xin vui lòng nhập lại mật khẩu"
            value={type.confirm}
            onChangeText={text=>{
              textInputChange(text)
              setType(type=>{
                type.confirm= text
                return{...type}
              })
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: 8,
            marginBottom: 10,
            marginTop: -10,
          }}
        />
      </View>

      {type.check_textInputChange ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
            if (type.password !== type.confirm){
              Alert.alert('Thông báo', 'Mật khẩu không khớp')
            }
            else{
              navigation.navigate('LoginScreen')
              Alert.alert('Thông báo ', 'Cập nhật mật khẩu thành công')
            }
            }}
            style={{
              backgroundColor: '#15AD9C',
              paddingHorizontal: 20,
              marginTop: 10,
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
              marginTop: 10,
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  login: {
    alignItems: 'center',
    marginTop: 10,
  },

  image: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.1,
    marginTop: 10,
    resizeMode: 'stretch',
  },
  text: {
    alignItems: 'center',
    fontSize: normalize(30),
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  text1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    textAlign: 'justify',
    color: '#333',
    fontSize: normalize(18),
    //marginBottom:20
  },
});

export default RegisterScreen;

import React, {useEffect} from 'react';
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
  Keyboard,
} from 'react-native';



import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import {StoreContext} from '../component/Context';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const ForgetScreen = ({navigation, route}) => {
  const [type, setType] = React.useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    otp: '',
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

  const {colors} = useTheme();

  const theme = useTheme();

  const store = React.useContext(StoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ccc" />
      <View
        style={{
          margin: 10,
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <AntDesign name="left" size={normalize(30)} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View style={styles.login}>
          <Image style={styles.image} source={require('../image/login.png')} />
        </View>

        <View style={{marginTop: 20}}>
          <Text style={[styles.text, {color: colors.text}]}>
            Lấy lại mật khẩu{' '}
          </Text>
        </View>

        <View>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '85%',
              textAlign: 'justify',
              color: '#333',
              fontSize: normalize(18),
            }}>
            Nhập số điện thoại bạn đã dùng để đăng kí tài khoản
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
            marginTop: 10,
          }}>
          <Foundation
            name="telephone"
            size={normalize(20)}
            color={colors.text}
          />

          <TextInput
            maxLength={10}
            style={{flex: 1, fontSize: normalize(18), color: colors.text}}
            placeholder="Nhập số điện thoại"
            defaultValue={store.state.USER_ACCOUNT}
            keyboardType="numeric"
            onChangeText={val => textInputChange(val)}
          />
        </View>
        {type.check_textInputChange ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('OTP')}
            style={{
              backgroundColor: '#15AD9C',
              paddingHorizontal: 20,
              marginBottom: 30,
              borderRadius: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
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
        ) : (
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
              width: '100%',
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
        )}
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
    marginBottom: 30,
  },
});

export default ForgetScreen;

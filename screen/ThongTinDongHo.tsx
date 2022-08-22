import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Feather from 'react-native-vector-icons/Feather';

import ThongSoDongHo from './ThongSoDongHo';
import {StoreContext} from '../component/Context';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

// neu cac truong giong voi du lieu API tra ve
//  thi dung lenh
//  (const result = response.data;

// setType(type => {
//   return {...result};
// });)
// neu cac truong khong giong hoan toan voi cac truong API
// thi ta dung nhu sau
//  (const result = response.data;

// setType(type => {
//   response.data=result.METER_NO(ten bien);
// });)

export default function ThongTinDongHo({navigation}) {
  const colors = useTheme();
  const store = useContext(StoreContext);
  const UserNameContextData = useContext(StoreContext);

  const [type, setType] = React.useState({
    UserAccount: '',
    // METER_NO: '',
    // METER_NAME: '',
    // METER_MODEL_DESC: '',
    // CUSTOMER_CODE: '',
    // CUSTOMER_NAME: '',
    // ADDRESS: '',
    // PHONE: '',
    // EMAIL: '',
    // CREATED: '',
    // LINE_NAME: '',
    // MODULE_NO: '',
  });

  const [isLoading, setisLoading] = useState(true);

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />
        <View>
          <View style={styles.headerButton}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{position: 'absolute', left: 0}}
                onPress={() => navigation.navigate('Home1')}>
                <Feather
                  name="arrow-left"
                  size={normalize(25)}
                  color={'#ffff'}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Thông Tin Đồng Hồ</Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.image}
              source={require('../image/waterClock.png')}
            />
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text style={[styles.text1, {color: colors.colors.text}]}>
              Số điện thoại{' '}
            </Text>
            <TextInput
              value={store.state.USER_ACCOUNT}
              keyboardType="numeric"
              style={[styles.textInput, {color: colors.colors.text}]}
              placeholder="Nhập số điện thoại"
              onChangeText={text => {
                store.setState(state => {
                  state.USER_ACCOUNT = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SoLuongDongHo')}>
              <Text style={styles.text2}>Kiểm tra thông tin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    backgroundColor: '#15AD9C',
    height: screenHeight / 8,
    width: screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    justifyContent: 'center',
    fontSize: normalize(25),
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text1: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text2: {
    color: '#ffffff',
    marginHorizontal: 20,
    fontSize: normalize(20),
    fontWeight: '400',
  },
  text3: {
    marginLeft: 95,
    marginTop: 30,
    marginBottom: -30,
    fontSize: 20,
    fontWeight: 'normal',
    width: screenWidth,
  },
  textInput: {
    marginBottom: 20,
    borderBottomWidth: 0,
    borderColor: '#dddd',
    fontSize: normalize(15),
  },
  image: {
    resizeMode: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: screenWidth,
    height: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    height: screenHeight * 0.06,
    borderRadius: 20,
    backgroundColor: '#15AD9C',
  },
  imageBg: {
    height: '100%',
  },
});

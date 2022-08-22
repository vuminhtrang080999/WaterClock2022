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
  TextInput,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AntDesign from 'react-native-vector-icons/AntDesign';

import ThongSoDongHo from './ThongSoDongHo';
import {StoreContext} from '../component/Context';
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
  const store = useContext(StoreContext);
  const UserNameContextData = useContext(StoreContext);
  const [type, setType] = React.useState({
    UserAccount: '',
    OldPassword: '',
    NewPassword: '',
  });

  const [isLoading, setisLoading] = useState(true);

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />
        <View style={styles.headerButton}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={normalize(20)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Đổi mật khẩu</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            style={styles.image}
            source={require('../image/support.png')}
          />

          <View style={{marginBottom: 8, marginLeft: 15}}>
            <Text style={styles.text1}>Số điện thoại </Text>
            <TextInput
              style={{fontSize: normalize(15)}}
              value={store.state.USER_ACCOUNT}
              keyboardType="numeric"
              placeholder="Nhập số điện thoại"
              onChangeText={text => {
                store.setState(state => {
                  state.USER_ACCOUNT = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View style={{marginBottom: 8, marginLeft: 15}}>
            <Text style={styles.text1}>Mật khẩu cũ </Text>
            <TextInput
              style={{fontSize: normalize(15)}}
              value={type.OldPassword}
              keyboardType="numeric"
              placeholder="Nhập mật khẩu cũ"
              autoCapitalize="sentences"
              textAlignVertical="top"
              onChangeText={text => {
                setType(state => {
                  state.OldPassword = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View style={{marginBottom: -15, marginLeft: 15}}>
            <Text style={styles.text1}>Mật khẩu mới</Text>
            <TextInput
              style={{fontSize: normalize(15)}}
              value={type.NewPassword}
              keyboardType="numeric"
              placeholder="Nhập mật khẩu mới"
              autoCapitalize="sentences"
              textAlignVertical="top"
              onChangeText={text => {
                setType(state => {
                  state.NewPassword = text;
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
              onPress={() => {
                axios
                  .get('http://222.252.14.147:6060/api/ChangePass', {
                    params: {
                      UserAccount: store.state.USER_ACCOUNT,
                      OldPassword: type.OldPassword,
                      NewPassword: type.NewPassword,
                    },
                  })
                  .then(function (response) {
                    //console.log('response:', response.data)
                    if (response.data.CODE === '1') {
                      // navigation.navigate('Home');
                      Alert.alert('Thông báo ', 'Đổi mật khẩu thành công');
                      console.log('response:', response.data);
                    } else {
                      Alert.alert('Thông báo', 'Lỗi');
                      console.log('response:', response.data);
                    }
                  })
                  .catch(function (error) {
                    console.log('error:', error);
                  });
              }}
              style={styles.button}>
              <Text style={styles.text2}>Đổi mật khẩu</Text>
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
  image: {
    resizeMode: 'center',
    width: screenWidth,
    height: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    backgroundColor: '#15AD9C',
    height: screenHeight * 0.06,
    borderRadius: 20,
  },
  imageBg: {
    height: '100%',
  },
});

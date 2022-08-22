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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {StoreContext} from '../component/Context';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const AddProfileScreen = ({navigation, route}) => {

  const conditionName = /[\S]{2,6}( )\S+/;

  const conditionEmail = /\S+@\S+\.\S+/;

  const [type, setType] = React.useState({
    UserAccount: '',
    Password: '',
    UserID: '',
    UserName: '',
    Address: '',
    Email: '',
    Note: '',
    Tel: '',
  });

  let backGround = '#cccccc';
  const isValid =
    conditionName.test(type.UserName) &&
    conditionEmail.test(type.Email) &&
    type.Tel.trim().length === 10 &&
    type.Address.trim().length !== 0;
  if (isValid) {
    backGround = '#15AD9C';
  }

  const {colors} = useTheme();

  const theme = useTheme();

  const { User, Pass} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ccc" />
      <View
        style={{
          //backgroundColor: 'gold',
          //margin: 10,
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}>
          <AntDesign name="left" size={normalize(30)} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View
        style={styles.image}>
        <Image style={styles.login} source={require('../image/profile.png')} />
      </View>

      <View
        style={{
          marginTop: 5,
          width: screenWidth * 0.95,
          //backgroundColor: 'pink',
        }}>
        <Text style={[styles.text, {color: colors.text}]}>
          Cập nhật thông tin
        </Text>
      </View>

      <View>
        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>Họ và tên</Text>
          <View style={styles.styleTextInput}>
            <TextInput
              onEndEditing={val => {
                if (conditionName.test(type.UserName)) {
                  console.log('1');
                  setType(type => {
                    type.UserName = val.nativeEvent.text.toUpperCase();
                    return {...type};
                  });
                } else {
                  setType(type => {
                    type.UserName = '';
                    return {...type};
                  });
                  Alert.alert('Thông báo:', 'Vui lòng điền dầy đủ thông tin');
                }
              }}
              placeholder="Nhập họ và tên"
              style={{color: colors.text, fontSize: normalize(18)}}
              value={type.UserName}
              keyboardType="default"
              autoComplete="off"
              onChangeText={text => {
                setType(state => {
                  state.UserName = text;
                  return {...state};
                });
              }}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>Địa chỉ </Text>
          <View style={styles.styleTextInput}>
            <TextInput
              placeholder="Nhập địa chỉ"
              value={type.Address}
              keyboardType="default"
              autoComplete="off"
              style={{color: colors.text, fontSize: normalize(18)}}
              onChangeText={text => {
                setType(state => {
                  state.Address = text;
                  return {...state};
                });
              }}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>Email</Text>
          <View style={styles.styleTextInput}>
            <TextInput
              onEndEditing={val => {
                if (conditionEmail.test(type.Email)) {
                  console.log('1');
                } else {
                  Alert.alert('Thông báo:', 'Sai định dạng');
                }
              }}
              placeholder="Nhập email"
              style={{color: colors.text, fontSize: normalize(18)}}
              value={type.Email}
              keyboardType="default"
              autoComplete="off"
              onChangeText={text => {
                setType(state => {
                  state.Email = text;
                  return {...state};
                });
              }}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>Số điện thoại</Text>
          <View style={styles.styleTextInput}>
            <TextInput
              placeholder="Nhập số điện thoại"
              value={User}
              keyboardType="default"
              autoComplete="off"
              style={{color: colors.text, fontSize: normalize(18)}}
              editable={false}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.text1}>Ghi chú</Text>
          <View style={styles.styleTextInput}>
            <TextInput
              placeholder="Thêm ghi chú"
              value={type.Note}
              keyboardType="default"
              autoComplete="off"
              style={{color: colors.text, fontSize: normalize(18)}}
              onChangeText={text => {
                setType(state => {
                  state.Note = text;
                  return {...state};
                });
              }}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          axios
            .get('http://222.252.14.147:6060/api/CreateUser', {
              params: {
                UserAccount:User,
                Password: Pass,
                UserName: type.UserName,
                Address: type.Address,
                Tel: type.Tel,
                Email: type.Email,
                Note: type.Note,
              },
            })
            .then(function (response) {
              console.log('response.data:', response.data);
              if (response.data.CODE === '1') {
                navigation.navigate('Welcome');
                Alert.alert('Thông báo', 'Cập nhật thành công');
              }  else{
                //console.log('Thông tin sai');
                Alert.alert('Thông báo ', response.data.MESSAGE);
                //console.log('response:', response.data);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
        style={{...styles.button, backgroundColor: backGround}}>
        <Text style={styles.text2}>Tiếp tục</Text>
        <View style={{flex: 1}}></View>
        <MaterialIcons
          name="navigate-next"
          size={40}
          color="#ffff"
          style={{
            marginRight: 30,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  login: {
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'gold',
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: normalize(30),
    fontWeight: '500',
  },
  icon: {
    marginHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 20,
  },
  styleTextInput: {
    marginTop: 10,
    width: '90%',
    paddingHorizontal: 10,
    borderBottomWidth: 0.3,
  },
  text1: {
    fontSize: normalize(18),
    marginLeft: 15,
    width: '100%',
    color: '#111111',
  },
  text2: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: '#fff',
    marginRight: 210,
    marginLeft: 40,
  },
  button: {
    backgroundColor: '#15AD9C',
    borderRadius: 30,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: screenHeight * 0.05,
    marginTop: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'gold',
    marginTop: 5,
    height: '15%',
  },
});

export default AddProfileScreen;

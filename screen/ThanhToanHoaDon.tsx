import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const USE_LITE_CREDIT_CARD_INPUT = false;

export default function ThanhToanHoaDon({navigation}) {
  const onChange = formData => {
    console.log(JSON.stringify(formData, null, ''));
  };
  const onFocus = field => {
    console.log(field);
  };

  const colors = useTheme();
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />
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
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thêm Phương Thức Thanh Toán</Text>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <Image style={styles.image} source={require('../image/Pay.png')} />
          <View style={{paddingTop: 5}}>
            <Text style={[styles.text1, {color: colors.colors.text}]}>
              Lựa chon phương thức thanh toán
            </Text>
          </View> 

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BankAccount')}
              style={styles.button1}>
              <Text style={styles.text4}>Tài Khoản Ngân Hàng</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViMoMo')}
              style={styles.button1}>
              <Text style={styles.text4}>Ví MOMO</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => {}} style={styles.button1}>
              <Text style={styles.text4}>Viettel Money</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.text2}>Thanh Toán </Text>
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
    marginRight: 85,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text1: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text2: {
    marginHorizontal: 20,
    fontSize: normalize(20),
    fontWeight: '400',
    color: '#ffff',
  },
  text4: {
    marginHorizontal: 20,
    fontSize: normalize(18),
    fontWeight: '400',
    color: '#ffff',
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
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    backgroundColor: '#15AD9C',
    height: screenHeight * 0.05,
    borderRadius: 20,
  },

  button1: {
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.85,
    backgroundColor: '#15AD9C',
    height: screenHeight * 0.04,
    borderRadius: 20,
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  imageBg: {
    height: '100%',
  },
});

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
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import { normalize } from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function TravalokaScreen({navigation}) {
  const colors = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#15AD9C'} />
      <View>
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
              onPress={() => navigation.navigate('XemThemSanUuDai')}>
              <AntDesign name="left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Chi Tiết Ưu Đãi</Text>
          </View>
        </View>

        <ScrollView style={{marginBottom:120}}>
          <Image
            style={styles.image}
            source={require('../image/muasam4.jpg')}
          />
          <View>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              Ưu đãi 100k cho khách hàng đặt vé máy bay trên Traveloka
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                Điều kiện áp dụng ưu đãi{'\n'}
                {'\n'}Ưu đãi 100.000 VNĐ khi đặt vé máy bay tối thiểu từ
                1.000.000 VNĐ
                {'\n'}Khách hàng mới, lần đầu đặt vé máy bay trên Traveloka
                {'\n'}Mỗi khách hàng (tương ứng với 1 số điện thoại, 1 email, 1
                tài khoản thẻ tín dụng, 1 thiết bị) được sử dụng 1 mã trong thời
                gian diễn ra chương trình.
                {'\n'}
                {'\n'}Thời gian đặt vé: hết ngày 30/06/2020
                {'\n'}
                {'\n'}Thời gian bay: không giới hạn.
                {'\n'}
                {'\n'}Mã ưu đãi: 1STQUYEN
                {'\n'}Khi đặt vé máy bay trên Traveloka, đến phần thanh toán,
                các bạn nhập mã ưu đãi vào nhé. Các bạn xem thêm hướng dẫn đặt
                vé máy bay trên Traveloka tại đây.
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthScreen,
    height: heightScreen,
  },
  headerButton: {
    paddingHorizontal:10,
    height: heightScreen/8,
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: '#15AD9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: normalize(25),
    fontWeight: 'bold',
    color: '#ffff',
  },

  title: {
    fontFamily: 'OpenSans-Bold',
    padding: 10,
    fontSize: normalize(23),
  },

  content: {
    fontFamily: 'SourceSerifPro-Light',
    textAlign: 'justify',
    lineHeight: 20,
  },
  image: {
    width: widthScreen * 0.95,
    height: heightScreen / 4,
    borderRadius: 10,
    margin: 10,
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  text1: {
    fontFamily: ' OpenSans-BoldItalic',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginHorizontal: 5,
  },
});

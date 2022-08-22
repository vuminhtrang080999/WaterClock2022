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

export default function Shopee({navigation}) {
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
              onPress={() => navigation.navigate('XemThemMuaSam')}>
              <AntDesign name="left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Chi Tiết Ưu Đãi</Text>
          </View>
        </View>

        <View >
        <ScrollView style={{height:heightScreen*0.8}} >
          <Image
            style={styles.image}
            source={require('../image/quangcao1.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              SIÊU SALE 25.6 LƯỚT SHOPEE NGAY
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontFamily: 'OpenSans-ExtraBoldItalic',
                    fontSize:normalize(16)
                  }}>
                  CÁC CHƯƠNG TRÌNH NỔI BẬT CỦA SHOPEE 25.6
                </Text>
                {'\n'}
                {'\n'}
                <Text
                  style={{
                    fontWeight: 'bold',

                    fontFamily: 'OpenSans-ExtraBoldItalic',
                    fontSize:normalize(15)
                  }}>
                  1. Săn Voucher trước giờ G
                </Text>
                {'\n'}
                {'\n'}
                Vào mỗi dịp Sale Shopee chương trình đều sẽ có ưu đãi những
                Voucher lưu mã sớm, trước giờ G. Đối với Shopee sale 25.6 thì
                cũng không ngoại lệ. Các voucher mở sớm sẽ được bắt đầu từ ngày
                22H ngày 24/6.
                {'\n'}
                {'\n'}Voucher hoàn 8% xu tối đa 70K xu, đơn từ 500K, áp dụng
                toàn sàn
                {'\n'}
                {'\n'}Voucher giảm 15% tối đa 15K, đơn từ 99K, áp dụng toàn sàn
                {'\n'}
                {'\n'}Voucher giảm 8% tối đa 50K, đơn từ 250K, áp dụng cho sản
                phẩm Shopee Mall
                {'\n'}
                {'\n'}Chương trình mở mới mỗi 30 phút, cụ thể vào 4 khung giờ
                HOT sau:
                {'\n'}
                {'\n'}
              </Text>
              <Image
                resizeMode="stretch"
                source={require('../image/shopee-25-6-1.jpg')}
                style={{width: widthScreen * 0.93, height: 200, marginTop: -20}}
              />

              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                - Săn mã lúc 22h: Voucher trị giá 50K{'\n'}
                {'\n'}- Săn mã lúc 22h30: Voucher trị giá 100K{'\n'}
                {'\n'}- Săn mã lúc 23h: Voucher trị giá 200K{'\n'}
                {'\n'}- Săn mã lúc 23h30: Voucher trị giá 300K{'\n'}
                {'\n'}
                Săn Voucher từ tối ngày 24, dùng cho Shopee 25.6 để có thêm
                nhiều ưu đãi hơn khi mua hàng nhé các bạn.{'\n'}
                {'\n'}
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontFamily: 'OpenSans-ExtraBoldItalic',
                    color: colors.colors.text,
                    fontSize:normalize(16)
                  }}>
                  2. Voucher chớp nhoáng
                </Text>
                {'\n'}
                {'\n'}
              </Text>
              <Image
                resizeMode="stretch"
                source={require('../image/shopee-25-61-2.jpg')}
                style={{width: widthScreen * 0.93, height: 220, marginTop: -20}}
              />
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                Duy nhất 16H ngày 25.6, một số lượng có hạn Voucher trị giá 30K
                dành cho tất cả khách hàng đang chờ đón các bạn. Đừng quên mốc
                thời gian quan trọng này nhé.
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'OpenSans-ExtraBoldItalic',
                  fontSize:normalize(16)
                }}>
                {'\n'}
                3. Shopee sale 25.6- Khung giờ vàng săn sale
              </Text>
              <Image
                resizeMode="stretch"
                source={require('../image/shopee-25-61-3.jpg')}
                style={{width: widthScreen * 0.93, height: 220, marginTop: -20}}
              />
            </View>
          </View>
        </ScrollView>
        </View>


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
    height: heightScreen / 8,
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: '#15AD9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
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

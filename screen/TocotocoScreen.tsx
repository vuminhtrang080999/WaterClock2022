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
import { useTheme } from '@react-navigation/native';
import { normalize } from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function TocotocoScreen({navigation}) {

  const colors = useTheme();

  return (
    <SafeAreaView style={{flex:1}}>
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
            source={require('../image/muasam2.jpg')}
          />
          <View>
            <Text style={[styles.title, {color:colors.colors.text}]}>
              TocoToco: ĐỒNG GIÁ 36K TOÀN MENU SIZE L
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text style={{ marginTop: 10 , fontFamily: 'OpenSans-Italic',color: colors.colors.text,fontSize:normalize(15)}}>
                Đồng giá 36K toàn Menu size L {'\n'} {'\n'}- Áp dụng tất cả các
                sản phẩm đồ uống{'\n'}- Ưu đãi không áp dụng đối với topping
                {'\n'}
                {'\n'}
                ĐẶC BIỆT: MỪNG SINH NHẬT TOCOTOCO 8 TUỔI 10/11/2021 – 20/12/2021
                {'\n'}
                {'\n'}- Khách hàng mua các sản phẩm của ToCoToCo trên app sẽ
                được tham gia quay số may mắn trúng thưởng nhiều giải thưởng:
                {'\n'}
                {'\n'}* GIẢI ĐẶC BIỆT TUẦN: IPHONE 13 PRO MAX và Dây chuyền vàng
                Logo ToCoToCo.{'\n'}* GIẢI MAY MẮN HÀNG NGÀY: quà tặng,
                voucher,...{'\n'}{'\n'}
                Thể lệ chương trình:{'\n'}{'\n'}
                - Giải thưởng mỗi ngày: KH quét mã QR trên in bill 
                -> Nhập thông tin -> Quay "Vòng quay may mắn"
                 -> Nhận code ưu đãi, giữ bill và đổi thường tại cửa hàng.(100% trúng giải)
                 {'\n'}{'\n'}- Giải đặc biệt tuần: Livestream trao giải trên fanpage ToCoToCo hàng tuần
                 {'\n'}{'\n'}KH quét mã QR in trên bill -> Nhập thông tin -> Giữ bill và 
                 tham gia livestream trao giải định kỳ hàng tuần.{'\n'}{'\n'}THỜI GIAN ÁP DỤNG
                 {'\n'}- Khung giờ: 9h00 - 22h00{'\n'}- Áp dụng tất cả các ngày trong tuần
                 {'\n'}{'\n'}LƯU Ý{'\n'}- Khách hàng được phép đến sớm hoặc muộn hơn 15 phút so với giờ hẹn đến
                 {'\n'}- Chương trình chỉ áp dụng với khách dùng tại cửa hàng & mua mang về. Không áp dụng giao hàng
                 {'\n'}- Không áp dụng đồng thời với các chương trình khác của Tocotoco
                 {'\n'}- Mã giảm giá không có giá trị quy đổi thành tiền mặt
                 {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}                
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
    color:'#ffff'
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
    height: heightScreen/4,
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

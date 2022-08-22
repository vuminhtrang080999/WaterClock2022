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
import {normalize} from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function BacTom({navigation}) {
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
              <AntDesign name="left" size={normalize(20)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Chi Tiết Ưu Đãi</Text>
          </View>
        </View>

        <ScrollView style={{marginBottom: 130}}>
          <Image
            style={styles.image}
            source={require('../image/quangcao6.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              💥 ƯU ĐÃI ĐẶC BIỆT - MUA 2 TẶNG 1 💥{'\n'}
              {'\n'}
              🎂 BÁC TÔM SINH NHẬT 3 TUỔI 🎂
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize: normalize(15),
                  fontWeight: '400',
                }}>
                🔖 Cam sành hữu cơ - Mua 2 tặng 1{'\n'}
                {'\n'}
                🔖 Cam xoàn hữu cơ - Mua 2 tặng 1{'\n'}
                {'\n'}
                🍀 Nhân dịp kỷ niệm sinh nhật Bác Tôm - 17B9 Phạm Ngọc Thạch xin
                gửi cả nhà chương trình #ưu_đãi đặc biệt đối với sản phẩm cam
                hữu cơ{'\n'}
                {'\n'}
                🍀 Cam sành canh tác theo phương pháp hữu cơ thuận tự nhiên nên
                quả cam có vị rất đặc biệt mà kể những khách hàng đã lâu không
                ăn cam cũng sẽ dễ dàng nhận ra.{'\n'}
                {'\n'}
                🍀 Cam xoàn Bác Tôm được canh tác theo đúng tiêu chuẩn VietGap,
                cam chín tự nhiên, không chất bảo quản và vận chuyển đúng quy
                trình, thời gian cho phép để đến với tay khách hàng.{'\n'}
                {'\n'}
                Ngoài ra, trong dịp sinh nhật Bác Tôm - Phạm Ngọc Thạch từ 17
                đến 19/7 còn diễn ra các ưu đãi vô cũng hấp dẫn khác{'\n'}
                {'\n'}
                🎁 Ưu đãi 11% 20% 50%{'\n'}
                {'\n'}
                🎁 Đồng giá gà, ngan, vịt{'\n'}
                {'\n'}
                🎁 Thịt lợn quế giảm ngay 5%{'\n'}
                {'\n'}
                👉 ƯU ĐÃI LIỀN TAY - MUA NGAY KẺO LỠ{'\n'}
                {'\n'}
                👉 BÁC TÔM - 17B9 PHẠM NGỌC THẠCH{'\n'}
                {'\n'}
                📱Liên hệ ngay với Bác Tôm qua hotline 0911008006{'\n'}
                {'\n'}
                📱Hoặc comment, inbox fanpage để đặt hàng ngay hôm nay.{'\n'}
                {'\n'}
                🛒Website: bactom.com{'\n'}
                {'\n'}
                🚀Miễn phí giao hàng thần tốc{'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  ‼CAM KẾT đổi trả nếu hàng không đảm bảo chất lượng trong 48h
                </Text>
                {'\n'}
                {'\n'}
                #bactom#sinh_nhật #phạm_ngọc_thạch #3_tuổi #ưu_đãi
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
    paddingHorizontal: 10,
    fontSize: normalize(18),
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
  text3: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-ExtraBoldItalic',
  },
});

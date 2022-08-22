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

export default function TigerSugarScreen({navigation}) {
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
            source={require('../image/muasam5.jpg')}
          />
          <View>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              ƯU ĐÃI NGỌT NGÀO
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                Trong suốt tuần lễ chào mừng ngày Quốc Tế Phụ Nữ, từ ngày
                07/3-09/3 các Tigerians sẽ có những trải nghiệm mới với
                TigerSugar Delivery với những ưu đãi cực kỳ hấp dẫn.{'\n'}
                {'\n'}
                Năm nay nhà Hổ mở tiệc ngọt ngào như một lời chúc đến toàn thể
                các “fan girl” với cực nhiều ưu đãi:
                {'\n'}MUA 2 CỐC BẤT KỲ TẶNG 1 GÓI KẸO ĐƯỜNG HỔ khi mua trực tiếp
                tại các cơ sở của TigerSugar Delivery
                {'\n'}
                {'\n'}✅ Đặc biệt hơn, khi order nhà Hổ trên app Baemin trong 2
                ngày 8-9/3, nhập code “TIGERSUGAR8K” để được giảm 40K cho đơn từ
                48K trở lên, và với hoá đơn từ 3 cốc trở lên sẽ được tặng Kẹo
                Đường Hổ đó nha{'\n'}
                {'\n'}
                😍 Nhà Hổ đang đợi để cùng chung vui 8/3 cùng toàn dân Tigerians
                đây nha Cơ hội này chỉ có một, không phải đi đâu xa, ngồi nhà
                order là nhận quà, gọi ngay đứa bạn thân để cùng order và tận
                hưởng bữa tiệc sinh nhật của nhà Hổ ngay nha{'\n'}
                {'\n'}
                HÀ NỘI:{'\n'}
                {'\n'}
                {'\n'}🏠 20-B10 Phạm Ngọc Thạch – Đống Đa – HN
                {'\n'}🏠 05 Thái Phiên – Hai Bà Trưng – Hà Nội
                {'\n'}🏠 167 Xuân Thủy – Cầu Giấy – Hà Nội
                {'\n'}🏠 503 Nguyễn Trãi – Thanh Xuân – Hà Nội
                {'\n'}🏠 64 Láng Hạ – Đống Đa – Hà Nội
                {'\n'}🏠 124 Ngọc Lâm – Long Biên – Hà Nội
                {'\n'}🏠 69 Đào Tấn – Ba Đình – Hà Nội
                {'\n'}🏠 57 Tạ Quang Bửu – Bách Khoa – Hà Nội
                {'\n'}🏠 85 Vĩnh Hưng – Hoàng Mai – Hà Nội
                {'\n'}🏠 177 Quang Trung – Hà Đông – Hà Nội
                {'\n'}🏠 64 Quán Sứ – Hoàn Kiếm – Hà Nội
                {'\n'}🏠 B4-26 VinHomes Gardenia – Hàm Nghi – Hà Nội
                {'\n'}🏠 18 Phố Vĩnh Tuy – Hai Bà Trưng – Hà Nội
                {'\n'}🏠 18 Nguyễn Khang – Cầu Giấy – Hà Nội
                {'\n'}🏠 436 Tây Sơn – Đống Đa – Hà Nội
                {'\n'}🏠 Emerald Mỹ Đình – Nam Từ Liêm – Hà Nội
                {'\n'}🏠 56 Châu Long – Ba Đình – Hà Nội
                {'\n'}🏠 182 Trung Kính – Cầu Giấy – Hà Nội
                {'\n'}🏠 Ô số 9-Liền kề 21 – Đô thị mới Văn Khê – Hà Đông – Hà
                Nội
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
    height: heightScreen/8,
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

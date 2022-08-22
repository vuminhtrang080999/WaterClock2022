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

export default function Eimich({navigation}) {
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

        <ScrollView style={{marginBottom:150}}>
          <Image
            style={styles.image}
            source={require('../image/quangcao7.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color:colors.colors.text}]}>
              SHOWROOM ELMICH 316 PHỐ HUẾ: MỪNG SINH NHẬT DEAL GIÁ SỐC VỚI NGÀN
              ƯU ĐÃI
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15),
                  fontWeight:'500'
                }}>
                <Text style={styles.text3}>
                  Từ ngày 17/06/ đến 21/07, Mừng sinh nhật Showroom Elmich Phố
                  Huế, thương hiệu gia dụng cao cấp Châu Âu tưng bừng tổ chức kỉ
                  niệm và tung ra nhiều chương trình khuyến mại hấp dẫn trong
                  tuần lễ sinh nhật này. Rất nhiều sản phẩm gia dụng cao cấp của
                  Elmich đang được chờ đón bạn tại đây.
                </Text>
                {'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  Flash sale –Deal giá sốc mừng sinh nhật
                </Text>
                {'\n'}
                {'\n'}
                Những mặt hàng được giảm giá đặc biệt lên tới 46%{'\n'}
                {'\n'}
                👉 Phích giữ nhiệt ELMICH Inox 304 500ml 6386 chỉ còn 139K{'\n'}
                {'\n'}
                👉 Bộ nồi Inox Smartcook 3 chiếc cỡ 16,20,24cm-SMR3 giảm giá chỉ
                còn 869K{'\n'}
                {'\n'}
                👉 Chảo giả đúc sâu lòng màu vàng nhạt đáy từ 24cm giảm giá chỉ
                còn từ 235K{'\n'}
                {'\n'}
                👉 Chảo chống dính cao cấp đáy từ EL7102 giảm giá chỉ còn 219K
                {'\n'}
                {'\n'}
                👉 Bình siêu tốc Elmich 1.7L giảm giá chỉ còn 380K{'\n'}
                {'\n'}
                Những sản phẩm gia dụng cao cấp được giảm giá tới 35% thực sự
                hấp dẫn, là cơ hội mua sắm đồ gia dụng tân trang căn bếp thêm
                sang trọng và tiện thi, phong cách Châu Âu cho mọi gia đình.
                {'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  Đổi cũ lấy mới với giá chỉ từ 170 K{' '}
                </Text>
                {'\n'}
                {'\n'}Đáng chú ý là chường trình đổi cũ lấy mới với giá cực sốc
                chỉ từ 170K có ngay những sản phẩm gia dụng cao cấp từ thương
                hiệu gia dụng cao cấp Châu Âu Elmich . Nồi, chảo chống dính
                Vitaplus ở nhiều size cho khách hàng lựa chọn. Dòng sản phẩm có
                độ dày lý tưởng, truyền nhiệt đều, giữ nhiệt lâu, bảo toàn
                vitamin và dinh dưỡng trong quá trình nấu. Sử dụng tốt trên tất
                cả các loại bếp: Bếp từ, bếp ga, bếp hồng ngoại... nên càng tăng
                thêm tính tiện ích cho mọi gia đình.{'\n'} {'\n'}
                Ngoài ra, cũng trong sịp sinh nhật showroom 316 Phố Huế, Elmich
                còn triển khai nhiều chương trình ưu đãi bất ngờ khác. Cơ hội
                vàng mua sắm đồ nhà bếp thương hiệu gia dụng cao cấp Châu Âu cho
                mọi gia đình.{'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  CHƯƠNG TRÌNH DIỄN RA TỪ 17/04 đến 21/04/2019
                </Text>
                {'\n'}
                {'\n'}Địa điểm: Số 316 Phố Huế, Quận Hai Bà Trưng, Hà Nội{'\n'}
                {'\n'}
                ĐT: (0243) 976 1613{'\n'}
                {'\n'}
                Email: Sr.phohue@elmich.vn{'\n'}
                {'\n'}
                Hotline: 1900636925
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
  text3: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-ExtraBoldItalic',
  },
});

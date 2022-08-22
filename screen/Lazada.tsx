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

export default function Lazada({navigation}) {
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

        <ScrollView style={{marginBottom:120}}>
          <Image
            style={styles.image}
            source={require('../image/quangcao2.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              LAZADA SIÊU HỘI SALE HÈ 2022
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize: normalize(15)
                }}>
                <Text style={styles.text3}>
                  Chương trình Siêu Sale Hè Lazada 6.6 sẽ được chia thành 3 giai
                  đoạn:
                </Text>
                {'\n'} {'\n'}
                <Text style={styles.text3}>NỘI DUNG ƯU ĐÃI</Text>:{'\n'}
                {'\n'}
                Giai đoạn khởi động (3 – 5/6/2022): Trong giai đoạn này, danh
                sách sản phẩm cũng như các mã giảm giá sẽ được cập nhật trước.
                Bạn có thể thu thập voucher tích lũy để mua sắm thả ga trên
                Lazada.vn trong đợt sale Lazada 6.6 này nhé!{'\n'}
                {'\n'}
                Giai đoạn bùng nổ (6 – 10/6/2022): Đây là giai đoạn chính của
                chương trình, với nhiều khuyến mại hời nhất. Đặc biệt, từ 0-2h
                ngày 6/6/2022, rất nhiều thương hiệu lớn trên Lazada Mall sẽ
                sale cực mạnh và đưa ra nhiều mã giảm giá Lazada. Bạn đừng quên
                đặt báo thức trước để canh sẵn giảm giá và chọn mua sản phẩm
                mình mong muốn với giá hời nhé.{'\n'}
                {'\n'}
                <Text style={styles.text3}>Có gì trong Lazada 6.6?</Text>
                {'\n'}
                {'\n'}
                <Text style={styles.text3}>Deal 0Đ cho người dùng mới </Text>
                {'\n'}
                {'\n'}
                Khi tải ứng dụng Lazada trong dịp lễ hội sale lần này, bạn sẽ
                được tặng ngay gói voucher đặc biệt kèm mã miễn phí vận chuyển
                trị giá 70K. {'\n'}
                {'\n'}
                <Text style={styles.text3}>Voucher tích lũy đến 800K </Text>
                {'\n'}
                {'\n'}
                Voucher tích lũy là một kiểu ưu đãi trên Lazada, nhưng đặc biệt
                ở chỗ bạn có thể áp tận 5 loại voucher khác nhau, áp dụng cho
                sản phẩm từ nhiều gian hàng, và không giới hạn mức giảm tối đa.
                Khi sử dụng voucher tích lũy và các voucher khác trên Lazada.vn
                bạn có thể tiết kiệm rất nhiều c hi phí khi mua hàng.{'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  Lịch săn voucher tích lũy như sau:{' '}
                </Text>
                {'\n'}
                {'\n'}
                3/6 – 10/6: Voucher tích lũy được tung ra mỗi ngày với giá trị
                khác nhau. Cụ thể, bạn sẽ được giảm 15K cho mỗi 150K trong giá
                trị đơn hàng (áp dụng cho mọi ngành hàng, trừ ngành hàng điện
                tử). Chẳng hạn, bạn mua hàng có giá trị 300K – dưới 450K thì sẽ
                được giảm 20K). {'\n'}
                {'\n'}
                Từ 0h ngày 6/6: Bạn có thể thu thập thêm voucher tích lũy từ
                ngày 6/6 – 10/6, và đã bắt đầu sử dụng voucher tích lũy có trong
                tài khoản của bạn để mua sắm sản phẩm trên Lazada.vn{'\n'}
                {'\n'}
                Từ 6-10/6: Giảm 50K cho mỗi 650K (áp dụng cho ngành hàng điện
                tử). Chẳng hạn, bạn mua hàng từ 1,3 – dưới 1tr950K thì sẽ được
                giảm 100K.{'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  Voucher khủng trị giá 1 triệu đồng{' '}
                </Text>
                {'\n'}
                {'\n'}
                Trong chuỗi ngày vàng của đợt khuyến mại Lazada 6.6, bạn còn có
                cơ hội nhận voucher trị giá 1 triệu đồng xuất hiện lúc 12h trưa.
                Ngoài ra, bạn đừng quên sử dụng các voucher tung ra theo các
                khung giờ vàng là 0-9-12-20h mỗi ngày từ 6 – 10/6/2022.{'\n'}
                {'\n'}
                <Text style={styles.text3}>
                  Ưu đãi cọc trước từ Lazada Mall{' '}
                </Text>
                {'\n'}
                {'\n'}
                Nhiều bạn hay canh đến đợt khuyến mại mới thanh toán là vì nếu
                mua hàng trong những dịp khuyến mại như Lazada 6.6 này bạn sẽ có
                được sản phẩm mình mong muốn với mức giá siêu hời mà còn được
                tặng thêm quà nữa.{'\n'}
                {'\n'}
                Thông tin ưu đãi đợt 6/6 này cụ thể như sau: (áp dụng 25/5 –
                5/6/2022){'\n'}
                {'\n'}
                Bộ 5 món tinh chất phục hồi chống lão hóa Estee Lauder – 4tr380K
                (giá gốc 8tr555K) + bộ quà tặng trị giá 1tr250K{'\n'}
                {'\n'}
                Toner hoa cúc Kiehl’s – 1tr750K (giá gốc 3tr550K ) + bộ quà tặng
                trị giá 2tr300K{'\n'}
                {'\n'}
                Serum B5 Skinceuticals 30ml – 1tr750K (giá gốc ) + bộ quà tặng
                1tr345K {'\n'}
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
    fontSize: normalize(18),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-ExtraBoldItalic',
  },
});

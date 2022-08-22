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

export default function CGVScreen({navigation}) {
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
              <AntDesign name="left" size={normalize(20)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Chi Tiết Ưu Đãi</Text>
          </View>
        </View>

        <ScrollView style={{marginBottom:120}}>
          <Image
            style={styles.image}
            source={require('../image/muasam3.jpg')}
          />
          <View>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              MUA 02 VÉ TẶNG 01 CGV COMBO BẰNG THẺ MASTERCARD
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15),
                  fontWeight:'300',
                }}>
                THỜI GIAN ƯU ĐÃI: Áp dụng vào tất cả các ngày trong tuần
                01/04/2021 – 31/03/2022 (Toàn quốc)
                {'\n'} {'\n'}NỘI DUNG ƯU ĐÃI:{'\n'}- Khách hàng khi sử dụng thẻ
                do Mastercard phát hành thực hiện giao dịch mua 02 vé xem phim
                CGV tại quầy sẽ được tặng miễn phí 01 CGV Combo ( 02 nước lớn 22
                OZ, 01 bắp lớn 32 oz){'\n'}
                {'\n'}KÊNH ÁP DỤNG ƯU ĐÃI:
                {'\n'}- Mua vé trực tiếp tại quầy
                {'\n'}
                {'\n'}
                CÁCH THỨC NHẬN ƯU ĐÃI KHI MUA VÉ TẠI QUẦY:
                {'\n'}- Bước 1: Mang thẻ “MASTERCARD” đến các rạp chiếu phim CGV
                trên toàn quốc.
                {'\n'}- Bước 2: Thông báo với rạp tham gia chương trình khuyến
                mãi “MUA 02 VÉ TẶNG 01 CGV COMBO BẰNG THẺ MASTERCARD” trước khi
                chọn vé.
                {'\n'}- Bước 3: Chọn vé và thanh toán bẳng thẻ MASTERCARD theo
                hướng dẫn của nhân viên rạp, nhận CGV Combo miễn phí.{'\n'}
                {'\n'}Lưu ý: Chủ thẻ nên kiểm tra các điều khoản và điều kiện
                trước khi thanh toán. Trường hợp thẻ không hợp lệ, vượt quá số
                lượng ưu đãi, hệ thống sẽ báo lỗi và không xuất vé, CGV sẽ tiến
                hành xử lý để hoàn tiền cho giao dịch này (thời gian hoàn từ
                15-30 ngày){'\n'}
                {'\n'}
                Điều kiện và điều khoản:{'\n'}- Mỗi chủ thẻ MASTERCARD hợp lệ sẽ
                nhận được tối đa 01 ưu đãi/ ngày trong suốt thời gian chương
                trình
                {'\n'}- Ưu đãi giới hạn 1000 CGV combo/ tháng
                {'\n'}- Áp dụng cho giao dịch mua vé cùng một bộ phim, một suất
                chiếu và cùng hạng ghế, áp dụng cho tất cả loại vé, suất chiếu
                và phòng chiếu của CGV (2D, 3D, IMAX, 4DX, GOLD CLASS, STARIUM,
                L’AMOUR, SCREENX, PREMIUM, SWEETBOX…){'\n'}- Vé xem phim/ CGV
                Combo không có giá trị quy đổi thành tiền mặt hay hoàn trả.
                {'\n'}- Khuyến mãi không áp dụng đồng thời với các chương trình
                khuyến mãi khác của CGV và đối tác.
                {'\n'}- Chương trình có thể kết thúc trước thời hạn nếu số lượng
                vé ưu đãi tặng khách hàng đạt số lượng vé quy định trước thời
                gian kết thúc chương trình và theo quy tắc mua trước, hưởng
                khuyến mại trước.
                {'\n'}- CGV bảo lưu toàn quyền điều chỉnh hoặc kết thúc chương
                trình tại bất kỳ thời điểm nào mà không cần thông báo trước hoặc
                chịu trách nhiệm bồi thường bằng tiền mặt hoặc tài sản.
                {'\n'}-- CGV bảo lưu quyền không chấp nhận hoặc từ chối người
                tham gia có dấu hiệu vi phạm các quy định chương trình (căn cứ
                theo Điều khoản sử dụng dịch vụ hoặc có bất kì hành vi nào mà
                bên tổ chức cho rằng là không phù hợp hoặc không thể chấp nhận).
                {'\n'}- CGV bảo lưu quyền hủy bỏ, sửa đổi và/hoặc điều chỉnh
                toàn bộ hoặc một phần bất kì các điều kiện và điều khoản của
                chương trình tại bất kỳ thời điểm nào mà không cần thông báo
                trước cho người tham gia.
                {'\n'}- Trong trường hợp xảy ra tranh chấp, quyết định của CGV
                là quyết định cuối cùng.{'\n'}
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
    paddingHorizontal: 10,
    height: heightScreen / 8,
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
    color: 'blue',
    fontFamily: 'OpenSans-Bold',
    padding: 10,
    fontSize: normalize(20),
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

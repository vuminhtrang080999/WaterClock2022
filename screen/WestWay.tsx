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

export default function WestWay({navigation}) {
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

        <ScrollView style={{marginBottom:150}}>
          <Image
            style={styles.image}
            source={require('../image/quangcao9.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              Tẩy trắng răng ưu đãi lên đến 50% – Răng trắng cười xinh tự tin
              đón lễ
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                Nụ cười trắng sáng chính là điểm nhấn để tạo dấu ấn cá nhân và
                giúp bạn trông tự tin hơn. Tuy nhiên hàm răng ố vàng có thể ngăn
                bạn có nụ cười tỏa sáng.{'\n'}
                {'\n'}
                Nha khoa Quốc tế Westway tự hào là một trong những địa chỉ nha
                khoa chuẩn 5 sao uy tín, chất lượng hàng đầu tại TPHCM, được
                đông đảo khách hàng tin tưởng lựa chọn nhờ những ưu thế nổi bật
                sau:{'\n'}
                {'\n'}
                Tọa lạc tại các vị trí đắc địa như Bùi Thị Xuân Quận 1, Estella
                Place 88 Quận 2, Crescent Mall Quận 7, Hà Đô Centrosa Garden,
                Quận 10 thuận tiện cho việc di chuyển của khách hàng.{'\n'}
                {'\n'}
                Chuỗi nha khoa 5 sao đầu tiên tại Việt Nam với không gian đẳng
                cấp, các phòng ốc sang trọng, tiện nghi, thông thoáng đạt tiêu
                chuẩn Quốc tế.{'\n'}
                {'\n'}
                Đội ngũ bác giỏi chuyên môn, giàu kinh nghiệm như Bác sĩ Việt
                bằng cấp quốc tế, Bác sĩ chuyên khoa đến từ Mỹ, Anh, Ấn, Sing…
                {'\n'}
                {'\n'}
                Ứng dụng công nghệ/thiết bị nha khoa hiện đại được đầu tư triệu
                đô: máy chụp đa chiều CBCT: máy CT Cone Beam, Sirona, Germany,
                máy điều trị nội nha Xmart, máy Scan Itero, hệ thống ghế
                Dentsply Sirona,…{'\n'}
                {'\n'}
                Vật liệu nhập khẩu chính hãng: khay niềng Invisalign, mắc cài
                3M, sứ c ao cấp “vua” của các dòng sứ: Lisi, Lava, Emax… Implant
                Straumann, Osstem, Nobel…{'\n'}
                {'\n'}
                Chính sách bảo hành minh bạch trọn đời: Bạn sẽ được nhận các
                chính sách bảo hành chính hãng, bảo hành trọn đời tại Nha khoa,
                bảo hành trên toàn hệ thống…{'\n'}
                {'\n'}
                Chương trình{' '}
                <Text style={styles.text3}>
                  “TẨY TRẮNG RĂNG ƯU ĐÃI LÊN ĐẾN 50%”
                </Text>{' '}
                diễn ra duy nhất trong tháng này. Nếu có bất kỳ thắc mắc về
                chương trình hay dịch vụ tẩy trắng răng của nha khoa Westway,
                vui lòng gửi tin nhắn hoặc liên hệ đến số Hotline: 0793 999 996
                đội ngũ tư vấn Westway sẽ hỗ trợ tốt nhất cho bạn!
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

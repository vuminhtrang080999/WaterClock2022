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

export default function PhuongNam({navigation}) {
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
            source={require('../image/quangcao3.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              COMBO QUÀ TẶNG SỨC KHỎE
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                Thay vì chúc nhau sức khỏe, bạn đã thử tặng những người thân
                trong gia đình, bạn bè, đồng nghiệp của mình món quà sức khỏe
                chưa?{'\n'} {'\n'}
                Hiểu được điều đó Phương Nam mang đến bạn combo đặc biệt giúp
                bạn chăm sóc sức khỏe cho những người bạn yêu mến trong thời
                điểm thời tiết "dễ ốm" và các F xuất hiện xung quanh.{'\n'}{' '}
                {'\n'}
                COMBO MÓN QUÀ SỨC KHỎE - Cháo chim câu bằm đậu xanh và Chim câu
                non tiềm trái dừa{'\n'} {'\n'}
                Với lượng chất dinh dưỡng, khoáng chất và Vitamin dồi dào bên
                trong, sử dụng thịt chim bồ câu để bồi bổ, tăng cường sức đề
                kháng và miễn dịch cho cơ thể là cực kì sáng suốt. Một bát cháo
                chim câu giúp cơ thể trở nên sảng khoái, khỏe khoắn hơn. Đặc
                biệt khi thịt chim câu được hầm nhừ cùng các vị thuốc bắc như
                hạt sen, táo đỏ, kỳ tử,..cùng với vị ngọt thanh của nước dừa tạo
                nên một món ăn vừa bổ dưỡng vừa vô cùng hấp dẫn vị giác.{
                  '\n'
                }{' '}
                {'\n'}
                <Text style={styles.text3}>Giá bán COMBO 385K </Text>
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
    fontSize: normalize(23)
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

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

export default function ThaiDieu({navigation}) {
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

        <ScrollView style={{marginBottom:180}}>
          <Image
            style={styles.image}
            source={require('../image/quangcao4.jpg')}
          />
          <View style={{flex: 1, marginBottom: 40}}>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              Dày đặc ưu đãi - Ưu đãi đầu năm không đâu có bằng
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15)
                }}>
                💢 Buổi trưa: 108K/người {'\n'} {'\n'}💢 Buổi tối: 138K/người
                {'\n'} {'\n'}
                <Text style={styles.text3}> Tặng kèm 6 món free:</Text>
                {'\n'} {'\n'}▪ Cá lăng nướng cuốn{'\n'} {'\n'}▪ Nộm sứa thái
                {'\n'} {'\n'}▪ Chả ốc nướng giấy bạc{'\n'} {'\n'}▪ Gà nướng lá
                nếp{'\n'} {'\n'}▪ Hàu nướng mỡ hành{'\n'} {'\n'}▪ Khoai lang
                chiên{'\n'} {'\n'}
                <Text style={styles.text3}>
                  THẢ PHANH GỌI ĐỒ - KHÔNG LO VỀ GÍA
                </Text>
                {'\n'} {'\n'}✔️5 loại thịt tươi ngon, thơm lừng, siêu hấp dẫn
                gồm: Thịt Ba Chỉ Bò, Nạc Vai Bò, Gà Đùi, Cá, Gáy Heo.{'\n'}{' '}
                {'\n'}
                ✔️Ngao ngọt lừ{'\n'} {'\n'}
                ✔️Rau, Váng Đậu, Mỳ Miến nhiều vô đối{'\n'} {'\n'}
                👉 Nhanh tay đặt bàn ngay hôm nay để nhận ưu đãi hấp dẫn
                {'\n'}
                {'\n'}
                ⏰Thời gian phục vụ: {'\n'} {'\n'}BUỔI TRƯA (11h-14h00p) 🍲 và{' '}
                {'\n'} {'\n'}BUỔI TỐI (18h00-22h30p)🍲{'\n'} {'\n'}
                <Text style={styles.text3}>🔔 ƯU ĐÃI CHỈ ÁP DỤNG CHO</Text>
                {'\n'}
                {'\n'}▪ Đặt bàn trước hoặc inbox đặt bàn ngay tại Fanpage{'\n'}{' '}
                {'\n'}
                🏠119 Nam Đồng
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
    color: '#ffffff',
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

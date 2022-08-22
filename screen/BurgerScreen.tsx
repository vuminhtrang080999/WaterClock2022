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

export default function BurgerScreen({navigation}) {
  const colors = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

        <ScrollView style={{height: 650}}>
          <Image
            style={styles.image}
            source={require('../image/muasam6.jpg')}
          />
          <View>
            <Text style={[styles.title, {color: colors.colors.text}]}>
              MUA 1 TẶNG 1 – THỨ 5 HÀNG TUẦN
            </Text>

            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  marginTop: 10,
                  fontFamily: 'OpenSans-Italic',
                  color: colors.colors.text,
                  fontSize:normalize(15),
                  fontWeight:'300'
                }}>
                Khách hàng khi mua hàng tại các cửa hàng Burger King hoặc đặt
                hàng thông qua Hotline nhà hàng, Call Center, hoặc website
                Burger King sẽ nhận được ưu đãi mua 1 combo ( 1 bánh + 1 nước )
                được tặng 1 bánh burger.{'\n'}
                {'\n'}
                Các combo gồm:
                {'\n'}- Burger bò thịt heo xông khói + 1 coke
                {'\n'}- Burger bò phô mai + 1 coke
                {'\n'}- Burger gà phô mai + 1 coke
                {'\n'}- Burger bò nướng khoai tây lát + 1 coke
                {'\n'}- Burger bò nướng Whopper + 1 coke
                {'\n'}- Burger bò nướng Whopper JR + 1 coke
                {'\n'}
                {'\n'}Thời gian áp dụng chương trình 16/11/2021
                {'\n'}
                {'\n'}Áp dụng toàn hệ thống các cửa hàng Burger King (trừ Burger
                King Sân bay và Phú Quốc).
                {'\n'}
                {'\n'}Áp dụng vói khách hàng mua tại cửa hàng hoặc đặt hàng
                thông qua kênh Delivery của nhà hàng, Call center hoặc qua
                Website https://burgerking.vn/ Không áp dụng vào các ngày Lễ Tết
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
    flex: 1,
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

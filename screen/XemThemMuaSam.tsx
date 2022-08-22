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
  ImageBackground,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {normalize} from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function XemThemMuaSam({navigation}) {
  const colors = useTheme();
  const colorText = colors.colors.text;

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />
        <View style={styles.headerButton}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.navigate('Home')}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Mua Sắm Tích Điểm</Text>
          </View>
        </View>

        <ScrollView style={{marginTop: 5}}>
          <View>
            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Shopee')}>
                <Image
                  source={require('../image/quangcao1.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  SIÊU SALE 25.6{' '}
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/shopee.jpg')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Shopee Việt Nam
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Lazada')}>
                <Image
                  source={require('../image/quangcao2.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  {' '}
                  LAZADA SIÊU HỘI SALE HÈ{' '}
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/lazada.jpg')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Lazada Việt Nam
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('PhuongNam')}>
                <Image
                  source={require('../image/quangcao3.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  COMBO QUÀ TẶNG SỨC KHỎE
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/logo7.png')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Nhà hàng Phương Nam
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('ThaiDieu')}>
                <Image
                  source={require('../image/quangcao4.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  ƯU ĐÃI ĐẦU NĂM
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/logo10.png')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Thai Deli
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('BacTom')}>
                <Image
                  source={require('../image/quangcao6.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  {' '}
                  MỪNG SINH NHẬT NGẬP ƯU ..{' '}
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/logo8.jpg')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Bác Tôm
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('WestWay')}>
                <Image
                  source={require('../image/quangcao9.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  {' '}
                  TÍCH ĐIỂM 5%{' '}
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/logo11.png')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Nha khoa West Way
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Eimich')}>
                <Image
                  source={require('../image/quangcao7.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginHorizontal: 5}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  BÙNG NỔ KHAI TRƯƠNG ...
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/logo9.png')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Eimich
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>

            <View style={styles.block1}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('NamHoangGia')}>
                <Image
                  source={require('../image/quangcao8.jpg')}
                  resizeMode="stretch"
                  style={styles.image}
                />
              </TouchableWithoutFeedback>
              <View style={{marginLeft: 8}}>
                <Text style={[styles.text1, {color: colorText}]}>
                  {' '}
                  TÍCH ĐIỂM 5%{' '}
                </Text>

                <View style={styles.box1}>
                  <Image
                    source={require('../image/logo11.png')}
                    resizeMode="stretch"
                    style={styles.logo}
                  />
                  <Text style={[styles.description, {color: colorText}]}>
                    Nấm hoàng gia
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name="md-heart-circle-outline"
                    size={normalize(25)}
                    color={colorText}
                  />
                  <Text style={[styles.text2, {color: colorText}]}>10.000</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    backgroundColor: '#15AD9C',
    height: heightScreen / 8,
    width: widthScreen,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    marginRight: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  block1: {
    flexDirection: 'row',
    margin: 10,
    // backgroundColor: '#ffff',
    padding: 10,
    width: widthScreen * 0.96,
    borderColor: '#bbbbbb',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 2,
    borderWidth: 1,
  },
  image: {
    width: widthScreen * 0.3,
    height: heightScreen * 0.1,
    borderRadius: 10,
  },
  logo: {
    height: heightScreen * 0.04,
    width: heightScreen * 0.04,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  text1: {
    fontFamily: ' OpenSans-BoldItalic',
    fontSize: normalize(15),
    fontWeight: 'bold',
  },
  text2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginHorizontal: 5,
    fontSize: normalize(15),
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  box1: {
    flexDirection: 'row',
    padding: 3,
    marginLeft: -10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  description: {
    flexDirection: 'row',
    margin: 5,
    marginLeft: -1,
    fontSize: normalize(17),
    fontWeight: '400',
  },
  imageBg: {
    height: '100%',
  },
});

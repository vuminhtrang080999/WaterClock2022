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
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { normalize } from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function XemThemSanUuDai({navigation}) {
  const colors = useTheme();
  const colorText = colors.colors.text;

  return (
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
          <Text style={styles.headerText}>Săn Ưu Đãi</Text>
        </View>
      </View>

      <ScrollView style={{marginTop: 5}}>
        <View>
          <View style={styles.block1}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('LotteriaScreen')}>
              <Image
                source={require('../image/muasam1.jpg')}
                resizeMode="stretch"
                style={styles.image}
              />
            </TouchableWithoutFeedback>
            <View style={{marginLeft: 8}}>
              <Text style={[styles.text1, {color: colorText}]}>
                Double Set 2 chỉ 81.000 đồng{' '}
              </Text>

              <View style={styles.box1}>
                <Image
                  source={require('../image/logo1.jpg')}
                  resizeMode="stretch"
                  style={styles.logo}
                />
                <Text
                  style={[styles.description, {color: colorText}]}>
                  Lotteria Việt Nam
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
              onPress={() => navigation.navigate('TocotocoScreen')}>
              <Image
                source={require('../image/muasam2.jpg')}
                resizeMode="stretch"
                style={styles.image}
              />
            </TouchableWithoutFeedback>
            <View style={{marginLeft: 8}}>
              <Text style={[styles.text1, {color: colorText}]}>
                ĐỒNG GIÁ 36K MENU SIZE L{' '}
              </Text>

              <View style={styles.box1}>
                <Image
                  source={require('../image/logo2.jpg')}
                  resizeMode="stretch"
                  style={styles.logo}
                />
                <Text
                  style={[styles.description, {color: colorText}]}>
                  Tocotoco Việt Nam
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
              onPress={() => navigation.navigate('CGVScreen')}>
              <Image
                source={require('../image/muasam3.jpg')}
                resizeMode="stretch"
                style={styles.image}
              />
            </TouchableWithoutFeedback>
            <View style={{marginLeft: 8}}>
              <Text style={[styles.text1, {color: colorText}]}>
                MUA 2 VÉ TẶNG 1 COMBO CGV
              </Text>

              <View style={styles.box1}>
                <Image
                  source={require('../image/logo3.jpg')}
                  resizeMode="stretch"
                  style={styles.logo}
                />
                <Text
                 style={[styles.description, {color: colorText}]}>
                  CGV Việt Nam
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
              onPress={() => navigation.navigate('TravalokaScreen')}>
              <Image
                source={require('../image/muasam4.jpg')}
                resizeMode="stretch"
                style={styles.image}
              />
            </TouchableWithoutFeedback>
            <View style={{marginLeft: 8}}>
              <Text style={[styles.text1, {color: colorText}]}>
                Ưu đãi 100k cho khách hàng ...
              </Text>

              <View style={styles.box1}>
                <Image
                  source={require('../image/logo4.jpg')}
                  resizeMode="stretch"
                  style={styles.logo}
                />
                <Text
                  style={[styles.description, {color: colorText}]}>
                  Travaloka
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
              onPress={() => navigation.navigate('TigerSugarScreen')}>
              <Image
                source={require('../image/muasam5.jpg')}
                resizeMode="stretch"
                style={styles.image}
              />
            </TouchableWithoutFeedback>
            <View style={{marginLeft: 8}}>
              <Text style={[styles.text1, {color: colorText}]}>
                {' '}
                Tiger Sugar tặng 1 cốc trà sữa{' '}
              </Text>

              <View style={styles.box1}>
                <Image
                  source={require('../image/logo5.jpg')}
                  resizeMode="stretch"
                  style={styles.logo}
                />
                <Text
                  style={[styles.description, {color: colorText}]}>
                  Tiger Sugar
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
              onPress={() => navigation.navigate('BurgerScreen')}>
              <Image
                source={require('../image/muasam6.jpg')}
                resizeMode="stretch"
                style={styles.image}
              />
            </TouchableWithoutFeedback>
            <View style={{marginHorizontal: 5}}>
              <Text style={[styles.text1, {color: colorText}]}>MUA 1 TẶNG 1 THỨ 5 MỖI ...</Text>

              <View style={styles.box1}>
                <Image
                  source={require('../image/logo6.jpg')}
                  resizeMode="stretch"
                  style={styles.logo}
                />
                <Text style={[styles.description, {color: colorText}]}>
                  Burger King
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Ionicons name="md-heart-circle-outline" size={25} color={colorText} />
                <Text style={[styles.text2,{color:colorText}]}>10.000</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
});
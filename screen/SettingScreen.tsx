import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Appearance,
  ImageBackground,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import TouchID from 'react-native-touch-id';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

export default function SettingScreen({navigation}) {
  const colors = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#15AD9C'} />
      <ImageBackground
        style={styles.imageBg}
        source={require('../image/bg.jpg')}>
        <View style={styles.headerButton}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.navigate('Home1')}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Cài đặt</Text>
          </View>
        </View>

        <View style={styles.cover}>
          {/* <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity onPress={() => navigation.navigate('TouchID')}>
                <Ionicons name="finger-print-outline" size={normalize(50)} color={'black'} />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
                Đăng nhập bằng vân tay
              </Text>
            </View>
          </View> */}

          <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChangePassword')}>
                <Ionicons name="md-lock-closed-outline" size={normalize(50)} color={'black'} />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
              Đổi mật khẩu
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NguongCanhBao')}>
                <Ionicons
                  name="md-warning-outline"
                  size={normalize(50)}
                  color={'black'}
                />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
                Ngưỡng cảnh báo
              </Text>
            </View>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    backgroundColor: '#15AD9C',
    height: screenHeight / 8,
    width: screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    marginRight: 165,
    fontSize: 20,
  },
  icon: {
    marginTop: 10,
    width: screenWidth,
    backgroundColor: '#01ac80',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  imageBg: {
    height: '100%',
  },
  box: {
    margin: 5,
    //backgroundColor: 'pink',
    width: screenWidth / 3.5,
    height: screenHeight / 3.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor:'pink'
    marginHorizontal:10
  },
  item1: {
    //backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '45%',
  },
  textBox: {
    fontSize: normalize(17),
    fontWeight: '600',
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: 'black',
  },
});

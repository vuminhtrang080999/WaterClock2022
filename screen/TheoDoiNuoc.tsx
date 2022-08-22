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
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useState} from 'react';
import TouchID from 'react-native-touch-id';

import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

export default function TheoDoiNuoc({navigation}) {
  const colors = useTheme();
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <ImageBackground
        style={styles.imageBg}
        source={require('../image/bg.jpg')}>
        <View style={styles.headerButton}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Feather name="arrow-left" size={20} color={'#ffff'} />
        </TouchableOpacity> */}
          <Text style={styles.headerText}>Theo dõi sử dụng</Text>
        </View>
        
        <View style={styles.cover}>
          <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GetUsedDataByDateInput')}>
                <Feather name="square" size={normalize(50)} color={'black'} />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
                Lượng sử dụng theo ngày
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GetMeterDataInDayInput')}>
                <Feather name="sidebar" size={normalize(50)} color={'black'} />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
                Chỉ số đồng hồ theo giờ
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('GetMeterDataByDateInput')}>
                <AntDesign
                  name="profile"
                  size={normalize(50)}
                  color={'black'}
                />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
                Chỉ số đồng hồ theo ngày
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.item1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TheoDoiDongHo')}>
                <AntDesign
                  name="warning"
                  size={normalize(50)}
                  color={'black'}
                />
              </TouchableOpacity>
              <Text numberOfLines={2} style={styles.textBox}>
                Sự kiện cảnh báo
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
    height: screenHeight * 0.125,
    width: screenWidth,
    justifyContent: 'center',
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
    height: screenHeight * 0.06,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
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
  imageBg: {
    height: '100%',
  },
});

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
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';

const {width:widthScreen} = Dimensions.get('screen');
const {height:heightScreen} = Dimensions.get('screen');

export default function ThemHopDong({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#15AD9C'} />
      <View style={styles.container}>
        <View style={styles.headerButton}>
          <TouchableOpacity
            onPress={() => navigation.goBack('')}
            style={{marginLeft: 10}}>
            <AntDesign name="left" size={20} />
          </TouchableOpacity>
          <Text style={styles.text}>Them hop dong</Text>
        </View>

        <View style={{backgroundColor: '#FFFF'}}>
          <Image
            style={styles.image}
            source={require('../image/contract.png')}
          />

          <View style={{marginHorizontal: 10, marginBottom: -20}}>
            <Text style={styles.text}>So dien thoai</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              placeholder="Số dien thoai"
            />
            <Text style={styles.text}>Số đồng hồ</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              placeholder="Số đong ho"
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('GetDataByDate')}
            style={styles.button}>
            <Text style={styles.text2}>Them hop dong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15AD9C',
    width: widthScreen,
    height: heightScreen,
  },
  headerButton: {
    height: 80,
    borderTopWidth: 0.3,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    marginRight: 125,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: '100',
  },
  text3: {
    marginLeft: 95,
    marginTop: 30,
    marginBottom: -30,
    fontSize: 20,
    fontWeight: 'normal',
    width: widthScreen,
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#dddd',
  },
  image: {
    backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  button: {
    marginHorizontal: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
    backgroundColor: '#15AD9C',
    height: 50,
    borderRadius: 20,
  },
});

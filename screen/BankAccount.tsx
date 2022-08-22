import {useTheme} from '@react-navigation/native';
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
  Alert,
  ImageBackground,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import {normalize} from '../assets/theme';
import {StoreContext} from '../component/Context';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function BankAccount({navigation}) {
  const store = React.useContext(StoreContext);

  const [state, setState] = React.useState({
    bankName: '',
    numberBank: '',
    acountName: '',
  });
  const colors = useTheme();
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'#15AD9C'} />

        <View style={styles.headerButton}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thông tin tài khoản </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.image} source={require('../image/card.png')} />
        </View>

        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            height: heightScreen * 0.25,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.textInput}>
              <Text style={[styles.text, {color: colors.colors.text}]}>
                Tên ngân hàng
              </Text>
              <TextInput
                style={{color: colors.colors.text, fontSize: normalize(18)}}
                placeholder="Tên ngân hàng"
                value={state.bankName}
                onChangeText={text => {
                  setState(state => {
                    state.bankName = text.toUpperCase();
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.textInput}>
              <Text style={[styles.text, {color: colors.colors.text}]}>
                Số thẻ
              </Text>
              <TextInput
                style={{color: colors.colors.text, fontSize: normalize(18)}}
                placeholder="Số thẻ"
                value={state.numberBank}
                onChangeText={text => {
                  setState(state => {
                    state.numberBank = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.textInput}>
              <Text style={[styles.text, {color: colors.colors.text}]}>
                Tên chủ thẻ
              </Text>
              <TextInput
                style={{color: colors.colors.text, fontSize: normalize(18)}}
                placeholder="Tên chủ thẻ"
                value={state.acountName}
                onChangeText={text => {
                  setState(state => {
                    state.acountName = text.toUpperCase();
                    return {...state};
                  });
                }}
                onEndEditing={e => {
                  store.setState(state => {
                    state.bankAccount = e.nativeEvent.text;
                    return {...state};
                  });
                  //console.log('e', e.nativeEvent.text);
                }}
              />
            </View>

            {/* <View style={styles.textInput}>
              <Text style={[styles.text, {color: colors.colors.text}]}>
                Ngày phát hành
              </Text>
              <TextInput
                style={{color: colors.colors.text}}
                placeholder="mm/dd"
              />
            </View> */}

          </ScrollView>
        </View>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {state.bankName === '' || state.numberBank === '' ? (
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Thông báo', 'Vui lòng điền đủ thông tin');
              }}
              style={[styles.button, {backgroundColor: '#cccc'}]}>
              <Text style={styles.text3}> Thêm thẻ ngân hàng</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                store.setState(state => {
                  state.bankisValid = true;
                  return {...state};
                });
                Alert.alert('Thông báo', 'Thêm thẻ thành công');
                navigation.navigate('ThanhToan')
              }}
              style={[styles.button, {backgroundColor: '#15AD9C'}]}>
              <Text style={styles.text3}> Thêm thẻ ngân hàng</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15AD9C',
    width: widthScreen,
    height: heightScreen,
  },

  headerButton: {
    height: heightScreen / 8,
    backgroundColor: '#15AD9C',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: normalize(18),
    fontWeight: '200',
    fontFamily: 'OpenSans-Medium',
  },
  headerText: {
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  text3: {
    fontSize: normalize(20),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  textInput: {
    marginTop: 5,
    marginHorizontal: 10,
    height: heightScreen / 13,
    borderRadius: 10,
    borderBottomWidth: 0.3,
    borderStyle: 'dashed',
  },

  image: {
    resizeMode: 'center',
    //backgroundColor: '#ffff',
    margin: 10,
    width: widthScreen * 0.98,
    height: heightScreen / 5,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: '#bbbb',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen * 0.95,
    backgroundColor: '#15AD9C',
    height: heightScreen * 0.06,
    borderRadius: 20,
  },
  imageBg: {
    height: '100%',
  },
});

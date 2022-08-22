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
  Alert,
  Modal,
  Pressable,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Checkbox} from 'react-native-paper';

import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';
import {StoreContext} from '../component/Context';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');



export default function LotteriaScreen({navigation}) {
  const storeBank = async bank => {
    try {
      await AsyncStorage.setItem('BANK', JSON.stringify(bank));
    } catch (err) {}
  };

  const getBank = async () => {
    try {
      const result = await AsyncStorage.getItem('BANK');
      const bank = JSON.parse(result as string);

      return bank;
    } catch (e) {
      // saving error
    }
  };

  const [state, setState] = React.useState({
    check: false,
    modalVisibleMoMo: false,
    modalVisibleBank: false,
  });

  const colors = useTheme();
  const store = React.useContext(StoreContext);

  const storeStatus = async Status => {
    try {
      await AsyncStorage.setItem(
        'STATUS_PAYMENT',
        JSON.stringify(Status),
      );
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'#15AD9C'} />

        <Modal
          animationType="fade"
          transparent={true}
          visible={state.modalVisibleMoMo}
          onRequestClose={() => {
            setState(state => {
              state.modalVisibleMoMo = false;
              return {...state};
            });
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Thông báo</Text>

              <Text style={{fontSize: normalize(15)}}>
                Quý khách muốn xoá phương thức này ?
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  //backgroundColor: 'pink',
                  marginTop: 10,
                }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setState(state => {
                      state.modalVisibleMoMo = false;
                      return {...state};
                    });
                  }}>
                  <Text style={styles.textStyle}>Huỷ</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setState(state => {
                      state.modalVisibleMoMo = false;
                      return {...state};
                    });

                    store.setState(state => {
                      state.momoIsValid = false;
                      return {...state};
                    });
                  }}>
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={state.modalVisibleBank}
          onRequestClose={() => {
            setState(state => {
              state.modalVisibleBank = false;
              return {...state};
            });
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Thông báo</Text>

              <Text style={{fontSize: normalize(15)}}>
                Quý khách muốn xoá phương thức này ?
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  //backgroundColor: 'pink',
                  marginTop: 10,
                }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setState(state => {
                      state.modalVisibleBank = false;
                      return {...state};
                    });
                  }}>
                  <Text style={styles.textStyle}>Huỷ</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setState(state => {
                      state.modalVisibleBank = false;
                      return {...state};
                    });

                    store.setState(state => {
                      state.bankisValid = false;
                      return {...state};
                    });
                  }}>
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

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
                onPress={() => navigation.goBack('')}>
                <AntDesign name="left" size={normalize(25)} color={'#ffff'} />
              </TouchableOpacity>
              <Text style={styles.text}>Lựa chọn hình thức thanh toán </Text>
            </View>
          </View>
        </View>

        {store.state.momoIsValid === false ? (
          <View style={styles.block1}>
            <View style={styles.block1_1}>
              <Image
                source={require('../image/MoMo.png')}
                style={styles.logo}
              />
            </View>

            <Text style={styles.textBlock1}>Bạn phải có ví momo</Text>
            <View style={{flex: 1}}></View>

            <TouchableOpacity onPress={() => navigation.navigate('ViMoMo')}>
              <AntDesign
                name="right"
                size={normalize(25)}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.block1}>
            <View style={styles.block1_1}>
              <Image
                source={require('../image/MoMo.png')}
                style={styles.logo}
              />
            </View>

            <Text
              style={styles.textBlock1}
              onPress={async () => {
                let newArray = store.state.getBilling.map(item => {
                  if (item.STATUS === '0') {
                    item.STATUS = '1';
                    storeStatus(item.STATUS);
                    Alert.alert('Thông báo', 'Thanh toán thành công');
                  } else {
                    Alert.alert('Thông báo', 'Quý khách đã thanh toán hoá đơn');
                    navigation.navigate('GetBillingByDate');
                  }
                  return {...item};
                });
                store.setState(state => {
                  state.getBilling = newArray;
                  return {...state};
                });
              }}>
              {store.state.momoAccount}
            </Text>
            <View style={{flex: 1}}></View>

            <TouchableOpacity
              onPress={() => {
                setState(state => {
                  state.modalVisibleMoMo = true;
                  return {...state};
                });
              }}>
              <Ionicons
                name="trash-outline"
                size={normalize(25)}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          </View>
        )}

        {store.state.bankisValid === false ? (
          <View style={styles.block1}>
            <View style={styles.block1_1}>
              <Image
                source={require('../image/mobileBank.png')}
                style={styles.logo}
              />
            </View>

            <Text style={styles.textBlock1}>
              Bạn phải có tài khoản ngân hàng
            </Text>
            <View style={{flex: 1}}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate('BankAccount')}>
              <AntDesign
                name="right"
                size={normalize(25)}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.block1}>
            <View style={styles.block1_1}>
              <Image
                source={require('../image/mobileBank.png')}
                style={styles.logo}
              />
            </View>

            <Text
              onPress={async () => {
                await storeBank({
                  bank: store.state.bankAccount,
                });
                let newArray = store.state.getBilling.map(item => {
                  if (item.STATUS === '0') {
                    item.STATUS = '1';
                    Alert.alert('Thông báo', 'Thanh toán thành công');
                  } else {
                    Alert.alert('Thông báo', 'Quý khách đã thanh toán hoá đơn');
                  }
                  return {...item};
                });
                store.setState(state => {
                  state.getBilling = newArray;
                  return {...state};
                });
              }}
              style={styles.textBlock1}>
              {store.state.bankAccount}
            </Text>
            <View style={{flex: 1}}></View>

            <TouchableOpacity
              onPress={() => {
                setState(state => {
                  state.modalVisibleBank = true;
                  return {...state};
                });
              }}>
              <Ionicons
                name="trash-outline"
                size={normalize(25)}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#15AD9C',
    width: widthScreen,
    height: heightScreen,
  },
  headerButton: {
    paddingHorizontal: 10,
    height: heightScreen / 8,
    borderBottomRightRadius: 20,
    borderBottomStartRadius: 20,
    backgroundColor: '#15AD9C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    resizeMode: 'center',
    height: '100%',
    width: '100%',
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
  imageBg: {
    height: '100%',
  },
  block1: {
    //backgroundColor: 'pink',
    marginTop: 10,
    marginHorizontal: 10,
    height: '8%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 0.3,
  },
  block1_1: {
    height: '80%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock1: {
    fontSize: normalize(16),
    fontWeight: '600',
    //backgroundColor: 'gold',
    fontFamily: 'SourceSerifPro-SemiBold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 20,
  },
  modalView: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '22%',
  },
  button: {
    marginTop: 5,
    borderRadius: 20,
    padding: 10,
    width: '30%',
    height: '85%',
  },
  buttonClose: {
    backgroundColor: '#15AD9C',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(15),
  },
  modalText: {
    textAlign: 'left',
    fontSize: normalize(16),
    fontWeight: '200',
    fontFamily: 'OpenSans-SemiBold',
  },
});

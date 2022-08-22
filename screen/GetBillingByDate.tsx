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
  Modal,
  Pressable,
  Button,
  ImageBackground,
} from 'react-native';
import {ScrollView, State, TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {StoreContext} from '../component/Context';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

import {
  formatCurrency,
  getSupportedCurrencies,
} from 'react-native-format-currency';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

export default function GetBillingByDate({navigation, route}) {
  const colors = useTheme();

  const store = React.useContext(StoreContext);

  const [type, setType] = React.useState({
    METER_NO: '',
    BILLING_ID: '',
    CUSTOMER_CODE: '',
    ACTIVE_TOTAL_START: '',
    ACTIVE_TOTAL_END: '',
    TOTAL_USED: '',

    START_DATE: '',
    END_DATE: '',
    UPDATED: '',
    CREATED: '',

    PRICE1: '',
    PRICE2: '',
    PRICE3: '',
    PRICE4: '',

    USED1: '',
    USED2: '',
    USED3: '',
    USED4: '',

    TOTAL1: '',
    TOTAL2: '',
    TOTAL3: '',
    TOTAL4: '',

    Total_Pay: '',

    ThueGTGT: '100',

    ThueBVMT: '',

    ThanhToan: '',

    modalVisible: false,
  });

  const data = route.params as any[];
  const arr1 = data.map(item => item.aDetail);
  const aDetail = arr1[0];

  const storeStatus = async Status => {
    try {
      await AsyncStorage.setItem(
        'STATUS_PAYMENT',
        JSON.stringify(store.state.getBilling[0].STATUS),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  const getStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('STATUS_PAYMENT');
      const Status = JSON.parse(value as string);
      if (value) {
        console.log('value', value);
        return Status;
      }
    } catch (error) {
      console.log('error', error);
    }
    return null;
  };

  React.useLayoutEffect(() => {
    if (route.params) {
      setType(type => {
        type.Total_Pay = Total[1];
        type.PRICE1 = Price1[1];
        type.PRICE2 = Price2[1];
        type.PRICE3 = Price3[1];
        type.PRICE4 = Price4[1];

        type.USED1 = aDetail[0].USED;
        type.USED2 = aDetail[1].USED;
        type.USED3 = aDetail[2].USED;
        type.USED4 = aDetail[3].USED;

        type.TOTAL1 = Total1[1];
        type.TOTAL2 = Total2[1];
        type.TOTAL3 = Total3[1];
        type.TOTAL4 = Total4[1];

        type.ThueGTGT = THUEGTGT[1];
        type.ThueBVMT = THUEBVMT[1];
        type.ThanhToan = THANHTOAN[1];

        return {...type, ...route.params[0]};
      });
    }
    let status: string = '0';
    getStatus().then(value => {
      if (value) {
        status = value;
      }
      console.log('status here:', status);
      store.setState(state => {
      state.TOTAL_USED = route.params[0].TOTAL_USED;
      state.getBilling = data;
      state.getBilling[0].STATUS = status;
      return {...state};
    });
    });
    
  }, []);

  const a = (parseInt(route.params[0].TOTAL_PAY, 10) * 0.05).toFixed(0);
  const THUEGTGT = formatCurrency({amount: a, code: 'VND'});

  const b = (parseInt(route.params[0].TOTAL_PAY, 10) * 0.1).toFixed(0);
  const THUEBVMT = formatCurrency({amount: b, code: 'VND'});

  const c =
    parseInt(a, 10) + parseInt(b, 10) + parseInt(route.params[0].TOTAL_PAY, 10);
  const THANHTOAN = formatCurrency({amount: c, code: 'VND'});

  const Total = formatCurrency({
    amount: route.params[0].TOTAL_PAY,
    code: 'VND',
  });

  const Total1 = formatCurrency({amount: aDetail[0].TOTAL, code: 'VND'});
  const Total2 = formatCurrency({amount: aDetail[1].TOTAL, code: 'VND'});
  const Total3 = formatCurrency({amount: aDetail[2].TOTAL, code: 'VND'});
  const Total4 = formatCurrency({amount: aDetail[3].TOTAL, code: 'VND'});

  const Price1 = formatCurrency({amount: aDetail[0].PRICE, code: 'VND'});
  const Price2 = formatCurrency({amount: aDetail[1].PRICE, code: 'VND'});
  const Price3 = formatCurrency({amount: aDetail[2].PRICE, code: 'VND'});
  const Price4 = formatCurrency({amount: aDetail[3].PRICE, code: 'VND'});

  const valid = store.state.getBilling.map(item => item.STATUS).join('');
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />
        <View>
          <View style={styles.headerButton}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                style={{position: 'absolute', left: 0}}
                onPress={() => navigation.navigate('ThongTinHoaDon')}>
                <Feather
                  name="arrow-left"
                  size={normalize(25)}
                  color={'#ffff'}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Hoá đơn điện tử</Text>
            </View>
          </View>

          <View
            style={{
              //backgroundColor: 'pink',
              marginTop: 10,
              height: screenHeight / 8,
              justifyContent: 'center',
              marginHorizontal: 5,
            }}>
            <View style={styles.box1}>
              <View style={{}}>
                <Text style={styles.textBox1}>
                  Mã khách hàng: {''}{' '}
                  <Text style={styles.textBox1_2}>{type.CUSTOMER_CODE}</Text>
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={[styles.textBox21, {width: screenWidth * 0.35}]}>
                  {' '}
                  Chỉ số bắt đầu: {''}{' '}
                  <Text style={styles.textBox1_2}>
                    {type.ACTIVE_TOTAL_START}
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.textBox21,
                    {width: screenWidth * 0.54, textAlign: 'right'},
                  ]}>
                  {' '}
                  Chỉ số kết thúc: {''}{' '}
                  <Text style={styles.textBox1_2}>{type.ACTIVE_TOTAL_END}</Text>
                </Text>
              </View>

              <View style={{marginTop: 5}}>
                <Text style={styles.textBox21}>
                  Tiêu thụ: {''}{' '}
                  <Text style={styles.textBox1_2}>{type.TOTAL_USED}</Text>{' '}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.box2}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.textBox2}>Thông tin chi tiết</Text>
            </View>

            <View style={styles.cover}>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.26}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.17}]}>
                SL(m3)
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.19}]}>
                Đơn giá (đ)
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.25}]}>
                Thành tiền (đ)
              </Text>
            </View>

            <View style={styles.cover}>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.26}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.17}]}>
                {type.USED1}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.19}]}>
                {type.PRICE1}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.25}]}>
                {type.TOTAL1}
              </Text>
            </View>
            <View style={styles.cover}>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.25}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.17}]}>
                {type.USED2}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.19}]}>
                {type.PRICE2}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.25}]}>
                {type.TOTAL2}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.25}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.17}]}>
                {type.USED3}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.19}]}>
                {type.PRICE3}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.25}]}>
                {type.TOTAL3}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.25}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.17}]}>
                {type.USED4}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.19}]}>
                {type.PRICE4}
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.25}]}>
                {type.TOTAL4}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                Cộng
              </Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.17}]}>
                {type.TOTAL_USED}
              </Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.19}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                {type.Total_Pay}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                Thuế GTGT(5%)
              </Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.17}]}></Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.19}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                {type.ThueGTGT}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                Phí BVMT(10%)
              </Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.17}]}></Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.19}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                {type.ThueBVMT}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                Tổng cộng
              </Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.17}]}></Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.19}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                {type.ThanhToan}
              </Text>
            </View>

            <View style={styles.cover}>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                Thanh Toán
              </Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.17}]}></Text>
              <Text
                style={[styles.textBox2_3, {width: screenWidth * 0.19}]}></Text>
              <Text style={[styles.textBox2_3, {width: screenWidth * 0.26}]}>
                {type.ThanhToan}
              </Text>
            </View>

            <View style={styles.box4}>
              {valid === '1' ? (
                <View style={styles.textBox4}>
                  <AntDesign name="check" color={'blue'} size={normalize(20)} />
                  <Text style={styles.textBox4_1}>Đã Thanh Toán</Text>
                </View>
              ) : (
                <View style={styles.textBox4}>
                  <AntDesign name="close" color={'blue'} size={normalize(20)} />
                  <Text style={styles.textBox4_1}>Chưa Thanh Toán</Text>
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Thông báo ', 'Tính năng sắp ra mắt');
              }}
              style={styles.button}>
              <Text style={styles.text2}>Xem Hoá Đơn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (
                  store.state.TOTAL_USED > store.state.UP_LEVEL &&
                  store.state.DongHo === type.METER_NO
                ) {
                  Alert.alert('Thông báo:', 'Quý khách đã sử dụng vượt ngưỡng');
                } else {
                  if (store.state.getBilling[0].STATUS === '0') {
                    navigation.navigate('ThanhToan');
                  } else {
                    Alert.alert('Thông báo', 'Quý khách đã thanh toán');
                  }
                }
              }}
              style={styles.button}>
              <Text style={styles.text2}>Thanh Toán</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    fontSize: normalize(25),
    fontWeight: 'bold',
    color: '#ffff',
  },

  button: {
    // marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.45,
    backgroundColor: '#15AD9C',
    height: screenHeight * 0.05,
    borderRadius: 20,
  },
  text2: {
    //marginHorizontal: 20,
    fontSize: normalize(20),
    fontWeight: '500',
    color: '#ffff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    paddingHorizontal: 20,
  },
  modalView: {
    justifyContent: 'center',
    margin: 20,
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
    width: screenWidth * 0.95,
    height: screenHeight * 0.23,
  },
  button1: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    width: screenWidth / 5,
    height: screenHeight * 0.04,
  },
  button2: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    width: screenWidth * 0.8,
    height: screenHeight * 0.04,
  },
  buttonClose: {
    backgroundColor: '#15AD9C',
  },
  buttonClose1: {
    backgroundColor: '#A8EDA8',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(15),
  },
  textStyle1: {
    color: '#333333',
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(15),
  },
  modalText: {
    textAlign: 'left',
    fontSize: normalize(17),
    fontWeight: '300',
    fontFamily: 'OpenSans-SemiBold',
  },
  box1: {
    //backgroundColor: 'pink',
    marginHorizontal: 20,
    height: screenHeight * 0.1,
    // justifyContent: 'space-between',
  },
  textBox1: {
    fontSize: normalize(18),
    fontWeight: '600',
    fontFamily: 'OpenSans-Medium',
    width: '100%',
    //backgroundColor:'gold'
  },
  textBox21: {
    fontSize: normalize(18),
    fontWeight: '600',
    fontFamily: 'OpenSans-Medium',
    width: screenWidth * 0.48,
    //backgroundColor:'gold'
  },
  textBox1_2: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Medium',
  },
  box2: {
    //backgroundColor: 'gold',

    marginHorizontal: 5,
    // alignItems: 'center',
    height: screenHeight * 0.52,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  cover: {
    //backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: '#bbbbbb',
    marginTop: 10,
  },
  textBox2: {
    marginTop: 15,
    fontSize: normalize(19),
    fontWeight: '500',
    fontFamily: 'OpenSans-SemiBold',
  },
  textBox2_2: {
    fontSize: normalize(17),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Medium',
  },
  textBox2_3: {
    fontSize: normalize(16),
    fontWeight: '600',
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    //backgroundColor: 'pink',
    alignItems: 'center',
  },
  box3: {
    //backgroundColor: 'gold',
    marginHorizontal: 40,
    marginTop: 10,
  },
  box4: {
    //backgroundColor: 'pink',
    marginHorizontal: 30,
    alignItems: 'flex-end',
    marginTop: 15,
  },
  textBox4: {flexDirection: 'row', alignItems: 'center'},
  textBox4_1: {
    fontSize: normalize(20),
    fontWeight: '500',
    fontFamily: 'OpenSans-Medium',
  },
  imageBg: {
    height: '100%',
  },
  currencyRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyRowText: {
    alignContent: 'flex-start',
    color: '#000',
    fontSize: 16,
  },
});

import React, {useState, useEffect, useContext} from 'react';
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
import {ScrollView, State, TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StoreContext} from '../component/Context';

import Feather from 'react-native-vector-icons/Feather';
import {normalize} from '../assets/theme';
// neu cac truong giong voi du lieu API tra ve
//  thi dung lenh
//  (const result = response.data;

// setType(type => {
//   return {...result};
// });)
// neu cac truong khong giong hoan toan voi cac truong API
// thi ta dung nhu sau
//  (const result = response.data;

// setType(type => {
//   response.data=result.METER_NO(ten bien);
// });)

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

let numRender = 0;

export default function ThongTinDongHo({navigation, route}) {
  const [type, setType] = React.useState({
    UserAccount: '',
    METER_NO: '',
    METER_NAME: '',
    METER_MODEL_DESC: '',
    CUSTOMER_CODE: '',
    CUSTOMER_NAME: '',
    ADDRESS: '',
    PHONE: '',
    EMAIL: '',
    CREATED: '',
    LINE_NAME: '',
    MODULE_NO: '',
  });

  const UserNameContextData = useContext(StoreContext);
  const store = useContext(StoreContext);

  React.useEffect(() => {
    const {NO} = route.params;
    //console.log(route);

    const No = axios
      .get('http://222.252.14.147:6060/api/GetMeter', {
        params: {
          No: NO,
        },
      })
      .then(function (response) {
        console.log('1', 'response:', response.data);

        const result = response.data;

        setType(type => {
          return {...type, ...result};
        });
      })
      .catch(function (error) {
        console.log('error:', error);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#15AD9C'} />

      <View>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thông số đồng hồ</Text>
          </View>
        </View>

        <ScrollView style={{marginBottom:170}}>
          <View>
            <View style={styles.block}>
              <Text style={styles.title}>Số No đồng hồ</Text>
              <TextInput
                style={styles.textInput}
                value={type.METER_NO}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.METER_NO = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Tên đồng hồ</Text>
              <TextInput
                style={styles.textInput}
                value={type.METER_NAME}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.METER_NAME = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Kiểu đông hồ</Text>
              <TextInput
                style={styles.textInput}
                value={type.METER_MODEL_DESC}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.METER_MODEL_DESC = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Mã khách hàng</Text>
              <TextInput
                style={styles.textInput}
                value={type.CUSTOMER_CODE}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.CUSTOMER_CODE = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Tên khách hàng</Text>
              <TextInput
                style={styles.textInput}
                value={store.state.USER_NAME}
                editable={false}
                onChangeText={text => {
                  store.setState(state => {
                    state.USER_NAME = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Địa chỉ khách hàng</Text>
              <TextInput
                style={styles.textInput}
                value={type.ADDRESS}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.ADDRESS = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Điện thoại khách hàng</Text>
              <TextInput
                style={styles.textInput}
                value={type.PHONE}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.PHONE = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Email khách hàng</Text>
              <TextInput
                style={styles.textInput}
                value={store.state.USER_EMAIL}
                editable={false}
                onChangeText={text => {
                  store.setState(state => {
                    state.USER_EMAIL = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Thời gian tạo đồng hồ</Text>
              <TextInput
                style={styles.textInput}
                value={type.CREATED}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.CREATED = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>Tên trạm</Text>
              <TextInput
                style={styles.textInput}
                value={type.LINE_NAME}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.LINE_NAME = text;
                    return {...state};
                  });
                }}
              />
            </View>

            <View style={styles.block}>
              <Text style={styles.title}>
                Số No module gắn trên đồng hồ
              </Text>
              <TextInput
                style={styles.textInput}
                value={type.MODULE_NO}
                editable={false}
                onChangeText={text => {
                  setType(state => {
                    state.MODULE_NO = text;
                    return {...state};
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
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
    marginRight: 110,
    fontSize: 20,
    fontWeight: 'bold',
  },

  textInput: {
    height: heightScreen*0.05,
    // backgroundColor:'pink',
    borderBottomWidth: 1.5,
    borderColor: '#dddd',
    marginTop: 20,
    marginBottom: 5,
    fontSize: normalize(15),
    fontWeight: '300',
    color: 'black',
  },

  block: {
    paddingHorizontal: 10,
    marginLeft: 15,
  },
  header: {
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
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  title:{marginTop: 10, fontSize:normalize(18)}
});

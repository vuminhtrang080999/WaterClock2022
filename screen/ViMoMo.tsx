import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  Modal,
  Pressable,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {normalize} from '../assets/theme';
import {StoreContext} from '../component/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

export default function ViMoMo({navigation}) {
  const store = React.useContext(StoreContext);
  const [state, setState] = React.useState({
    modalVisible: false,
    passWord: '',
    textInput:'',
    OTP:'',
  });

  const storeMomo = async momo  => {
    try {
      await AsyncStorage.setItem('MOMO', JSON.stringify(momo));
    } catch (err) {}
  };

  const getMomo = async () => {
    try {
      const result = await AsyncStorage.getItem('MOMO');
      const  momo = JSON.parse(result as string);
      return momo;
    } catch (e) {
      // saving error
    }
  }
  const updateMomo = async () => {
    const momo = await getMomo();
    if (momo) {
      setState(state => {
        state.textInput = momo;
        return {...state};
      });
    }
  };


  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={{flex: 1}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={state.modalVisible}
          onRequestClose={() => {
            setState(state => {
              state.modalVisible = false;
              return {...state};
            });
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Thông báo</Text>
              <TextInput
                style={{fontSize: normalize(15)}}
                maxLength={6}
                onChangeText={text => {
                  setState(state => {
                    state.OTP = text;
                    return {...state};
                  });
                }}
                keyboardType="numeric"
                placeholder="Nhập mã OTP gửi về số điện thoại"
              />

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() =>
                    setState(state => {
                      state.modalVisible = false;
                      return {...state};
                    })
                  }>
                  <Text style={styles.textStyle}>Huỷ</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}

                  onPress={() => {
                    setState(state => {
                      state.modalVisible = false;
                      return {...state};
                    });

                    store.setState(state => {
                      state.momoIsValid = true;
                      return{...state}
                    })

                    if (state.OTP === '123456') {
                      Alert.alert('Thông báo', 'Thêm ví thành công');
                      navigation.goBack('ThanhToan')
                    } else {
                      Alert.alert('Thông báo', 'Sai mã OTP');
                    }
                    
                  }}>
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>

        <View style={styles.headerButton}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 5}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Ví MoMo</Text>
          </View>
        </View>

        <View style={styles.block1}>
          <Image
            source={require('../image/MoMo.png')}
            style={{resizeMode: 'cover', height: '80%', width: '30%'}}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            //backgroundColor: 'gold',
          }}>
          <Text
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              fontSize: normalize(20),
            }}>
            Nhập số điện thoại
          </Text>
          <TextInput
            maxLength={10}
            //defaultValue={store.state.USER_ACCOUNT}
            style={{marginLeft: 10, fontSize: normalize(15)}}
            keyboardType="numeric"
            enablesReturnKeyAutomatically={true}
            keyboardAppearance="default"
            placeholder="Nhập số điện thoại"
            // onChangeText={text => {
            //   store.setState(state => {
            //     state.momoAccount = text;
            //     return {...state};
            //   });
            // }}
            onEndEditing={(e) => {
              store.setState(state=>{
                state.momoAccount=e.nativeEvent.text
                return{...state}
              })
              //console.log('e',store.state.momoAccount)
            }}
          />
          <Text
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              fontSize: normalize(20),
            }}>
            Nhập mật khẩu
          </Text>
          <TextInput
            maxLength={6}
            keyboardType="numeric"
            enablesReturnKeyAutomatically={true}
            keyboardAppearance="default"
            placeholder="Nhập mật khẩu"
            style={{marginTop: 10, marginLeft: 10, fontSize: normalize(15)}}
            onChangeText={text => {
              setState(state => {
                state.passWord = text;
                return {...state};
              });
            }}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {store.state.momoAccount === '' || state.passWord === '' ? (
            <TouchableOpacity
              onPress={()=>{Alert.alert('Thông báo', 'Vui lòng điền đủ thông tin')}}
              style={[styles.button2, {backgroundColor: '#cccc'}]}>
              <Text style={styles.text2}>Thêm ví MoMo</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={ async () => {

                await storeMomo({
                  momo: state.textInput
                });

                setState(state => {
                  state.modalVisible = true;
                  return {...state};
                });
              }}
              style={[styles.button2, {backgroundColor: '#15AD9C'}]}>
              <Text style={styles.text2}>Thêm ví MoMo</Text>
            </TouchableOpacity>
          )}
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
    marginRight: 85,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text2: {
    marginHorizontal: 20,
    fontSize: normalize(20),
    fontWeight: '400',
    color: '#ffff',
  },
  text4: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '100',
    color: '#ffff',
  },
  text3: {
    marginLeft: 95,
    marginTop: 30,
    marginBottom: -30,
    fontSize: 20,
    fontWeight: 'normal',
    width: screenWidth,
  },
  image: {
    resizeMode: 'center',
    width: screenWidth,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  button2: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    backgroundColor: '#15AD9C',
    height: screenHeight * 0.06,
    borderRadius: 20,
  },

  button1: {
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.8,
    backgroundColor: '#15AD9C',
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
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
  imageBg: {
    height: '100%',
  },
  block1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: '18%',
    //backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});

import React, {useState, useEffect, useContext, createRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  Pressable,
  Button,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {StoreContext} from '../component/Context';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const Profile = ({navigation, route}) => {
  const theme = useTheme();
  const {colors} = useTheme();
  const condition = /[\S]{2,6}( )\S+/;

  const conditionEmail = /\S+@\S+\.\S+/;

  const [imageCamera, setImageCamera] = React.useState<string>();

  const store = useContext(StoreContext);

  const [type, setType] = React.useState({
    Note: '',
    imageCameraCurrent: '',
    imageCamera: '',
  });

  const storeProfile = async obj => {
    try {
      await AsyncStorage.setItem('USER_INFO', JSON.stringify(obj));
      // await AsyncStorage.setItem('imageCameraCurrent', JSON.stringify(obj));
      console.log('Lưu thành công');
    } catch (err) {}
  };

  const getProfile = async () => {
    try {
      const result = await AsyncStorage.getItem('USER_INFO');
      // const image = await AsyncStorage.getItem('imageCameraCurrent')

      const userInfo = JSON.parse(result as string);
      // const imageCurrent = JSON.parse(image  as string);

      console.log('Get thành công: ', userInfo);

      return userInfo;
    } catch (e) {
      // saving error
    }
  };

  const updateProfile = async () => {
    const userInfo = await getProfile();
    if (userInfo) {
      setType(state => {
        return userInfo;
      });
    } else {
      console.log('userInfo:', userInfo);
    }
  };

  React.useEffect(() => {
    updateProfile();
  }, []);

  // const takePhotoFromCamera = () => {
  //   const option: ImagePicker.CameraOptions = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };
  //   launchCamera(option, res => {
  //     if (res.didCancel) {
  //       // console.log('a');
  //     } else if (res.errorCode) {
  //       console.log(res.errorMessage);
  //     } else {
  //       const data = res.assets ? res.assets[0] : null;
  //       if (data !== null) {
  //         setImageCamera(imageCameraCurrent => {
  //           imageCameraCurrent = data.uri;
  //           return data.uri;
  //         });
  //         store.setState(state => {
  //           state.PROFILE_IMAGE = type.imageCameraCurrent;
  //           return {...state};
  //         });
  //       }
  //       //console.log('1', res);
  //     }
  //   });
  // };

  const takePhotoFromAlbum = () => {
    const option: ImagePicker.ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('a');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        //const data = res.assets[0];

        // setImageCamera(data);
        const data = res.assets ? res.assets[0] : null;
        if (data !== null) {
          setImageCamera(imageCameraCurrent => {
            imageCameraCurrent = data.uri;
            return data.uri;
          });
          store.setState(state => {
            state.PROFILE_IMAGE = type.imageCameraCurrent;
            return {...state};
          });
          console.log('123', data.uri);
        }
        console.log('1', res);
      }
    });
  };

  // const RenderImage = props => {
  //   if (imageCamera !== null) {
  //     console.log('imageCamera:', imageCamera);
  //     return (
  //       <Image
  //         source={{uri: imageCamera}}
  //         style={{height: 100, width: 100, borderRadius: 50}}
  //       />
  //     );
  //   } else {
  //     // console.log('imageCamera:', imageCamera);
  //     return (
  //       <Image
  //         source={require('../image/ava1.jpg')}
  //         style={{height: 100, width: 100, borderRadius: 50}}
  //       />
  //     );
  //   }
  // };

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.navigate('Home1')}>
              <AntDesign
                name="arrowleft"
                size={normalize(25)}
                color={'#ffff'}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thông tin cá nhân</Text>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <View style={styles.block1}>
            <View>
              {!imageCamera ? (
                <TouchableOpacity onPress={takePhotoFromAlbum}>
                  <Image
                    source={require('../image/ava2.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={takePhotoFromAlbum}>
                  <Image source={{uri: imageCamera}} style={styles.image} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <View style={styles.block2}>
          <View style={styles.textInput}>
            <Text style={styles.text4}>Họ và tên</Text>
            <TextInput
              style={{
                fontSize: normalize(15),
                color: colors.text,
                //backgroundColor: 'pink',
              }}
              autoComplete="off"
              autoCorrect={false}
              value={store.state.USER_NAME}
              placeholder="Chưa cập nhật"
              onChangeText={text => {
                store.setState(state => {
                  state.USER_NAME = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View style={styles.textInput}>
            <Text style={styles.text4}>Số điện thoại</Text>
            <TextInput
              style={{fontSize: normalize(15), color: colors.text}}
              value={store.state.USER_ACCOUNT}
              placeholder="Nhập số điện thoại"
              editable={false}
              onChangeText={text => {
                store.setState(state => {
                  state.USER_ACCOUNT = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View style={styles.textInput}>
            <Text style={styles.text4}>Email</Text>
            <TextInput
              style={{fontSize: normalize(15), color: colors.text}}
              value={store.state.USER_EMAIL}
              placeholder="Nhap email"
              onChangeText={text => {
                store.setState(state => {
                  state.USER_EMAIL = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View style={styles.textInput}>
            <Text style={styles.text4}>Địa chỉ</Text>
            <TextInput
              style={{fontSize: normalize(15), color: colors.text}}
              value={store.state.USER_ADDRESS}
              placeholder="Nhap dia chi"
              onChangeText={text => {
                store.setState(state => {
                  state.USER_ADDRESS = text;
                  return {...state};
                });
              }}
            />
          </View>

          <View style={styles.textInput}>
            <Text style={styles.text4}>Note</Text>
            <TextInput
              style={{fontSize: normalize(15), color: colors.text}}
              value={type.Note}
              onChangeText={text => {
                setType(state => {
                  state.Note = text;
                  return {...state};
                });
              }}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View style={styles.footer}>
            <Image
              style={{
                height: screenHeight * 0.08,
                width: screenHeight * 0.08,
              }}
              source={require('../image/security.png')}
            />

            <View style={{width: '40%'}}>
              <Text
                style={{
                  height: screenHeight * 0.06,
                  marginBottom: 5,
                  fontSize: normalize(15),
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Cập nhật thông tin để tăng độ an toàn khi sử dụng ứng dụng
              </Text>
              {condition ? (
                <TouchableOpacity
                  onPress={async () => {
                    await storeProfile({
                      UserID: store.state.USER_ID,
                      UserName: store.state.USER_ACCOUNT,
                      Address: store.state.USER_ADDRESS,
                      Email: store.state.USER_EMAIL,
                      Tel: store.state.USER_TEL,
                      Note: type.Note,
                      imageCamera: store.state.PROFILE_IMAGE,
                    });

                    axios
                      .get('http://222.252.14.147:6060/api/UpdateUser', {
                        params: {
                          UserID: store.state.USER_ID,
                          UserName: store.state.USER_NAME,
                          Address: store.state.USER_ADDRESS,
                          Email: store.state.USER_EMAIL,
                          Tel: store.state.USER_TEL,
                          Note: type.Note,
                        },
                      })
                      .then(function (response) {
                        //console.log('response:', response.data)
                        if (response.data.CODE === '1') {
                          navigation.navigate('Home');
                          Alert.alert('Thông báo', 'Cập nhật thành công');
                          console.log('response:', response.data);
                        } else {
                          Alert.alert(
                            'Thông báo',
                            'Vui lòng điền đầy đủ thông tin',
                          );
                          console.log('response:', response.data);
                          console.log('Thong tin ko dung');
                        }
                      })
                      .catch(function (error) {
                        console.log('error:', error);
                      });
                  }}
                  style={{
                    height: screenHeight * 0.04,
                    width: screenWidth * 0.35,
                    justifyContent: 'center',
                    backgroundColor: '#15AD9C',
                    alignItems: 'center',
                    marginBottom: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#ffff', fontSize: normalize(18)}}>
                    Cập nhật ngay
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#15AD9C',
    height: screenHeight / 8,
    width: screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    justifyContent: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginLeft: 10,
    //hight: screenHeight / 20,
    marginTop: 5,
    //backgroundColor: 'gold',
  },
  block1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  block2: {
    flexDirection: 'column',
    //justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: '#cccc',
    paddingHorizontal: 10,
  },
  block3: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    height: 150,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  block4: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    width: '100%',
    height: 300,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  footer: {
    //backgroundColor: 'pink',
    width: screenWidth * 0.95,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    height: 40,
    width: 100,
    marginLeft: -30,
    marginTop: -10,
  },
  buttonStyle1: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    height: 30,
    width: 200,
    marginLeft: -40,
    marginTop: 5,
  },
  headerBottomSheet: {
    backgroundColor: '#ffff',
    shadowColor: '#3333',
    shadowOffset: {width: -1, height: -3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeaderBottomSheet: {
    alignItems: 'center',
  },
  panelHandleBottomSheet: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  image: {
    height: screenHeight / 9,
    width: screenWidth / 5,
    borderRadius: 50,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginVertical: 10,
    //backgroundColor: 'pink',
  },
  text4: {fontSize: normalize(20), fontWeight: '500'},
  imageBg: {
    height: '100%',
  },
});

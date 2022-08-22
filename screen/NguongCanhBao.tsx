import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {StoreContext} from '../component/Context';
import SelectDropdown from 'react-native-select-dropdown';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const NguongCanhBao = ({navigation}) => {
  const colors = useTheme();

  const store = React.useContext(StoreContext);

  const [state, setState] = React.useState({
    MeterNo: '',
    Date: '',
    selectedID: '',
    upLevel: '',
    downLevel: '',
  });

  const storeDownLevel = async downlevel => {
    try {
      await AsyncStorage.setItem('DOWN_LEVEL', JSON.stringify(downlevel));
    } catch (err) {}
  };

  const storeUpLevel = async uplevel => {
    try {
      await AsyncStorage.setItem('UP_LEVEL', JSON.stringify(uplevel));
    } catch (err) {}
  };

  const getDownLevel = async () => {
    try {
      const result = await AsyncStorage.getItem('DOWN_LEVEL');
      const downLevel = JSON.parse(result as string);
      return downLevel;
    } catch (e) {
      // saving error
    }
  };

  const updateDownLevel = async () => {
    const downLevel = await getDownLevel();
    if (downLevel) {
      setState(state => {
        state.downLevel = downLevel;
        return {...state};
      });
    }
  };

  const getUpLevel = async () => {
    try {
      const result = await AsyncStorage.getItem('UP_LEVEL');
      const upLevel = JSON.parse(result as string);

      return upLevel;
    } catch (e) {
      // saving error
    }
  };

  const updateUpLevel = async () => {
    const upLevel = await getUpLevel();
    if (upLevel) {
      setState(state => {
        state.upLevel = upLevel;
        return {...state};
      });
    }
  };

  React.useEffect(() => {
    updateDownLevel();
    updateUpLevel();
  }, []);

  //const data = store.state.dataSoDongHo;

const data = ['20210012','20221010'];

  let backgroundColor = '#bbbbbb';
  const isValid =
    store.state.DongHo !== '' &&
    store.state.UP_LEVEL !== '' &&
    store.state.DOWN_LEVEL !== '';

  if (isValid) {
    backgroundColor = '#15AD9C';
  }

  // console.log('selectedID ', state.selectedID);

  // console.log('up', state.upLevel)
  // console.log('down', state.downLevel)

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />

        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Cài đặt ngưỡng cảnh báo</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Image
            style={styles.image}
            source={require('../image/canhbao.png')}
          />
        </View>

        <View
          style={{
            marginLeft: 10,
            marginHorizontal: 20,
          }}>
          <View style={styles.nguongcanhbao}>
            <View>
              <Text style={[styles.text, {color: colors.colors.text}]}>
                Số đồng hồ
              </Text>
              <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                  store.setState(state => {
                    state.DongHo = selectedItem;
                    return {...state};
                  });
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                dropdownIconPosition={'right'}
                defaultButtonText="Số đồng hồ"
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                rowTextStyle={{
                  color: 'black',
                  textAlign: 'left',
                  fontSize: normalize(18),
                }}
                rowStyle={{backgroundColor: '#ffff'}}
                searchPlaceHolder="2021..."
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={normalize(15)}
                    />
                  );
                }}
              />
            </View>
          </View>

          <View style={styles.textInput1}>
            <Text style={[styles.text, {color: colors.colors.text}]}>
              Ngưỡng trên
            </Text>
            <TextInput
              style={{color: colors.colors.text, fontSize: normalize(18)}}
              keyboardType="numeric"
              placeholder="Vui lòng điền ngưỡng trên"
              textAlign="left"
              defaultValue={store.state.UP_LEVEL}
              value={store.state.UP_LEVEL}
              maxLength={5}
              onChangeText={text => {
                store.setState(state => {
                  state.UP_LEVEL = text;
                  return {...state};
                });
              }}
              // onSubmitEditing={({ nativeEvent: { text }}) =>{
              //   store.setState(state=>{
              //     state.UP_LEVEL=text
              //     return{...state}
              //   })
              //   }}
            />
          </View>

          <View style={styles.textInput2}>
            <Text style={[styles.text, {color: colors.colors.text}]}>
              Ngưỡng dưới
            </Text>
            <TextInput
              style={{color: colors.colors.text, fontSize: normalize(18)}}
              value={store.state.DOWN_LEVEL}
              defaultValue={store.state.DOWN_LEVEL}
              keyboardType="numeric"
              placeholder="Vui lòng điền ngưỡng dưới"
              maxLength={5}
              onChangeText={text => {
                store.setState(state => {
                  state.DOWN_LEVEL = text;
                  return {...state};
                });
              }}
              // onSubmitEditing={({ nativeEvent: { text }}) =>{
              // store.setState(state=>{
              //   state.DOWN_LEVEL=text
              //   return{...state}
              // })
              // }}
            />
          </View>
        </View>

        {isValid ? (
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={async () => {
                // console.log('selectedID', store.state.DongHo);
                // console.log('UP_LEVEL', store.state.UP_LEVEL);
                // console.log('DOWN_LEVEL', store.state.DOWN_LEVEL);

                await storeDownLevel({
                  downLevel: state.downLevel,
                });

                await storeUpLevel({
                  upLevel: state.upLevel,
                });

                Alert.alert('Thông báo', ' Đặt cảnh báo thành công');
              }}
              style={[styles.button, {backgroundColor: backgroundColor}]}>
              <Text style={styles.text2}>Đặt ngưỡng cảnh báo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Thông báo', ' Vui Lòng điền đủ thông tin');
              }}
              style={[styles.button, {backgroundColor: backgroundColor}]}>
              <Text style={styles.text2}>Đặt ngưỡng cảnh báo</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default NguongCanhBao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
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
  headerText: {
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  image: {
    resizeMode: 'center',
    width: screenWidth,
    height: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
    //backgroundColor: '#ffff',
  },
  buttonStyle: {
    backgroundColor: '#ffff',
    height: screenHeight * 0.05,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderStyle: 'dotted',
  },
  buttonTextStyle: {
    fontFamily: 'OpenSans-LightItalic',
    fontSize: normalize(18),
    fontWeight: '300',
    textAlign: 'left',
  },
  searchInputStyle: {
    backgroundColor: '#ffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  text: {
    marginRight: 120,
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    //backgroundColor: '#15AD9C',
    height: screenHeight * 0.06,
    borderRadius: 20,
  },
  text2: {
    fontSize: normalize(20),
    fontWeight: '400',
    color: '#ffff',
  },
  nguongcanhbao: {
    marginTop: 10,
    borderRadius: 15,
    borderColor: '#bbbb',
    borderWidth: 0.3,
    borderStyle: 'dashed',
  },
  textInput1: {
    marginTop: 10,
    borderRadius: 15,
    borderColor: '#bbbb',
    borderWidth: 0.3,
    borderStyle: 'dashed',
  },
  textInput2: {
    marginTop: 10,
    borderRadius: 15,
    borderColor: '#bbbb',
    borderWidth: 0.3,
    borderStyle: 'dashed',
  },
  imageBg: {
    height: '100%',
  },
});

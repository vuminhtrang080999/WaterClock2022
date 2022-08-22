import React, {useContext} from 'react';
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
  FlatList,
  TextInput,
  Platform,
  Linking,
  ScrollView,
  ImageBackground,
} from 'react-native';
import axios from 'axios';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {StoreContext} from '../component/Context';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

export default function HoTro({navigation}) {
  const store = useContext(StoreContext);
  const UserNameContextData = useContext(StoreContext);
  const [type, setType] = React.useState({
    UserID: '',
    Content: '',
  });

  const theme = useTheme();
  const colors = useTheme();
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Hỗ Trợ</Text>
        </View>

        <View
          style={{
            marginTop: 10,
          }}>
          <Image
            style={styles.image}
            source={require('../image/support.png')}
          />
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={[styles.text, {color: colors.colors.text}]}>
            Số điện thoại
          </Text>
          <TextInput
            style={{
              marginLeft: 15,
              width: widthScreen,
              color: colors.colors.text,
              fontSize: normalize(15),
            }}
            placeholder="Số điện thoại/ID người dùng"
            value={UserNameContextData.state.USER_ACCOUNT}
            editable={false}
            onChangeText={text => {
              store.setState(state => {
                state.USER_ACCOUNT = text;
                return {...state};
              });
            }}
          />
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={[styles.text, {color: colors.colors.text}]}>
            Nội dung
          </Text>
          <View style={{height: heightScreen * 0.05}}>
            <TextInput
              style={{
                marginLeft: 15,
                width: widthScreen,
                color: colors.colors.text,
                fontSize: normalize(15),
              }}
              multiline
              placeholder="Nội dung"
              value={type.Content}
              onChangeText={text => {
                setType(state => {
                  state.Content = text;
                  return {...state};
                });
              }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              axios
                .get('http://222.252.14.147:6060/api/CreateMessage', {
                  params: {
                    UserID: store.state.USER_ID,
                    Content: type.Content,
                  },
                })
                .then(function (response) {
                  //console.log('response:', response.data)
                  if (response.data.CODE === '1') {
                    navigation.navigate('Home');
                    Alert.alert(
                      'Thông báo ',
                      'Gửi thành công, nhân viên hỗ trọw sẽ liên hệ bạn sớm nhất',
                    );
                  } else {
                    Alert.alert('Thông báo ', 'Lỗi');
                    console.log('response:', response.data);
                  }
                })
                .catch(function (error) {
                  console.log('error:', error);
                });
            }}
            style={styles.button}>
            <Text style={styles.text2}>Gửi yêu cầu</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{color: colors.colors.text, fontSize: normalize(15)}}>
            {' '}
            Liên hệ hotline để được hỗ trợ ngay{' '}
          </Text>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL('tel:$(19001825)');
            }}>
            <Text
              style={{
                color: '#15AD9C',
                fontWeight: '700',
                fontSize: normalize(15),
              }}>
              {' '}
              19001825
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#15AD9C',
    height: heightScreen / 8,
    width: widthScreen,
    justifyContent: 'center',
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
  text2: {
    marginHorizontal: 20,
    fontSize: normalize(20),
    fontWeight: '400',
    color: '#ffff',
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
    resizeMode: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
    height: 100,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: '#bbbb',
    //backgroundColor: '#ffff',
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen * 0.95,
    backgroundColor: '#15AD9C',
    height: heightScreen * 0.06,
    borderRadius: 20,
  },
  text: {
    marginLeft: 15,
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  imageBg: {
    height: '100%',
  },
});

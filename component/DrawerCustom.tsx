import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {StoreContext, AuthContext} from '../component/Context';
import {useTheme} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Drawer, TouchableRipple} from 'react-native-paper';
import {Switch} from 'react-native-gesture-handler';
import axios from 'axios';
import {normalize} from '../assets/theme';
const CustomDrawer = props => {
  const paperTheme = useTheme();

  const UserNameContextData = useContext(StoreContext);

  // const toggleTheme  = useContext(StoreContext)

  const store = React.useContext(StoreContext);

  const getMeterAccount = () => {
    const apiURL = 'http://222.252.14.147:6060/api/GetMeterAccount';
    axios
      .get(apiURL, {
        params: {
          UserAccount: store.state.USER_ACCOUNT,
        },
      })
      .then(function (response) {
        const item = response.data as any[];
        //console.log('item:', item);
        const DATA1 = item.map(item => item.METER_NO);
        //console.log('DATA1:', DATA1);

        store.setState(state => {
          state.dataSoDongHo = DATA1;
          state.dataDongHo = item;
          //console.log('state.NOTIFICATION:', state.NOTIFICATION);
          return {...state};
        });
      })
      .catch(function (error) {
        console.log('error:', error);
      });
  };

  const getMessage = () => {
    const apiURL = 'http://222.252.14.147:6060/api/GetMessage';
    axios
      .get(apiURL, {
        params: {
          UserID: '106',

          // UserID: store.state.USER_ID
        },
      })
      .then(function (response) {
        const item1 = response.data as [];

        // console.log('item1:', item1);
        //setData(item);

        let newNotificationLength = store.state.dataGetMessage.filter(item => {
          if (item.MARK_READ === '0') 
          return {...item};
        });
        console.log('newNotificationLength', store.state.dataGetMessage);

        store.setState(state => {
          state.NOTIFICATION = newNotificationLength.length;
          state.dataGetMessage = item1;
          return {...state};
        });
      })

      .catch(function (error) {
        console.log('error:', error);
      });
  };

  React.useEffect(() => {
    getMeterAccount();
    getMessage();
  }, []);

  //console.log('hẻe' , store.state.NOTIFICATION)
  const {toggleTheme} = React.useContext(AuthContext);

  const navigation = props.navigation;
  const colors = useTheme();
  const theme = useTheme();

  const {width: screenWidth} = Dimensions.get('window');
  const {height: screenHeight} = Dimensions.get('window');

  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          style={{
            width: '100%',
            height: screenHeight * 0.15,
            justifyContent: 'center',
          }}
          source={require('../image/image5.jpg')}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <View style={{justifyContent: 'center', margin: 10}}>
                <Ionicons
                  name="person-circle-outline"
                  size={normalize(50)}
                  color="#111"
                />
                <Text
                  style={{
                    color: '#111',
                    fontFamily: 'OpenSans-SemiBoldItalic',
                    fontSize: normalize(18),
                  }}>
                  {UserNameContextData.state.USER_NAME}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={{width: '100%', margin: 10}}>
          <DrawerItemList {...props} />
        </View>

        <View style={{margin: 10, width: '100%'}}>
          <Drawer.Section title="Mở rộng" theme={theme}>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                }}>
                <Text
                  style={{
                    fontSize: normalize(15),
                    fontWeight: 'bold',
                    color: colors.colors.text,
                  }}>
                  Chế độ tối
                </Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth: 0.3, borderTopColor: '#ccc'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="exit-outline"
              size={normalize(22)}
              color={colors.colors.text}
            />
            <Text
              style={{
                fontSize: normalize(15),
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: colors.colors.text,
              }}>
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CustomDrawer;

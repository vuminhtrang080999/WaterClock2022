import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useTheme} from '@react-navigation/native';

import CustomDrawer from '../component/DrawerCustom';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SettingScreen from '../screen/SettingScreen';
import ThongTinHoaDon from '../screen/ThongTinHoaDon';
import ThanhToanHoaDon from '../screen/ThanhToanHoaDon';
import ThongTinDongHo from '../screen/ThongTinDongHo';

import TabNavigator from './TabNavigator';
import {normalize} from '../assets/theme';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const colors = useTheme();
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerLabelStyle: {marginLeft: -25, color: colors.colors.text},
          drawerActiveBackgroundColor: '#15AD9C',
          drawerActiveTintColor: '#ffff',
          drawerInactiveTintColor: '#333333',
        }}>
        <Drawer.Screen
          name="Trang chủ"
          component={TabNavigator}
          options={{
            drawerLabelStyle: {fontSize: normalize(16)},
            drawerIcon: ({color}) => (
              <Ionicons
                name="home-outline"
                size={normalize(20)}
                color={colors.colors.text}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cài Đặt"
          component={SettingScreen}
          options={{
            drawerLabelStyle: {fontSize: normalize(16)},
            drawerIcon: ({color}) => (
              <Ionicons
                name="settings-outline"
                size={normalize(20)}
                color={colors.colors.text}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Thông Tin Hoá Đơn"
          component={ThongTinHoaDon}
          options={{
            drawerLabelStyle: {fontSize: normalize(16)},
            drawerIcon: ({color}) => (
              <FontAwesome
                name="check-square"
                size={normalize(20)}
                color={colors.colors.text}
              />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Thanh Toán Hoá Đơn"
          component={ThanhToanHoaDon}
          options={{
            drawerLabelStyle:{fontSize:normalize(16)},
            drawerIcon: ({color}) => (
              <MaterialIcons name="payment" size={normalize(20)} color={colors.colors.text} />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="Thông Tin Đồng Hồ"
          component={ThongTinDongHo}
          options={{
            drawerLabelStyle: {fontSize: normalize(16)},
            drawerIcon: ({color}) => (
              <FontAwesome
                name="clock-o"
                size={normalize(20)}
                color={colors.colors.text}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default AppStack;

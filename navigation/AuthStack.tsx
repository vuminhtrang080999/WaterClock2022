import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OnboardingScreen from '../screen/OnboardingScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ForgetScreen from '../screen/ForgetScreen';
import OTPScreen from '../screen/OTPScreen';
import AddProfileScreen from '../screen/AddProfileScreen';
import ConfirmScreen from '../screen/ConfirmPasswordScreen';
import WelcomeScreen from '../screen/WelcomeScreen';

import SettingScreen from '../screen/SettingScreen';
import TouchID from '../screen/TouchID';

import UocTinhTienNuoc from '../screen/UocTinhTienNuoc';
import ThongTinHoaDon from '../screen/ThongTinHoaDon';
import ThanhToanHoaDon from '../screen/ThanhToanHoaDon';

import TheoDoiNuoc from '../screen/TheoDoiNuoc';
import NguongCanhBao from '../screen/NguongCanhBao';
import TheoDoiDongHo from '../screen/TheoDoiDongHo';

import ProfileScreen from '../screen/ProfileScreen';
import ViMoMo from '../screen/ViMoMo';

import ThongTinDongHo from '../screen/ThongTinDongHo';
import SoLuongDongHo from '../screen/SoLuongDongHo';
import ThongSoDongHo from '../screen/ThongSoDongHo';

import KhongHopDong from '../screen/KhongHopDong';
import ThemHopDong from '../screen/ThemHopDong';
import BankAccount from '../screen/BankAccount';
import GetBillingByDate from '../screen/GetBillingByDate';

import GetMeterDataByDateInput from '../screen/GetMeterDataByDateInput';
import GetMeterDataByDate from '../screen/GetMeterDataByDate';

import GetMeterDataInDayInput from '../screen/GetMeterDataInDayInput';
import GetMeterDataInDay from '../screen/GetMeterDataInDay';

import GetUsedDataByDateInput from '../screen/GetUsedDataByDateInput';
import GetUsedDataByDate from '../screen/GetUsedDataByDate';

import GetEventByDate from '../screen/GetEventByDate';

import HoTro from '../screen/HoTro';
import Notification from '../screen/Notification';

import ChangePassword from '../screen/ChangePassword';

import XemThemMuaSam from '../screen/XemThemMuaSam';
import Lazada from '../screen/Lazada';
import Shopee from '../screen/Shopee';
import PhuongNam from '../screen/PhuongNam';
import ThaiDieu from '../screen/ThaiDieu';
import BacTom from '../screen/BacTom';
import Eimich from '../screen/Eimich';
import WestWay from '../screen/WestWay';
import NamHoangGia from '../screen/NamHoangGia';

import XemThemSanUuDai from '../screen/XemThemSanUuDai';
import ThanhToan from '../screen/ThanhToan';
import TocotocoScreen from '../screen/TocotocoScreen';
import CGVScreen from '../screen/CGVScreen';
import TravalokaScreen from '../screen/TravalokaScreen';
import TigerSugarScreen from '../screen/TigerSugarScreen';
import BurgerScreen from '../screen/BurgerScreen';

import TabNavigator from './TabNavigator';
import AppStack from './AppStack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const TabStack = () => {
  return <TabNavigator navigation={undefined} />;
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginScreen"> 
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Forget" component={ForgetScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="AddProfileScreen" component={AddProfileScreen} />
      <Stack.Screen name="Confirm" component={ConfirmScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={AppStack} />

      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="TouchID" component={TouchID} />

      <Stack.Screen name="TheoDoiNuoc" component={TheoDoiNuoc} />
      <Stack.Screen name="NguongCanhBao" component={NguongCanhBao} />

      <Stack.Screen name="TheoDoiDongHo" component={TheoDoiDongHo} />
      <Stack.Screen name="GetEventByDate" component={GetEventByDate} />

      <Stack.Screen name="ThongTinHoaDon" component={ThongTinHoaDon} />
      <Stack.Screen name="ThanhToanHoaDon" component={ThanhToanHoaDon} />
      <Stack.Screen name="BankAccount" component={BankAccount} />
      <Stack.Screen name="ViMoMo" component={ViMoMo} />

      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="HoTro" component={HoTro} />
      <Stack.Screen name="Notification" component={Notification} />

      <Stack.Screen name="ChangePassword" component={ChangePassword} />

      <Stack.Screen name="ThongTinDongHo" component={ThongTinDongHo} />
      <Stack.Screen name="SoLuongDongHo" component={SoLuongDongHo} />
      <Stack.Screen name="ThongSoDongHo" component={ThongSoDongHo} />

      <Stack.Screen name="GetMeterDataInDay" component={GetMeterDataInDay} />
      <Stack.Screen
        name="GetMeterDataInDayInput"
        component={GetMeterDataInDayInput}
      />

      <Stack.Screen
        name="GetMeterDataByDateInput"
        component={GetMeterDataByDateInput}
      />
      <Stack.Screen name="GetMeterDataByDate" component={GetMeterDataByDate} />

      <Stack.Screen
        name="GetUsedDataByDateInput"
        component={GetUsedDataByDateInput}
      />
      <Stack.Screen name="GetUsedDataByDate" component={GetUsedDataByDate} />

      <Stack.Screen name="GetBillingByDate" component={GetBillingByDate} />

      <Stack.Screen name="XemThemSanUuDai" component={XemThemSanUuDai} />
      <Stack.Screen name="ThanhToan" component={ThanhToan} />
      <Stack.Screen name="TocotocoScreen" component={TocotocoScreen} />
      <Stack.Screen name="CGVScreen" component={CGVScreen} />
      <Stack.Screen name="TravalokaScreen" component={TravalokaScreen} />
      <Stack.Screen name="TigerSugarScreen" component={TigerSugarScreen} />
      <Stack.Screen name="BurgerScreen" component={BurgerScreen} />

      <Stack.Screen name="XemThemMuaSam" component={XemThemMuaSam} />
      <Stack.Screen name="Lazada" component={Lazada} />
      <Stack.Screen name="Shopee" component={Shopee} />
      <Stack.Screen name="PhuongNam" component={PhuongNam} />
      <Stack.Screen name="ThaiDieu" component={ThaiDieu} />
      <Stack.Screen name="BacTom" component={BacTom} />
      <Stack.Screen name="Eimich" component={Eimich} />
      <Stack.Screen name="WestWay" component={WestWay} />
      <Stack.Screen name="NamHoangGia" component={NamHoangGia} />
    </Stack.Navigator>
  );
};
export default AuthStack;

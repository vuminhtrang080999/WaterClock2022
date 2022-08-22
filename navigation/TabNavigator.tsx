import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from '../screen/HomeScreen';
import HoTro from '../screen/HoTro';
import TichDiem from '../screen/Tichdiem';
import TheoDoiNuoc from '../screen/TheoDoiNuoc';
import ProfileScreen from '../screen/ProfileScreen';
import Notification from '../screen/Notification';
import { normalize, scaleHeight } from '../assets/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const {width: screenWidth} = Dimensions.get('window');
const {height: screenHeight} = Dimensions.get('window');

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="TheoDoiNuoc" component={TheoDoiNuoc} />
    </Stack.Navigator>
  );
};

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
    initialRouteName='Home1'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#15AD9C',height:screenHeight*0.06},
        tabBarActiveTintColor: '#ffff',
        tabBarInactiveTintColor: '#cccc',
      }}>
      <Tab.Screen
        name="Hỗ Trợ"
        component={HoTro}
        options={{
          tabBarLabelStyle: {fontSize:normalize(17)},
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="contacts-outline"
              size={normalize(size)}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#15AD9C',
          },
          tabBarLabelStyle: {fontSize:normalize(17)},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={normalize(size)} />
          ),
        })}
      />

      <Tab.Screen
        name="Theo Dõi Nước"
        component={TheoDoiNuoc}
        options={{
          tabBarLabelStyle: {fontSize:normalize(17)},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="water-outline" size={normalize(size)} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === 'Notification') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;

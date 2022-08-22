import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  BackHandler,
} from 'react-native';

import TouchID from 'react-native-touch-id';
import Feather from 'react-native-vector-icons/Feather';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

export default function Fingerprint({navigation}) {
  const [Supported, setSupported] = useState(false);

  useEffect(() => {
    TouchID.isSupported()
      .then(success => {
        setSupported(true);
      })
      .catch(error => {
        //console.log('Lỗi:' + error);
        Alert.alert('Thông báo ', 'Lỗi');
      });
  }, []);

  function handleLogin() {
    const configs = {
      title: 'Thêm vân tay ',
      imageColor: '#1B97CF', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch your finger', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel',
      unifiedErrors: false,
    };
    TouchID.authenticate('Thêm vân tay', configs)
      .then(success => {
        //console.log('Thành công:)');
        Alert.alert('Thông báo ', 'Thêm thành công');
        navigation.navigate('Setting');
      })
      .catch(error => {
        console.log('Lỗi 1:' + error);
        
      });
  }

  return (
<ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}><View style={styles.container}>
      <View style={styles.headerButton}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 0}}
            onPress={() => navigation.navigate('Setting')}>
            <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Thêm vân tay</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', }}>
        <TouchableHighlight style={styles.btn} onPress={handleLogin}>
          <Text style={{fontSize: normalize(16), fontWeight: '500', color:'#ffff'}}>
            Touch
          </Text>
        </TouchableHighlight>
      </View>
    </View></ImageBackground>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#15AD9C',
    marginTop: screenHeight * 0.35,
    width: screenWidth * 0.2,
    height: screenHeight * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    backgroundColor: '#15AD9C',
    height: screenHeight / 8,
    width: screenWidth,
    justifyContent: 'center',
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
  imageBg: {
    height: '100%',
  },
});

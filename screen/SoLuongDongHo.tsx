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
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {StoreContext} from '../component/Context';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator} from 'react-native-paper';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Ionicons name="notifications-outline" size={20} style={{margin: 5}} />
    <View style={{padding: 10}}>
      <Text style={[styles.title, textColor]}>{item.METER_NO}</Text>
      <Text style={[styles.description, textColor]}>{item.CREATED}</Text>
    </View>
  </TouchableOpacity>
);

const SoLuongDongHo = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const [selectedId, setSelectedId] = React.useState(null);

  const store = React.useContext(StoreContext);

  React.useEffect(() => {
    return () => {};
  }, []);

  const renderItem = ({item, index}) => {
    const backgroundColor = item.METER_NO === selectedId ? '#E1E7E1' : '#ffff';
    const color = item.METER_NO === selectedId ? '#505350' : 'black';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.METER_NO);
          axios
            .get('http://222.252.14.147:6060/api/GetMeter', {
              params: {
                No: item.METER_NO,
              },
            })
            .then(function (response) {
              navigation.navigate('ThongSoDongHo', {
                NO: item.METER_NO,
              });
            })
            .catch(function (error) {
              console.log('error:', error);
            });
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

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
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Số lượng đồng hồ</Text>
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator size="small" color="#bbbb" animating />
        ) : (
          <FlatList
            style={styles.list}
            keyExtractor={item => `key-${item.METER_NO}`}
            renderItem={renderItem}
            data={store.state.dataDongHo}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default SoLuongDongHo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  list: {
    width: screenWidth,
    marginTop: 10,
    flex: 1,
    padding: 8,
  },
  item: {
    borderRadius: 15,
    borderColor: '#bbbb',
    borderWidth: 0.3,
    marginVertical: 4,
    marginHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
    padding: 5,
    shadowColor: '#bbbb',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {fontSize: normalize(16), fontFamily: 'OpenSans-SemiBold'},
  description: {
    color: '#64696D',
    opacity: 0.45,
    fontSize: normalize(15),
  },
  imageBg: {
    height: '100%',
  },
});

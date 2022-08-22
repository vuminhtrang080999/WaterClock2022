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
    <Ionicons
      name="notifications-outline"
      size={normalize(25)}
      style={{margin: 5}}
    />
    <View style={{padding: 10}}>
      <Text style={[styles.title, textColor]}>Thông báo</Text>
      <Text style={[styles.description, textColor]}>{item.EVT_TIME}</Text>
    </View>
  </TouchableOpacity>
);

const GetEventByDate = ({navigation, route}) => {
  const store = React.useContext(StoreContext);

  const [state, setState] = React.useState({
    isLoading: false,
    selectedId: null,
  });
  const event = route.params;
  const arr: string[] = [];
  for (let items of event) {
    let EVT_TIME: string = items.EVT_TIME;

    let date1 = EVT_TIME.substring(0, 10);
    let time1 = EVT_TIME.substring(11, 19);

    let date = date1
      .split('-')
      .map(x => x.padStart(2, '0'))
      .join('');
    let time = time1
      .split(':')
      .map(x => x.padStart(2, '0'))
      .join('');

    let dateTime = date.concat(time);

    arr.push(dateTime);
  }

  const renderItem = ({item, index}) => {
    const backgroundColor =
      item.EVT_TIME === state.selectedId ? '#DEEAEF' : '#ffffff';
    const color = item.EVT_TIME === state.selectedId ? '#505350' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setState(state => {
            state.selectedId = item.EVT_TIME;
            return {...state};
          });
          Alert.alert('Thông báo', item.EVT_DESC_VN, [
            {
              text: 'OK',
              onPress: () => {
                setState(state => {
                  state.selectedId = null;
                  return {...state};
                });
              },
            },
          ]);
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView>
        <StatusBar backgroundColor={'#15AD9C'} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Sự kiện cảnh báo</Text>
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={normalize(20)}
              color={'#ffff'}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.list}
          keyExtractor={item => item.EVT_TIME}
          renderItem={renderItem}
          data={store.state.getEventByDate}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
export default GetEventByDate;
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  list: {
    width: screenWidth,
    marginTop: 10,
    padding: 8,
    marginBottom:10,
    //backgroundColor:'pink'
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

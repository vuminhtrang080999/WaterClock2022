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
      size={normalize(20)}
      style={{margin: 5}}
    />
    <View style={{padding: 10}}>
      <Text style={[styles.title, textColor]}>Thông báo</Text>
      <Text style={[styles.description, textColor]}>{item.CREATED}</Text>
    </View>
  </TouchableOpacity>
);

const Notification = ({navigation}) => {
  const [state, setState] = React.useState({
    isLoading: false,
    selectedId: null,
  });

  const store = React.useContext(StoreContext);

  React.useEffect(() => {
    //getMessage();
    return () => {};
  }, []);

  const renderItem = ({item, index}) => {
    const backgroundColor =
      // selectedId === item.MESSAGE_ID ?'cyan':
      item.MARK_READ === '1' ? '#ffff' : '#A1AAA1';
    const color = item.MARK_READ === '1' ? '#505350' : 'black';

    return (

      <Item
        item={item}
        onPress={() => {
          setState(state => {
            state.selectedId = item.MESSAGE_ID;
            return {...state};
          });
          let messID = state.selectedId;
          if (item.MARK_READ === '1') {
            Alert.alert('Nội dung:', item.MESSAGE_CONTENT);
          } else {
            axios
              .get('http://222.252.14.147:6060/api/MarkReadMessage', {
                params: {
                  UserID: store.state.USER_ID,
                  MessageID: state.selectedId,
                  MarkRead: '1',
                },
              })
              .then(function (response) {
                Alert.alert('Nội dung:', item.MESSAGE_CONTENT);
                let newArray = store.state.dataGetMessage.map(item => {
                  if (item.MESSAGE_ID === messID) {
                    item.MARK_READ = '1';
                  }
                  return {...item};
                });
                // console.log('response:',response.data)
                store.setState(state => {
                  state.dataGetMessage = newArray;
                  return {...state};
                });
                // let newNotificationLength = store.state.dataGetMessage.filter(item=>{
                //   if(item.MARK_READ === '1')
                //   return{...item}
                // })
                // store.setState(state=>{
                //   state.NOTIFICATION=newNotificationLength.length;
                //   return{...state}
                // })
                // console.log('state.dataGetMessage',store.state.dataGetMessage)
              });
          }
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  //console.log('store.state.dataGetMessage', store.state.dataGetMessage);
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Thông báo</Text>
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={normalize(20)}
              color={'#ffff'}
            />
          </TouchableOpacity>
        </View>

        {state.isLoading ? (
          <ActivityIndicator size="small" color="#bbbb" animating />
        ) : (
          <FlatList
            style={styles.list}
            keyExtractor={item => item.MESSAGE_ID}
            renderItem={renderItem}
            data={store.state.dataGetMessage}
          />
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};
export default Notification;
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
    marginVertical: 15,
    flex: 1,
    padding: 8,
    // marginHorizontal:20,
    // backgroundColor:'pink'
  },
  item: {
    borderRadius: 15,
    borderColor: '#bbbb',
    borderWidth: 0.3,
   
    marginHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    padding: 5,
    shadowColor: '#bbbb',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {fontSize: normalize(18), fontFamily: 'OpenSans-SemiBold'},
  description: {
    color: '#64696D',
    opacity: 0.45,
    fontSize: normalize(16),
  },
  imageBg: {
    height: '100%',
  },
});

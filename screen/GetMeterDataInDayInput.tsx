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
import DateTimePicker from '@react-native-community/datetimepicker';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ActivityIndicator} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
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

const GetMeterDataInDayInput = ({navigation}) => {
  const colors = useTheme();
  const theme = useTheme();

  const store = React.useContext(StoreContext);

  const [state, setState] = React.useState({
    dateStart: new Date(),
    dateStartText: '',
    dateStartPicker: false,

    selectedItem: '',
    realTime1: '',
  });

  //const data = store.state.dataSoDongHo;
  const data = [ '20210012','20221010'];
  const onChangeStartDate = (event, selectedStarDate) => {
    const currentStarDate: Date = selectedStarDate;

    let tempDate = currentStarDate;

    let startDateText =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    const realTime1 =
      tempDate.getFullYear() +
      (tempDate.getMonth() + 1).toString().padStart(2, '0') +
      tempDate.getDate().toString().padStart(2, '0') +
      '000000';

    setState(state => {
      state.realTime1 = realTime1;
      state.dateStartPicker = false;
      state.dateStart = currentStarDate;
      state.dateStartText = startDateText;
      return {...state};
    });
  };
  const showStartDateMode = (currentMode: string) => {
    setState(state => {
      state.dateStartPicker = true;
      return {...state};
    });
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
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Ch??? s??? ?????ng h??? theo gi???</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Image
            style={styles.image}
            source={require('../image/Deatails.png')}
          />
        </View>

        <View style={{marginTop: 10}}>
          <View style={styles.block1}>
            <Text style={[styles.text, {color: colors.colors.text}]}>
              S??? ?????ng h???
            </Text>
            <SelectDropdown
              data={data}
              onSelect={(selectedItem, index) => {
                setState(state => {
                  state.selectedItem = selectedItem;
                  return {...state};
                });
                console.log(typeof selectedItem);

                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              dropdownIconPosition={'right'}
              defaultButtonText="S??? ?????ng h???"
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              search={true}
              searchInputStyle={styles.searchInputStyle}
              searchPlaceHolderColor={'#cccccc'}
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
                    size={15}
                  />
                );
              }}
            />
          </View>

          <View style={styles.block2}>
            <Text style={[styles.text, {color: colors.colors.text}]}>
              Ng??y b???t ?????u
            </Text>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => showStartDateMode('date')}>
                <Feather
                  name="calendar"
                  size={normalize(25)}
                  color={colors.colors.text}
                  style={{marginBottom: 5, marginLeft: 8, marginTop: 5}}
                />
              </TouchableOpacity>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={[styles.textDate, {color: colors.colors.text}]}>
                  {state.dateStartText}
                </Text>
              </View>
            </View>
            {state.dateStartPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={state.dateStart}
                mode={'date'}
                is24Hour={true}
                display="default"
                maximumDate={new Date(2300, 10, 20)}
                minimumDate={new Date(1950, 0, 1)}
                neutralButtonLabel="clear"
                onChange={onChangeStartDate}
              />
            )}
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              axios
                .get('http://222.252.14.147:6060/api/GetMeterDataInDay', {
                  params: {
                    MeterNo: state.selectedItem,
                    Date: state.realTime1,
                  },
                })
                .then(function (response) {
                  if (state.selectedItem === '' || state.dateStartText === '') {
                    Alert.alert('Th??ng b??o', 'Vui l??ng ??i???n ????? th??ng tin');
                  } else if ((response.data as any[]).length === 0) {
                    Alert.alert('Th??ng b??o', ' Kh??ng c?? d??? li???u');
                    console.log('data',response.data)
                  } else if (state.dateStart > new Date()) {
                    Alert.alert(
                      'Th??ng b??o',
                      ' Ng??y ???????c ch???n ph???i nh??? h??n ho???c b???ng ng??y hi???n t???i',
                    );
                  } else {
                    navigation.navigate('GetMeterDataInDay', response.data);
                  }
                })
                .catch(function (error) {
                  console.log('error:', error);
                });
            }}>
            <Text style={styles.text2}>Ki???m tra th??ng tin</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default GetMeterDataInDayInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
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
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  list: {
    width: screenWidth,
    marginTop: screenHeight / 8,
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
  title: {fontSize: 16, fontFamily: 'OpenSans-SemiBold'},
  description: {
    color: '#64696D',
    opacity: 0.45,
  },
  image: {
    resizeMode: 'center',
    width: screenWidth,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  buttonStyle: {
    backgroundColor: '#ffff',
    height: screenHeight * 0.055,
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderStyle: 'dotted',
  },
  buttonStyle1: {
    backgroundColor: '#ffff',
    height: screenHeight * 0.055,
    width: screenWidth * 0.35,
    borderBottomWidth: 1,
  },
  buttonTextStyle: {
    fontSize: normalize(18),
    fontWeight: '300',
    textAlign: 'left',
  },
  searchInputStyle: {
    backgroundColor: '#ffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  block1: {
    marginLeft: 10,
  },
  block2: {
    //backgroundColor: 'pink',
    marginLeft: 10,
    marginVertical: 10,
    height: screenHeight * 0.07,
    width: screenWidth * 0.45,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderStyle: 'solid',
  },
  text: {
    marginLeft: 10,
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  textDate: {
    marginLeft: 10,
    fontSize: normalize(16),
    fontFamily: 'SourceSerifPro-LightItalic',
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 0.95,
    backgroundColor: '#15AD9C',
    height: screenHeight * 0.06,
    borderRadius: 20,
  },
  text2: {
    marginHorizontal: 20,
    fontSize: normalize(20),
    fontWeight: '400',
    color: '#ffff',
  },
  textInputTime: {
    fontSize: normalize(15),
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.055,
    width: screenWidth * 0.2,
    //backgroundColor:'pink',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  imageBg: {
    height: '100%',
  },
});

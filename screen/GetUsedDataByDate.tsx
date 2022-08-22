import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Modal,
  Alert,
  Pressable,
  FlatList,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {useTheme} from '@react-navigation/native';
import {normalize, scaleWidth} from '../assets/theme';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

const Item = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: normalize(18), fontWeight: '500'}}>
          Ngày sử dụng{' '}
        </Text>
        <Text>{item.DATA_TIME.substring(5, 10)}</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: normalize(18), fontWeight: '500'}}>
          Lượng sử dụng
        </Text>
        <Text style={{textAlign: 'center'}}>{item.USED_TOTAL}</Text>
      </View>
    </View>
  );
};

export default function GetUsedDataByDate({navigation, route}) {
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const {colors} = useTheme();
  const [type, setType] = React.useState({
    DATA_TIME: '',
    USED_TOTAL: '',
    selectedDateMax: '',
    selectedDateMin: '',
    min: '',
    max: '',
    flatlistMax: false,
    flatlistMin: false,
  });

  type PropsData = {USED_TOTAL: string; DATA_TIME: string}[];
  const data = route.params as PropsData;
  let arr2: number[] = [];
  let arr3: string[] = [];

  for (let items of data) {
    let Used_Total: string = items.USED_TOTAL;
    let Date_Time: string = items.DATA_TIME;
    Used_Total = items.USED_TOTAL;
    arr2.push(Number(Used_Total));
    arr3.push(Date_Time.substring(5, 10));
  }

  let Max: PropsData = [];
  let getMax: PropsData = [];
  let periodMax = type.selectedDateMax.substring(0, 2);

  if (arr2.length < 30 && Number(periodMax) === 5) {
    Max = data.slice(arr2.length - 5, arr2.length);
    getMax = Max.filter(item => Number(item.USED_TOTAL) >= Number(type.max));
  } else if (Number(periodMax) === 10 && arr2.length < 30) {
    Max = data.slice(arr2.length - 10, arr2.length);
    getMax = Max.filter(item => Number(item.USED_TOTAL) >= Number(type.max));
  } else if (Number(periodMax) === 10 && arr2.length < 30) {
    Max = data.slice(arr2.length - 15, arr2.length);
    getMax = Max.filter(item => Number(item.USED_TOTAL) >= Number(type.max));
  } else if (Number(periodMax) === 30 && arr2.length < 30) {
    Max = data.slice(arr2.length - arr2.length, arr2.length);
    getMax = Max.filter(item => Number(item.USED_TOTAL) > Number(type.max));
  } else if (arr2.length > 30) {
    Max = data.slice(arr2.length - Number(periodMax), arr2.length);
    getMax = Max.filter(item => Number(item.USED_TOTAL) >= Number(type.max));
  }

  let Min: PropsData = [];
  let getMin: PropsData = [];
  let periodMin = type.selectedDateMin.substring(0, 2);

  if (arr2.length < 30 && Number(periodMin) === 5) {
    Min = data.slice(arr2.length - 5, arr2.length);
    getMin = Min.filter(item => Number(item.USED_TOTAL) < Number(type.min));
  } else if (Number(periodMin) === 10 && arr2.length < 30) {
    Min = data.slice(arr2.length - 10, arr2.length);
    getMin = Min.filter(item => Number(item.USED_TOTAL) <= Number(type.min));
  } else if (Number(periodMin) === 15 && arr2.length < 30) {
    Min = data.slice(arr2.length - 15, arr2.length);
    getMin = Min.filter(item => Number(item.USED_TOTAL) <= Number(type.min));
  } else if (Number(periodMin) === 30 && arr2.length < 30) {
    Min = data.slice(arr2.length - arr2.length, arr2.length);
    getMin = Min.filter(item => Number(item.USED_TOTAL) <= Number(type.min));
  } else if (arr2.length > 30) {
    Min = data.slice(arr2.length - Number(periodMin), arr2.length);
    getMin = Min.filter(item => Number(item.USED_TOTAL) <= Number(type.min));
  }
  //console.log('Min', Min);

  // React.useLayoutEffect(() => {
  //   // console.log(route.params);z
  //   const data = route.params;
  //   for (item of data) {
  //     Active_Total = item.ACTIVE_TOTAL;
  //     console.log(Active_Total);
  //     Date_Time = item.DATA_TIME;
  //     console.log(Date_Time);
  //   }
  // }, []);
  const Period = ['05 ngày', '10 ngày', '15 ngày', '30 ngày'];
  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#15AD9C'} />

        <View style={styles.headerButton}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.navigate('GetUsedDataByDateInput')}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Lượng sử dụng theo ngày</Text>
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <ScrollView horizontal>
            <BarChart
              data={{
                labels: arr3,
                datasets: [
                  {
                    data: arr2,
                  },
                ],
              }}
              width = {600} // from react-native {arr3.length * 60}
              height={heightScreen * 0.35}
              yAxisSuffix=" m3"
              
              //yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ccf3e0',
                backgroundGradientTo: '#ccf3e0',
                decimalPlaces: 2, // optional, defaults to 2dp
                propsForLabels: {
                  fontSize: normalize(15),
                },
                color: (opacity = 1) => `rgba(0,77,87, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(2,1,1,${opacity})`,
              }}
              style={{
                marginVertical: 8,
                marginHorizontal: 10,
                borderRadius: 16,
              }}
              yLabelsOffset={-10}
              xLabelsOffset={10}
              showValuesOnTopOfBars
            />
          </ScrollView>
        </View>

        <ScrollView style={{marginTop: 10, marginBottom: 30}}>
          <View style={styles.block3}>
            <View style={styles.box3}>
              <TextInput
                maxLength={10}
                value={type.max}
                placeholder="Mức trên"
                style={styles.textBox3}
                onChangeText={text => {
                  setType(type => {
                    type.max = text;
                    return {...type};
                  });
                }}
              />
            </View>
            <View style={{flex: 1}}></View>

            <View style={styles.box3}>
              <TextInput
                maxLength={10}
                value={type.min}
                placeholder="Mức dưới"
                style={styles.textBox3}
                onChangeText={text => {
                  setType(type => {
                    type.min = text;
                    return {...type};
                  });
                }}
              />
            </View>
          </View>

          <View style={styles.block2}>
            <View style={styles.box1}>
              <Text style={styles.textBox1}>Ngày sử dụng nhiều nhất</Text>
            </View>

            <View style={styles.box2}>
              <SelectDropdown
                data={Period}
                onSelect={(selectedItem, index) => {
                  setType(type => {
                    type.selectedDateMax = selectedItem;
                    return {...type};
                  });

                  //console.log( ' Max', Max)

                  //console.log('type.selectedDateMax', type.selectedDateMax);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                dropdownIconPosition={'right'}
                defaultButtonText="Chọn thời gian"
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                // search={true}
                // searchInputStyle={styles.searchInputStyle}
                // searchPlaceHolderColor={'#cccccc'}
                rowTextStyle={{
                  color: 'black',
                  textAlign: 'left',
                  fontSize: normalize(18),
                }}
                rowStyle={{backgroundColor: '#ffff'}}
                // searchPlaceHolder="2021..."
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={normalize(15)}
                    />
                  );
                }}
              />
              <View style={{flex: 1}}></View>
              <View style={styles.box1_1}>
                <TouchableOpacity
                  onPress={() => {
                    if (getMax === []) {
                      Alert.alert('Thông báo', 'Không có dữ liệu');
                    } else if (type.max === '') {
                      Alert.alert('Thông báo', 'Vui lòng điền mức trên');
                    } else {
                      setType(type => {
                        type.flatlistMax = true;
                        return {...type};
                      });
                    }
                  }}>
                  <Text style={styles.textButton}>Kiểm tra</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {type.flatlistMax === true ? (
            <View style={{width: widthScreen}}>
              <ScrollView horizontal style={{marginHorizontal: 10}}>
                <FlatList
                  data={getMax}
                  renderItem={renderItem}
                  keyExtractor={item => item.DATA_TIME}
                />
              </ScrollView>
            </View>
          ) : null}

          <View style={styles.block2}>
            <View style={styles.box1}>
              <Text style={styles.textBox1}>Ngày sử dụng ít nhất</Text>
            </View>

            <View style={styles.box2}>
              <SelectDropdown
                data={Period}
                onSelect={(selectedItem, index) => {
                  setType(type => {
                    type.selectedDateMin = selectedItem;
                    return {...type};
                  });
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                dropdownIconPosition={'right'}
                defaultButtonText="Chọn thời gian"
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                // search={true}
                // searchInputStyle={styles.searchInputStyle}
                // searchPlaceHolderColor={'#cccccc'}
                rowTextStyle={{
                  color: 'black',
                  textAlign: 'left',
                  fontSize: normalize(18),
                }}
                rowStyle={{backgroundColor: '#ffff'}}
                // searchPlaceHolder="2021..."
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={normalize(15)}
                    />
                  );
                }}
              />
              <View style={{flex: 1}}></View>
              <View style={styles.box1_1}>
                <TouchableOpacity
                  onPress={() => {
                    if (getMin === []) {
                      Alert.alert('Thông báo', 'Không có dữ liệu');
                    } else if (type.min === '') {
                      Alert.alert('Thông báo', 'Vui lòng điền mức dưới');
                    } else {
                      setType(type => {
                        type.flatlistMin = true;
                        return {...type};
                      });
                    }
                  }}>
                  <Text style={styles.textButton}>Kiểm tra</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {type.flatlistMin === true ? (
            <View style={{width: widthScreen}}>
              <ScrollView horizontal style={{marginHorizontal: 10}}>
                <FlatList
                  data={getMin}
                  renderItem={renderItem}
                  keyExtractor={item => item.DATA_TIME}
                />
              </ScrollView>
            </View>
          ) : null}
        </ScrollView>
        
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    backgroundColor: '#15AD9C',
    height: heightScreen / 8,
    width: widthScreen,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: normalize(25),
    fontFamily: 'OpenSans-SemiBold',
    color: '#ffff',
  },
  text2: {
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: '100',
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
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bbbb',
  },
  button: {
    marginHorizontal: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
    backgroundColor: '#15AD9C',
    height: 50,
    borderRadius: 20,
  },
  block1: {
    marginHorizontal: 10,
    marginBottom: -20,
    marginTop: 10,
  },

  imageBg: {
    height: '100%',
  },
  buttonStyle: {
    backgroundColor: '#ffff',
    height: heightScreen * 0.05,
    //marginVertical: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderStyle: 'dotted',
    width: widthScreen * 0.38,
  },
  buttonStyle1: {
    backgroundColor: '#ffff',
    height: heightScreen * 0.055,
    width: widthScreen * 0.35,
    borderBottomWidth: 1,
  },
  buttonTextStyle: {
    fontSize: normalize(18),
    fontWeight: '300',
    textAlign: 'left',
  },
  block2: {
    marginTop: 10,
    //backgroundColor: 'pink',
    marginHorizontal: 10,
    marginVertical: 10,
    //flexDirection: 'row',
    height: heightScreen * 0.1,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.8,
  },
  box1: {
    justifyContent: 'center',
    marginRight: 10,
    //  backgroundColor: 'pink',
  },
  box1_1: {
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#15AD9C',
    width: '40%',
    borderRadius: 10,
    borderWidth: 0.8,
  },
  textButton: {textAlign: 'center', color: '#ffffff'},
  textBox1: {
    fontSize: normalize(22),
    fontWeight: '500',
    marginLeft: 10,
  },

  textBox1_2: {
    fontSize: normalize(22),
    fontWeight: '500',
    marginRight: 10,
    //backgroundColor:'pink',
    height: heightScreen * 0.05,
    alignItems: 'center',
    borderBottomWidth: 0.8,
    marginBottom: 10,
    width: widthScreen * 0.4,
  },
  box2: {marginTop: 10, flexDirection: 'row', marginLeft: 10},

  block3: {
    marginTop: 10,
    //backgroundColor: 'pink',
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    height: heightScreen * 0.06,
    justifyContent: 'center',
  },
  box3: {flexDirection: 'column', justifyContent: 'center'},
  textBox3: {
    //backgroundColor: 'gold',
    justifyContent: 'center',
    textAlign: 'center',
    height: '77%',
    alignItems: 'center',
    width: widthScreen * 0.4,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    //
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    //alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  modalText: {
    //marginBottom: 15,
    textAlign: 'left',
  },
  modalTextButton: {
    //marginBottom: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
  buttonClose: {
    backgroundColor: '#15AD9C',
  },

  buttonModal: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '25%',
  },
  item: {
    //backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    width: widthScreen * 0.85,
    borderWidth: 0.5,

    //width:scaleWidth
  },
  date: {
    fontSize: 20,
  },
});

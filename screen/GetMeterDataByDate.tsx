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
  Alert,
  FlatList,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {normalize} from '../assets/theme';
import {useTheme} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

const Item = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: normalize(18), fontWeight: '500'}}>
          Ngày sử dụng
        </Text>
        <Text style={{textAlign: 'center'}}>{item.time.substring(5, 10)}</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: normalize(18), fontWeight: '500'}}>
          Lượng sử dụng
        </Text>
        <Text style={{textAlign: 'center'}}>{Number(item.activeTotal)}</Text>
      </View>
    </View>
  );
};

export default function GetMeterDataByDate({navigation, route}) {
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const [type, setType] = React.useState({
    METER_NO: '',
    DATA_TIME: '',
    ACTIVE_TOTAL: '',
    TEMPERATURE: '',
    VOLTAGE: '',
    TIME_SLOT: '',
    RESET_COUNT: '',
    SIGNAL: '',
    VERSION: '',
    GATEWAY_NO: '',
    selectedDateMax: '',
    selectedDateMin: '',
    showMax: false,
    showMin: false,
  });
  const {colors} = useTheme();

  const arr2: number[] = [];
  const arr3: string[] = [];
  type PropsData = {ACTIVE_TOTAL: string; DATA_TIME: string}[];

  const data = route.params as PropsData;

  for (let items of data) {
    let Active_Total: string = items.ACTIVE_TOTAL;
    let Date_Time: string = items.DATA_TIME;
    Active_Total = items.ACTIVE_TOTAL;
    arr2.push(Number(Active_Total));
    //const regDate = /[0-9]{4,4}(-)[0-9]{2,2}(-)/;
    arr3.push(Date_Time.substring(5, 10));
  }

  let Max: number = 0;
  type ProsDate = {activeTotal: string; time: string}[];
  let periodMax = type.selectedDateMax.substring(0, 2);
  let dateMax: ProsDate = [];
  let dateMin: ProsDate = [];


  if (arr2.length < 30 && Number(periodMax) === 5) {
    Max = Math.max.apply(Math, arr2.slice(arr2.length - 5, arr2.length));
    dateMax = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Max)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length < 30 && Number(periodMax) === 10) {
    Max = Math.max.apply(Math, arr2.slice(arr2.length - 10, arr2.length));
    dateMax = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Max)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length < 30 && Number(periodMax) === 15) {
    Max = Math.max.apply(Math, arr2.slice(arr2.length - 15, arr2.length));
    dateMax = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Max)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length < 30 && Number(periodMax) === 30) {
    Max = Math.max.apply(
      Math,
      arr2.slice(arr2.length - arr2.length, arr2.length),
    );
    dateMax = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Max)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length > 30) {
    Max = Math.max.apply(
      Math,
      arr2.slice(arr2.length - Number(periodMax), arr2.length),
    );
    dateMax = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Max)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  }
  console.log('max', dateMax)

  let Min: number = 0;
  let periodMin = type.selectedDateMin.substring(0, 2);

  if (arr2.length < 30 && Number(periodMin) === 5) {
    Min = Math.min.apply(Math, arr2.slice(arr2.length - 5, arr2.length));
    dateMin = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Min)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length < 30 && Number(periodMin) === 10) {
    Min = Math.min.apply(Math, arr2.slice(arr2.length - 10, arr2.length));
    dateMin = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Min)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length < 30 && Number(periodMin) === 15) {
    Min = Math.min.apply(Math, arr2.slice(arr2.length - 15, arr2.length));
    dateMin = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Min)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length < 30 && Number(periodMin) === 30) {
    Min = Math.min.apply(
      Math,
      arr2.slice(arr2.length - arr2.length, arr2.length),
    );
    dateMin = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Min)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  } else if (arr2.length > 30) {
    Min = Math.min.apply(
      Math,
      arr2.slice(arr2.length - Number(periodMin), arr2.length),
    );
    dateMin = data
      .filter(item => Number(item.ACTIVE_TOTAL) === Min)
      .map(item => {
        return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
      });
  }
  
  console.log('min', dateMin)

  const Period = ['05 ngày', '10 ngày', '15 ngày', '30 ngày'];

  // React.useLayoutEffect(() => {
  //   // console.log(route.params);
  //   const data = route.params;
  //   for (item of data) {
  //     Active_Total = item.ACTIVE_TOTAL;
  //     console.log(Active_Total);
  //     Date_Time = item.DATA_TIME;
  //     console.log(Date_Time);
  //   }
  // }, []);

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
              onPress={() => navigation.navigate('GetMeterDataByDateInput')}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.text}>Chỉ số đồng hồ theo ngày</Text>
          </View>
        </View>

        <View style={{marginTop: 10, marginHorizontal: 10}}>
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
              yLabelsOffset={-5}
              xLabelsOffset={10}
              width={widthScreen} // from react-native arr2.length * 60
              height={heightScreen * 0.35}
              yAxisSuffix=" m3"
              yAxisInterval={3} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ccf3e0',
                backgroundGradientTo: '#ccf3e0',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0,77,87, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(2,1,1,${opacity})`,
                style: {
                  marginVertical: 8,
                  marginHorizontal: 10,
                  borderRadius: 16,
                },
                propsForLabels: {
                  fontSize: normalize(15),
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              showValuesOnTopOfBars
            />
          </ScrollView>
        </View>

        <ScrollView style={{marginBottom: 20}}>
          <View style={styles.block2}>
            <View style={styles.box1}>
              <Text style={styles.textBox1}>Chỉ số theo ngày cao nhất</Text>
            </View>

            <View style={styles.box2}>
              <SelectDropdown
                data={Period}
                onSelect={(selectedItem, index) => {
                  setType(type => {
                    type.selectedDateMax = selectedItem;
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
                    if (Max === 0) {
                      Alert.alert('Thông báo', 'Không có dữ liệu');
                    } else {
                      setType(type => {
                        type.showMax = true;
                        return {...type};
                      });
                    }
                  }}>
                  <Text style={styles.textButton}>Kiểm tra</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {type.showMax === true ? (
            <View style={{width: widthScreen}}>
              <ScrollView horizontal style={{marginHorizontal: 10}}>
                <FlatList
                  data={dateMax}
                  renderItem={renderItem}
                  keyExtractor={item => item.time}
                />
              </ScrollView>
            </View>
          ) : null}

          <View style={styles.block2}>
            <View style={styles.box1}>
              <Text style={styles.textBox1}>Chỉ số theo ngày thấp nhất</Text>
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
                    setType(type => {
                      type.showMin = true;
                      return {...type};
                    });
                  }}>
                  <Text style={styles.textButton}>Kiểm tra</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {type.showMin === true ? (
            <View style={{width: widthScreen}}>
              <ScrollView horizontal style={{marginHorizontal: 10}}>
                <FlatList
                  data={dateMin}
                  renderItem={renderItem}
                  keyExtractor={item => item.time}
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
  block2: {
    marginTop: 10,
    //backgroundColor: 'pink',
    marginHorizontal: 10,
    marginVertical: 10,
    //flexDirection: 'row',
    height: heightScreen * 0.12,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.8,
  },
  box1: {
    justifyContent: 'center',
    marginRight: 10,
    //  backgroundColor: 'pink',
  },
  textBox1: {
    fontSize: normalize(22),
    fontWeight: '500',
    marginLeft: 10,
  },
  textBox2: {
    fontSize: normalize(20),
    fontWeight: '400',
    //marginLeft: 10,
    marginHorizontal: 10,
    fontFamily: 'SourceSerifPro-Black',
  },
  box2: {marginTop: 10, flexDirection: 'row', marginLeft: 10},
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
  buttonStyle: {
    backgroundColor: '#ffff',
    height: heightScreen * 0.05,
    //marginVertical: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderStyle: 'dotted',
    width: widthScreen * 0.38,
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
  show: {
    //backgroundColor: '#ffffff',
    marginTop: 10,
    justifyContent: 'center',
    marginHorizontal: 15,
    height: heightScreen * 0.08,
    //alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
});

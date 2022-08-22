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
import {useTheme} from 'react-native-paper';

const {width: widthScreen} = Dimensions.get('screen');
const {height: heightScreen} = Dimensions.get('screen');

const Item = ({item}) => {
  return (
    <View style={styles.item}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: normalize(18), fontWeight: '500'}}>
          Giờ sử dụng
        </Text>
        <Text style={{textAlign: 'center'}}>{item.time.substring(11, 13)}</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: normalize(18), fontWeight: '500'}}>
          Lượng sử dụng
        </Text>
        <Text style={{textAlign: 'center'}}>{item.activeTotal}</Text>
      </View>
    </View>
  );
};

export default function GetMeterDataInDay({navigation, route}) {
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
    showMax: false,
    showMin: false,
  });

  const arr: number[] = [];
  const arr1: string[] = [];
  //const label1: string[] = [];

  type PropsData = {ACTIVE_TOTAL: string; DATA_TIME: string}[];
  type ProsDate = {activeTotal: string; time: string}[];
  const data = route.params as PropsData;
  console.log(data);
  let timeMax: ProsDate = [];
  let timeMin: ProsDate = [];

  const Active_Max = Math.max.apply(
    Math,
    data.map(item => Number(item.ACTIVE_TOTAL)),
  );
  timeMax = data
    .filter(item => Number(item.ACTIVE_TOTAL) === Active_Max)
    .map(item => {
      return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
    });
  //console.log('timeMax', timeMax);

  const Active_Min = Math.min.apply(
    Math,
    data.map(item => Number(item.ACTIVE_TOTAL)),
  );
  timeMin = data
    .filter(item => Number(item.ACTIVE_TOTAL) === Active_Min)
    .map(item => {
      return {activeTotal: item.ACTIVE_TOTAL, time: item.DATA_TIME};
    });
  console.log('timeMin', timeMin);
  const {colors} = useTheme();
  for (let items of data) {
    let Active_Total: string = items.ACTIVE_TOTAL;
    let Date_Time: string = items.DATA_TIME;

    Active_Total = items.ACTIVE_TOTAL;
    arr.push(Number(Active_Total));

    //const regDate = /[0-9]{4,4}(-)[0-9]{2,2}(-)/;

    arr1.push(Date_Time.substring(11, 13));
  }
  //console.log('arr1', arr1.length);
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
        <View style={styles.header}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{position: 'absolute', left: 0}}
              onPress={() => navigation.navigate('GetMeterDataInDayInput')}>
              <Feather name="arrow-left" size={normalize(25)} color={'#ffff'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Chỉ số đồng hồ theo giờ</Text>
          </View>
        </View>

        <View style={{marginTop: 10, alignItems: 'center'}}>
          <ScrollView horizontal>
            <BarChart
              showValuesOnTopOfBars
              style={{alignItems: 'center', margin: 10, borderRadius: 15}}
              data={{
                labels: arr1,

                datasets: [
                  {
                    data: arr,
                  },
                ],
              }}
              width={arr1.length * 60} // from react-native
              height={heightScreen * 0.35}
              yAxisSuffix=" m3"
              xAxisLabel="h"
              yLabelsOffset={-5}
              xLabelsOffset={10}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ccf3e0',
                backgroundGradientTo: '#ccf3e0',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0,77,87, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(2,1,1,${opacity})`,

                propsForVerticalLabels: {
                  alignmentBaseline: 'bottom',
                },

                propsForLabels: {
                  fontSize: normalize(15),
                },
              }}
            />
          </ScrollView>
        </View>

        <ScrollView style={{marginTop: 10, marginBottom: 30}}>
          <View style={styles.block2}>
            <View style={styles.box1}>
              <Text style={styles.textBox2}>Chỉ số theo giờ cao nhất</Text>
            </View>

            <View style={styles.box2}>
              <TouchableOpacity
                style={styles.box1_1}
                onPress={() =>
                  setType(type => {
                    type.showMax = true;
                    return {...type};
                  })
                }>
                <Text style={[styles.textButton, {color: '#ffffff'}]}>
                  Kiểm tra
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {type.showMax === true ? (
            <View style={{width: widthScreen}}>
              <ScrollView horizontal style={{marginHorizontal: 10}}>
                <FlatList
                  data={timeMax}
                  renderItem={renderItem}
                  keyExtractor={item => item.time}
                />
              </ScrollView>
            </View>
          ) : null}

          <View style={styles.block2}>
            <View style={styles.box1}>
              <Text style={styles.textBox2}>Chỉ số theo giờ thấp nhất</Text>
            </View>

            <View style={styles.box2}>
              <TouchableOpacity
                style={styles.box1_1}
                onPress={() =>
                  setType(type => {
                    type.showMin = true;
                    return {...type};
                  })
                }>
                <Text style={[styles.textButton, {color: '#ffffff'}]}>
                  Kiểm tra
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {type.showMin === true ? (
            <View style={{width: widthScreen}}>
              <ScrollView horizontal style={{marginHorizontal: 10}}>
                <FlatList
                  data={timeMin}
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
  header: {
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
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
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
  block2: {
    marginTop: 10,
    //backgroundColor: 'pink',
    marginHorizontal: 10,
    marginVertical: 10,
    //flexDirection: 'row',
    height: heightScreen * 0.13,
    width: widthScreen * 0.95,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.8,
  },
  textBox1: {
    fontSize: normalize(22),
    fontWeight: '500',
    marginLeft: 10,
  },
  textBox2: {
    fontSize: normalize(22),
    fontWeight: '500',
    marginLeft: 10,
  },
  box1: {
    justifyContent: 'center',
    //marginRight: 10,
    //backgroundColor: 'pink',
    marginTop: 10,
  },
  box2: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  box1_1: {
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#15AD9C',
    width: '40%',
    borderRadius: 10,
    borderWidth: 0.8,
    height: '80%',
  },
  textButton: {
    fontSize: normalize(18),
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '500',
    textAlign: 'center',
  },
  box1_2: {
    justifyContent: 'center',
    marginRight: 10,
    //backgroundColor: '#15AD9C',
    width: '40%',
    borderRadius: 10,
    borderWidth: 0.8,
    height: '80%',
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
});

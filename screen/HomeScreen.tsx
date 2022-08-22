import React, {Component, useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Linking,
  Alert,
  ImageBackground,
  RefreshControl,
} from 'react-native';

//import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {State} from 'react-native-gesture-handler';

import {StoreContext} from '../component/Context';
import Animated, {
  color,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {normalize} from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const images = [
  {
    key: 1,
    id: 1,
    img: require('../image/emic2.png'),
    title: 'Giới thiệu công ty Emic',
    url: 'https://emic.com.vn/vn/gioi-thieu',
  },
  {
    key: 2,
    id: 2,
    img: require('../image/sanpham1.jpg'),
    title: 'Các sản phẩm chính ',
    url: 'https://emic.com.vn/vn/san-pham',
  },
  {
    key: 3,
    id: 3,
    img: require('../image/nangluc.jpg'),
    title: 'Năng lực sản xuất ',
    url: 'https://emic.com.vn/vn/nang-luc-san-xuat',
  },
  {
    key: 4,
    id: 4,
    img: require('../image/du-an-5.jpg'),
    title: 'Các dự án ',
    url: 'https://emic.com.vn/vn/du-an',
  },
  {
    key: 5,
    id: 5,
    img: require('../image/tamnhin.jpg'),
    title: 'Tầm nhìn-sứ mệnh-giá trị cốt lõi',
    url: 'https://emic.com.vn/vn/tam-nhin-----su-menh-----gia-tri-cot-loi',
  },
];

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function HomeScreen({navigation}) {

  
  // const navigation = useNavigation();

  const {colors} = useTheme();

  const theme = useTheme();

  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const UserNameContextData = useContext(StoreContext);
  const store = React.useContext(StoreContext);

  const openUrl = async url => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Cant open link');
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(100).then(() => setRefreshing(false));
  }, []);

  

  return (
    <ImageBackground source={require('../image/bg.jpg')} style={styles.imageBg}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.container}>
          <TouchableOpacity
            style={{marginLeft: 10, marginTop: 10}}
            onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="person-circle-outline"
              size={normalize(50)}
              color="#111"
            />
          </TouchableOpacity>

          <View
            style={{
              marginLeft: 5,
              marginTop: 10,
              width: 250,
            }}>
            <Text
              style={{
                fontSize: normalize(20),
                fontFamily: 'OpenSans-SemiBold',
              }}>
              {UserNameContextData.state.USER_NAME}
            </Text>

            <Text style={{fontSize: normalize(20)}}>
              0 {''}
              <Ionicons name="md-heart-circle-outline" size={normalize(20)} />
            </Text>
          </View>
          <View style={{flex: 1}}></View>

          <View style={{right: 10}}>
            {store.state.NOTIFICATION === 0 ? null : (
              <View
                style={{
                  position: 'absolute',
                  top: -10,
                  left: 12,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  height: 20,
                  width: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#ffff'}}>{store.state.NOTIFICATION}</Text>
              </View>
            )}

            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('Notification')}>
              <FontAwesome name="bell" size={normalize(25)} color="#111" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1, marginBottom: 5}}>
          <Animated.ScrollView
            refreshControl={
              <RefreshControl
                progressViewOffset={5}
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#15AD9C', '#026f3d', '#01ac80']}
                collapsible
              />
            }
            scrollEventThrottle={16}
            style={{marginBottom: 5}}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollY,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}>
            <View
              style={{
                flex: 1,
                marginTop: 10,
                height: 80,
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => navigation.navigate('Setting')}>
                  <Ionicons
                    name="settings-outline"
                    size={normalize(40)}
                    color={colors.text}
                  />
                  <Text style={{color: colors.text, fontSize: normalize(15)}}>
                    Cài đặt
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => navigation.navigate('ThongTinHoaDon')}>
                  <Ionicons
                    name="document-text-outline"
                    size={normalize(40)}
                    color={colors.text}
                  />
                  <Text style={{color: colors.text, fontSize: normalize(15)}}>
                    Hoá đơn
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => navigation.navigate('ThongTinDongHo')}>
                  <AntDesign
                    name="clockcircleo"
                    size={normalize(40)}
                    color={colors.text}
                  />
                  <Text style={{color: colors.text, fontSize: normalize(15)}}>
                    Đồng hồ
                  </Text>
                </TouchableOpacity>

              </View>
            </View>

            <View
              style={{
                marginTop: 10,
                borderRadius: 20,
                borderColor: '#cccc',
              }}>
              <Animated.ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {
                          x: scrollX,
                        },
                      },
                    },
                  ],
                  {useNativeDriver: false},
                )}
                scrollEventThrottle={16}>
                {images.map((image, imageIndex) => {
                  return (
                    <View
                      style={{justifyContent: 'center', marginHorizontal: 10}}
                      key={imageIndex}>
                      <ImageBackground
                        source={image.img}
                        style={styles.scrollViewHorizontal}
                      />
                      <TouchableOpacity
                        onPress={async () => {
                          try {
                            await openUrl(image.url);
                          } catch (err) {
                            console.log(err);
                          }
                        }}>
                        <View style={styles.textContainer}>
                          <Text style={[styles.infoText, {color: colors.text}]}>
                            {image.title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </Animated.ScrollView>

              <View style={styles.indicatorContainer}>
                {images.map((image, imageIndex) => {
                  const width = scrollX.interpolate({
                    inputRange: [
                      screenWidth * (imageIndex - 1),
                      screenWidth * imageIndex,
                      screenWidth * (imageIndex + 1),
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={imageIndex}
                      style={[styles.normalDot, {width}]}
                    />
                  );
                })}
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View style={styles.item3}>
                <Text
                  style={{
                    fontSize: normalize(18),
                    fontWeight: 'bold',
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.text,
                  }}>
                  Theo dõi sử dụng
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: 10,
                }}>
                <View style={styles.box}>
                  <View style={styles.item5}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('GetUsedDataByDateInput')
                      }>
                      <Feather
                        name="square"
                        size={normalize(30)}
                        color={'black'}
                      />
                    </TouchableOpacity>
                    <Text numberOfLines={2} style={styles.textBox}>
                      Lượng sử dụng theo ngày
                    </Text>
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.item5}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('GetMeterDataInDayInput')
                      }>
                      <Feather
                        name="sidebar"
                        size={normalize(30)}
                        color={'black'}
                      />
                    </TouchableOpacity>
                    <Text numberOfLines={2} style={styles.textBox}>
                      Chỉ số đồng hồ theo giờ
                    </Text>
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.item5}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('GetMeterDataByDateInput')
                      }>
                      <AntDesign
                        name="profile"
                        size={normalize(30)}
                        color={'black'}
                      />
                    </TouchableOpacity>
                    <Text numberOfLines={2} style={styles.textBox}>
                      Chỉ số đồng hồ theo ngày
                    </Text>
                  </View>
                </View>

                <View style={styles.box}>
                  <View style={styles.item5}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('TheoDoiDongHo')}>
                      <AntDesign
                        name="warning"
                        size={normalize(30)}
                        color={'black'}
                      />
                    </TouchableOpacity>
                    <Text numberOfLines={2} style={styles.textBox}>
                      Sự kiện cảnh báo
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* <View
              style={{
                marginTop: 10,
              }}>
              <View style={styles.item3}>
                <Text
                  style={{
                    fontSize: normalize(18),
                    fontWeight: 'bold',
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.text,
                  }}>
                  Mua Sắm - Săn Điểm
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('XemThemMuaSam')}
                  style={{
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-SemiBold',
                      color: colors.text,
                      fontSize: normalize(14),
                    }}>
                    Xem Thêm
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: 10,
                }}>
                <View style={styles.box1}>
                  <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Shopee')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao1.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                      Shopee
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                      SIÊU SALE 25.6
                    </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Lazada')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao2.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                      Lazada
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                    SIÊU HỘI SALE HÈ
                    </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PhuongNam')} >
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao3.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                      Phương Nam
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                      Món quà sức khoẻ
                    </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ThaiDieu')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao4.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                      Thái Deli
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                    Ưu đãi đầu năm
                    </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('BacTom')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao6.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                      Bác Tôm
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                    ƯU ĐÃI ĐẶC BIỆT
                    </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Eimich')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao6.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                    Eimich
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                    MỪNG SINH NHẬT
                    </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('WestWay')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao7.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                    WestWay
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                    Tẩy trắng răng
                    </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.box1}>
                <View style={styles.item6}>
                    <TouchableOpacity onPress={()=>navigation.navigate('NamHoangGia')}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{
                            height: '85%',
                            width: '95%',
                          }}
                          source={require('../image/quangcao8.jpg')}
                          resizeMode="cover"
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.blockText}>
                    <Text style={[styles.titleBlock1, {color: colors.text}]}>
                    Nấm Hoàng Gia
                    </Text>
                    <Text style={[styles.contentBlock1, {color: colors.text}]}>
                    Ưu đãi giảm giá 10%
                    </Text>
                    </View>

                  </View>
                </View>

              </View>
            </View> */}
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#15AD9C',
    width: screenWidth,
    height: screenHeight * 0.125,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  item1: {
    width: screenWidth * 0.45,
    height: 100,
    marginTop: 40,
    marginLeft: 10,
    borderRadius: 10,
  },
  item2: {
    // backgroundColor:'pink',
    margin: 10,
    marginLeft: 10,
    width: screenWidth * 0.3,
    height: screenHeight * 0.15,
    borderWidth: 0.3,
    borderColor: '#9DB3B3',
    borderRadius: 10,
  },
  item3: {
    margin: 10,
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item4: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 110,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image1: {
    width: screenWidth * 0.45,
    height: 100,
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  image2: {
    width: screenWidth * 0.45,
    height: 100,
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 140,
  },
  image3: {
    width: '10%',
    height: '30%',
    borderRadius: 10,
    resizeMode: 'center',
  },
  image4: {
    height: 80,
    width: 80,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 0.8,
  },
  text3: {
    marginLeft: 10,
    marginTop: 10,
    width: screenWidth * 0.68,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'OpenSans-SemiBold',
  },
  scrollViewHorizontal: {
    flex: 1,
    width: screenWidth * 0.98,
    alignItems: 'center',
    height: screenHeight / 5,
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: -8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    marginHorizontal: 3,
    marginVertical: 3,
    fontSize: normalize(18),
    fontWeight: '300',
    fontFamily: 'OpenSans-SemiBold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#cccc',
    marginHorizontal: 4,
    marginBottom: -10,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    position: 'absolute',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  titleBlock1: {
    //marginLeft: 8,
    fontSize: normalize(16),
    fontWeight: 'bold',
    fontFamily: 'OpenSans-SemiBold',
  },
  contentBlock1: {
    //marginLeft: 8,
    fontSize: normalize(13),
    fontWeight: '600',
  },
  box: {
    margin: 5,
    //backgroundColor: 'pink',
    width: screenWidth / 3.5,
    height: screenHeight / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item5: {
    //backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '70%',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  textBox: {
    fontSize: normalize(15),
    fontWeight: '600',
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: 'black',
  },
  box1: {
    margin: 5,
    //backgroundColor: 'pink',
    width: screenWidth / 3.5,
    height: screenHeight / 6.5,
  },
  item6: {
    //backgroundColor: 'gold',

    width: '100%',
    height: '90%',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  imageBg: {
    height: '100%',
  },
  blockText:{marginTop:-18, marginLeft:5}
});

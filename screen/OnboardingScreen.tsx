import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { normalize } from '../assets/theme';

const {width: screenWidth} = Dimensions.get('screen');
const {height: screenHeight} = Dimensions.get('screen');

const App = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };
  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="navigate-next"
          color="rgba(255, 255, 255, .9)"
          size={normalize(24)}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Icon
            name="home"
            color="rgba(255, 255, 255, .9)"
            size={normalize(24)}
            style={{backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Icon
            name="home"
            color="rgba(255, 255, 255, .9)"
            size={normalize(24)}
            style={{backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container} />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          showSkipButton={true}
          onDone={onDone}
          onSkip={onSkip}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
          renderSkipButton={RenderSkipButton}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 400,
    height: 400,
  },
  introTextStyle: {
    fontSize: normalize(18),
    color: '#111',
    textAlign: 'center',
    lineHeight: 25,
    opacity: 0.8,
    marginTop: 18,
  },

  introTitleStyle: {
    fontSize: normalize(25),
    color: '#111',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  buttonCircle: {
    width: normalize(50),
    height: normalize(50),
    backgroundColor: '#53A3A3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',  
    image: require('../image/image1.jpg'),
    backgroundColor: '#fff',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: require('../image/image2.jpg'),
    backgroundColor: '#fff',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: require('../image/image3.jpg'),
    backgroundColor: '#fff',
  },
];

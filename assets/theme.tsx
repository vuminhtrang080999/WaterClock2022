import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export const sizeScreen = Dimensions.get('screen');

const getSaleWidth = (widthScreen: number): number => {
  let scaleWidth = 1;
  if (widthScreen > 392) {
    scaleWidth = 1 + (widthScreen - 392) / widthScreen;
  } else if (widthScreen < 392) {
    scaleWidth = 1 - (-widthScreen + 392) / widthScreen;
  } else {
    scaleWidth = 1;
  }
  return scaleWidth;
};
const getSaleHeight = (heightScreen: number): number => {
  let scaleWidth = 1;
  if (heightScreen > 776) {
    scaleWidth = 1 + (heightScreen - 776) / heightScreen;
  } else if (heightScreen < 776) {
    scaleWidth = 1 - (-heightScreen + 776) / heightScreen;
  } else {
    scaleWidth = 1;
  }
  return scaleWidth;
};
export const scaleWidth = getSaleWidth(SCREEN_WIDTH);
export const scaleHeight = getSaleHeight(SCREEN_HEIGHT);
export const scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

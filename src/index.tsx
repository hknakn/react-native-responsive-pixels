import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on iPhone X screen size
let guidelineBaseWidth: number = 375;
let guidelineBaseHeight: number = 812;
let scale: number = SCREEN_WIDTH / guidelineBaseWidth;

export const setBaseSize = (width: number, height: number) => {
  guidelineBaseWidth = width;
  guidelineBaseHeight = height;
  scale = SCREEN_WIDTH / width;
};

export const convertX = (xValue: number): number => {
  return (SCREEN_WIDTH / guidelineBaseWidth) * xValue;
};

export const convertY = (yValue: number): number => {
  return (SCREEN_HEIGHT / guidelineBaseHeight) * yValue;
};

export const scaleFont = (size: number): number => {
  const newSize: number = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

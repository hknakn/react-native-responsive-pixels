import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on iPhone X screen size
export const convertX = (xValue: number, baseWidth: number = 375): number => {
  return (SCREEN_WIDTH / baseWidth) * xValue;
};

export const convertY = (yValue: number, baseHeight: number = 812): number => {
  return (SCREEN_HEIGHT / baseHeight) * yValue;
};

export const scaleFont = (size: number, baseWidth: number = 375): number => {
  let scale: number = SCREEN_WIDTH / baseWidth;
  const newSize: number = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

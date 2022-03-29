import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on iPhone X screen size
global.baseWidth = 375;
global.baseHeight = 812;
global.scale = SCREEN_WIDTH / 375;

console.log({
  baseWidth: global.baseWidth,
  baseHeight: global.baseHeight,
  scale: global.scale,
});


export const setBaseSize = (width: number, height: number) => {
  global.baseWidth = width;
  global.baseHeight = height;
  scale = SCREEN_WIDTH / width;
};

export const convertX = (xValue: number): number => {
  return (SCREEN_WIDTH / global.baseWidth) * xValue;
};

export const convertY = (yValue: number): number => {
  return (SCREEN_HEIGHT / global.baseHeight) * yValue;
};

export const scaleFont = (size: number): number => {
  const newSize: number = size * global.scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Guideline sizes are based on iPhone X screen size
(global as any).baseWidth = 375;
(global as any).baseHeight = 812;
(global as any).scale = SCREEN_WIDTH / 375;

console.log({
  baseWidth: (global as any).baseWidth,
  baseHeight: (global as any).baseHeight,
  scale: (global as any).scale,
});


export const setBaseSize = (width: number, height: number) => {
  (global as any).baseWidth = width;
  (global as any).baseHeight = height;
  (global as any).scale = SCREEN_WIDTH / width;
};

export const convertX = (xValue: number): number => {
  return (SCREEN_WIDTH / (global as any).baseWidth) * xValue;
};

export const convertY = (yValue: number): number => {
  return (SCREEN_HEIGHT / (global as any).baseHeight) * yValue;
};

export const scaleFont = (size: number): number => {
  const newSize: number = size * (global as any).scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

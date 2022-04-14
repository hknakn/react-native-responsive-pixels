import { Dimensions, PixelRatio, Platform } from 'react-native';
import { Devices } from './devices';
import { getDeviceSize } from './utils';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Default guideline sizes are based on iPhone X screen size

/**
 * Calculates value for x axis depends on base device.
 * @param  {number} "value" parameter represents the number in x axis on your base device.
 * @param  {number | Devices} "base" parameter can get "number" type or value in "Devices". It represents the width of base device.
 * @return {number} Calculated value for x axis depends on base device.
 */
export const convertX = (value: number, base: number | Devices = 375): number => {
  let calculatedValue: number = value;

  // Checking if base is a number or a device name
  if (typeof base === 'number') {
    calculatedValue = (SCREEN_WIDTH / base) * value;
  } else if (Object.values(Devices).includes(base)) {
    calculatedValue = (SCREEN_WIDTH / getDeviceSize(base).width) * value;
  }

  return calculatedValue;
};

/**
 * Calculates value for x axis depends on base device.
 * @param  {number} "value" parameter represents the number in y axis on your base device.
 * @param  {number | Devices} "base" parameter can get "number" type or value in "Devices". It represents the height of base device.
 * @return {number} Calculated value for y axis depends on base device.
 */
export const convertY = (value: number, base: number | Devices = 812): number => {
  let calculatedValue: number = value;

  // Checking if base is a number or a device name
  if (typeof base === 'number') {
    calculatedValue = (SCREEN_HEIGHT / base) * value;
  } else if (Object.values(Devices).includes(base)) {
    calculatedValue = (SCREEN_HEIGHT / getDeviceSize(base).height) * value;
  }

  return calculatedValue;
};

/**
 * Calculates value for font size depends on base device.
 * @param  {number} "size" parameter represents the number in font size on your base device.
 * @param  {number | Devices} "base" parameter can get "number" type or value in "Devices". It represents the width of base device.
 * @return {number} Calculated value for font size depends on base device.
 */
export const scaleFont = (size: number, base: number | Devices): number => {
  let scale: number = 375;
  let newSize: number = size / scale;

  // Checking if base is a number or a device name
  if (typeof base === 'number') {
    scale = SCREEN_WIDTH / base;
    newSize = size * scale;
  } else if (Object.values(Devices).includes(base)) {
    scale = SCREEN_WIDTH / getDeviceSize(base).width;
    newSize = size * scale;
  }

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

/**
 * Predefined device types.
 */
export { Devices as Devices };

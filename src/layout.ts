import {Platform} from 'react-native';
import type {EdgeInsets} from 'react-native-safe-area-context';

export const getIsSmallScreen = (width: number, height: number) =>
  width < 390 || height < 720;

export const getIsTinyScreen = (width: number, height: number) =>
  width < 360 || height < 680;

export const getPlatformGaps = (
  insets: EdgeInsets,
  width: number,
  height: number,
) => {
  const small = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);
  const navGap = Platform.OS === 'ios' ? 20 : 30;
  const navHeight = tiny ? 58 : small ? 64 : 76;
  const top =
    Platform.OS === 'android'
      ? insets.top + (small ? 22 : 30)
      : insets.top + (small ? 8 : 14);
  const bottom = insets.bottom + navGap;
  const contentBottom = bottom + navHeight + (tiny ? 34 : small ? 28 : 30);

  return {
    contentBottom,
    navBottom: bottom,
    navHeight,
    top,
  };
};

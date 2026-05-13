import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {colors} from '../theme';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  icon?: string;
  variant?: 'primary' | 'quiet' | 'danger';
  style?: StyleProp<ViewStyle>;
};

export function ActionButton({
  icon,
  label,
  onPress,
  style,
  variant = 'primary',
}: ActionButtonProps) {
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        compact && styles.compactButton,
        tiny && styles.tinyButton,
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}>
      {icon ? (
        <Text style={[styles.icon, compact && styles.compactIcon, tiny && styles.tinyIcon]}>
          {icon}
        </Text>
      ) : null}
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[styles.label, compact && styles.compactLabel, tiny && styles.tinyLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 46,
    paddingHorizontal: 16,
  },
  compactButton: {
    minHeight: 40,
    paddingHorizontal: 12,
  },
  compactIcon: {
    fontSize: 15,
  },
  compactLabel: {
    fontSize: 13,
  },
  tinyButton: {
    minHeight: 36,
    paddingHorizontal: 10,
  },
  tinyIcon: {
    fontSize: 14,
  },
  tinyLabel: {
    fontSize: 12,
  },
  danger: {
    backgroundColor: 'rgba(239, 78, 90, 0.22)',
    borderColor: 'rgba(239, 78, 90, 0.5)',
  },
  icon: {
    color: colors.white,
    fontSize: 17,
  },
  label: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
  },
  pressed: {
    opacity: 0.78,
    transform: [{scale: 0.98}],
  },
  primary: {
    backgroundColor: colors.red,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  quiet: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: colors.line,
  },
});

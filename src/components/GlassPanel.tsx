import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {colors, shadows} from '../theme';

type GlassPanelProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  strong?: boolean;
}>;

export function GlassPanel({children, style, strong}: GlassPanelProps) {
  return (
    <View
      style={[
        styles.panel,
        strong && styles.strong,
        shadows.panel,
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: colors.panel,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  strong: {
    backgroundColor: colors.panelStrong,
  },
});

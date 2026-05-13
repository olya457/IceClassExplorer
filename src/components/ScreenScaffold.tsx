import React, {PropsWithChildren} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

import {getIsSmallScreen, getIsTinyScreen} from '../layout';

type ScreenScaffoldProps = PropsWithChildren<{
  background: ImageSourcePropType;
  bottomPadding: number;
  topPadding: number;
  contentContainerStyle?: StyleProp<ViewStyle>;
}>;

export function ScreenScaffold({
  background,
  bottomPadding,
  children,
  contentContainerStyle,
  topPadding,
}: ScreenScaffoldProps) {
  const {height, width} = useWindowDimensions();
  const small = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);

  return (
    <ImageBackground source={background} resizeMode="cover" style={styles.root}>
      <View style={styles.tint} />
      <ScrollView
        bounces={false}
        contentContainerStyle={[
          styles.content,
          small && styles.smallContent,
          tiny && styles.tinyContent,
          {paddingTop: topPadding, paddingBottom: bottomPadding},
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(3, 12, 22, 0.48)',
  },
  content: {
    paddingHorizontal: 18,
  },
  smallContent: {
    paddingHorizontal: 14,
  },
  tinyContent: {
    paddingHorizontal: 12,
  },
});

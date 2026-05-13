import React, {useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {assets} from '../assets';
import {ActionButton} from '../components/ActionButton';
import {GlassPanel} from '../components/GlassPanel';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {colors, text} from '../theme';

type OnboardingScreenProps = {
  onFinish: () => void;
};

const slides = [
  {
    key: 'scan',
    background: assets.onboardingBlueprint,
    image: assets.discoveryPanel,
    eyebrow: 'Ice classes',
    title: 'Read reinforced vessels faster',
    copy: 'Compare polar classes, bow protection, ice capability, and mission equipment in one focused catalog.',
  },
  {
    key: 'fleet',
    background: assets.onboardingVessels,
    image: assets.iceLogo,
    eyebrow: 'Arctic fleet',
    title: 'Explore five vessel families',
    copy: 'Icebreakers, research ships, cargo carriers, expedition vessels, and rescue support craft are grouped for quick scanning.',
  },
  {
    key: 'quiz',
    background: assets.quizCommand,
    image: assets.questionPanel,
    eyebrow: 'Recognition drills',
    title: 'Train with visual and knowledge levels',
    copy: 'Move through vessel identification, polar navigation, engineering, safety, and logistics questions.',
  },
];

export function OnboardingScreen({onFinish}: OnboardingScreenProps) {
  const [index, setIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const slide = slides[index];
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);

  const imageSize = useMemo(
    () => (tiny ? 104 : compact ? 132 : 194),
    [compact, tiny],
  );

  const next = () => {
    if (index === slides.length - 1) {
      onFinish();
      return;
    }

    setIndex(current => current + 1);
  };

  return (
    <ImageBackground source={slide.background} resizeMode="cover" style={styles.root}>
      <View style={styles.tint} />
      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top + (compact ? 12 : 24),
            paddingBottom: insets.bottom + (tiny ? 18 : 28),
          },
        ]}>
        <View style={styles.topRow}>
          <Image source={assets.iceLogoGlow} resizeMode="contain" style={styles.logo} />
          <Pressable accessibilityRole="button" onPress={onFinish} style={styles.skip}>
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        </View>

        <View style={[styles.center, compact && styles.compactCenter]}>
          <Image
            source={slide.image}
            resizeMode="contain"
            style={{height: imageSize, width: imageSize}}
          />
        </View>

        <GlassPanel strong style={[styles.panel, compact && styles.compactPanel]}>
          <Text style={text.eyebrow}>{slide.eyebrow}</Text>
          <Text
            style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}
            numberOfLines={2}>
            {slide.title}
          </Text>
          <Text numberOfLines={tiny ? 2 : undefined} style={styles.copy}>
            {slide.copy}
          </Text>
          <View style={[styles.dots, compact && styles.compactDots]}>
            {slides.map((item, itemIndex) => (
              <View
                key={item.key}
                style={[styles.dot, itemIndex === index && styles.activeDot]}
              />
            ))}
          </View>
          <ActionButton
            icon={index === slides.length - 1 ? '🚢' : '➜'}
            label={index === slides.length - 1 ? 'Start Explorer' : 'Next'}
            onPress={next}
          />
        </GlassPanel>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: colors.red,
    width: 28,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minHeight: 180,
  },
  compactCenter: {
    minHeight: 132,
  },
  compactPanel: {
    padding: 14,
  },
  compactDots: {
    marginBottom: 14,
    marginTop: 14,
  },
  compactTitle: {
    fontSize: 25,
  },
  tinyTitle: {
    fontSize: 22,
  },
  content: {
    flex: 1,
    paddingHorizontal: 18,
  },
  copy: {
    ...text.body,
    marginTop: 10,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 18,
    marginTop: 20,
  },
  logo: {
    height: 58,
    width: 58,
  },
  panel: {
    padding: 18,
  },
  root: {
    flex: 1,
  },
  skip: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  skipText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 10, 20, 0.45)',
  },
  title: {
    ...text.title,
    fontSize: 30,
    marginTop: 6,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

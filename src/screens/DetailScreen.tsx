import React from 'react';
import {Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {assets, categoryImages} from '../assets';
import {ActionButton} from '../components/ActionButton';
import {GlassPanel} from '../components/GlassPanel';
import {ScreenScaffold} from '../components/ScreenScaffold';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {categoryMeta, colors, text} from '../theme';
import type {Vessel} from '../types';

type DetailScreenProps = {
  bottomPadding: number;
  isSaved: boolean;
  onBack: () => void;
  onToggleSaved: (id: string) => void;
  topPadding: number;
  vessel: Vessel;
};

export function DetailScreen({
  bottomPadding,
  isSaved,
  onBack,
  onToggleSaved,
  topPadding,
  vessel,
}: DetailScreenProps) {
  const meta = categoryMeta[vessel.category];
  const image = assets[categoryImages[vessel.category]];
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);

  return (
    <ScreenScaffold
      background={image}
      bottomPadding={bottomPadding}
      topPadding={topPadding}>
      <Pressable
        accessibilityRole="button"
        onPress={onBack}
        style={[styles.backButton, compact && styles.compactBackButton]}>
        <Text style={[styles.backText, compact && styles.compactBackText]}>‹ Back</Text>
      </Pressable>

      <GlassPanel strong style={[styles.hero, compact && styles.compactHero]}>
        <View
          style={[
            styles.heroImageFrame,
            compact && styles.compactHeroImageFrame,
            tiny && styles.tinyHeroImageFrame,
          ]}>
          <Image source={image} resizeMode="contain" style={styles.heroImage} />
        </View>
        <View style={[styles.heroCopy, compact && styles.compactHeroCopy]}>
          <View style={[styles.categoryBadge, {borderColor: meta.color}]}>
            <Text style={styles.categoryEmoji}>{meta.emoji}</Text>
            <Text style={styles.categoryText}>{vessel.category}</Text>
          </View>
          <Text
            adjustsFontSizeToFit
            numberOfLines={2}
            style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}>
            {vessel.name}
          </Text>
          <Text numberOfLines={compact ? 3 : undefined} style={text.body}>
            {vessel.description}
          </Text>
          <ActionButton
            icon={isSaved ? '★' : '☆'}
            label={isSaved ? 'Saved' : 'Save vessel'}
            onPress={() => onToggleSaved(vessel.id)}
            variant={isSaved ? 'quiet' : 'primary'}
          />
        </View>
      </GlassPanel>

      <View style={styles.specGrid}>
        <Spec compact={compact} label="Length" tiny={tiny} value={vessel.specs.length} />
        <Spec
          compact={compact}
          label="Displacement"
          tiny={tiny}
          value={vessel.specs.displacement}
        />
        <Spec compact={compact} label="Max Speed" tiny={tiny} value={vessel.specs.maxSpeed} />
        <Spec
          compact={compact}
          label="Ice Capability"
          tiny={tiny}
          value={vessel.specs.iceCapability}
        />
      </View>

      <GlassPanel style={styles.panel}>
        <Text style={text.eyebrow}>Ice class certification</Text>
        <Text style={styles.className}>{vessel.certification.className}</Text>
        <Text style={text.body}>{vessel.certification.details}</Text>
      </GlassPanel>

      <GlassPanel style={styles.panel}>
        <Text style={text.eyebrow}>Key features</Text>
        <View style={styles.features}>
          {vessel.features.map(feature => (
            <View key={feature} style={styles.featureRow}>
              <Text style={styles.featureBullet}>✦</Text>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </GlassPanel>
    </ScreenScaffold>
  );
}

function Spec({
  compact,
  label,
  tiny,
  value,
}: {
  compact: boolean;
  label: string;
  tiny: boolean;
  value: string;
}) {
  return (
    <GlassPanel style={[styles.spec, compact && styles.compactSpec, tiny && styles.tinySpec]}>
      <Text style={[styles.specValue, compact && styles.compactSpecValue, tiny && styles.tinySpecValue]}>
        {value}
      </Text>
      <Text numberOfLines={1} style={[styles.specLabel, compact && styles.compactSpecLabel]}>
        {label}
      </Text>
    </GlassPanel>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.panelStrong,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginBottom: 12,
    paddingHorizontal: 14,
  },
  backText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
  },
  compactBackButton: {
    height: 36,
    marginBottom: 10,
    paddingHorizontal: 12,
  },
  compactBackText: {
    fontSize: 13,
  },
  compactHero: {
    gap: 10,
    padding: 10,
  },
  compactHeroCopy: {
    gap: 10,
  },
  compactHeroImageFrame: {
    height: 150,
  },
  compactSpec: {
    minHeight: 64,
    padding: 10,
  },
  compactSpecLabel: {
    fontSize: 10,
    marginTop: 3,
  },
  compactSpecValue: {
    fontSize: 17,
  },
  compactTitle: {
    fontSize: 23,
  },
  tinyHeroImageFrame: {
    height: 126,
  },
  tinySpec: {
    minHeight: 56,
    padding: 8,
  },
  tinySpecValue: {
    fontSize: 16,
  },
  tinyTitle: {
    fontSize: 21,
  },
  categoryBadge: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    minHeight: 32,
    paddingHorizontal: 10,
  },
  categoryEmoji: {
    fontSize: 14,
  },
  categoryText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
  },
  className: {
    color: colors.white,
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 8,
    marginTop: 8,
  },
  featureBullet: {
    color: colors.amber,
    fontSize: 14,
    marginTop: 1,
    width: 20,
  },
  featureRow: {
    flexDirection: 'row',
    gap: 8,
  },
  featureText: {
    color: colors.white,
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 20,
  },
  features: {
    gap: 10,
    marginTop: 12,
  },
  hero: {
    gap: 14,
    padding: 12,
  },
  heroCopy: {
    gap: 12,
  },
  heroImage: {
    height: '100%',
    width: '100%',
  },
  heroImageFrame: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 8,
    height: 240,
    overflow: 'hidden',
    width: '100%',
  },
  panel: {
    marginTop: 12,
    padding: 14,
  },
  spec: {
    flex: 1,
    minHeight: 76,
    minWidth: '47%',
    padding: 12,
  },
  specGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  specLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 5,
    textTransform: 'uppercase',
  },
  specValue: {
    color: colors.ice,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0,
  },
  title: {
    ...text.title,
    fontSize: 28,
  },
});

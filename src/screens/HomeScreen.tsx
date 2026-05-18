import React from 'react';
import {Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {assets} from '../assets';
import {ActionButton} from '../components/ActionButton';
import {GlassPanel} from '../components/GlassPanel';
import {ScreenScaffold} from '../components/ScreenScaffold';
import {VesselCard} from '../components/VesselCard';
import {totalQuizQuestions} from '../data/quizzes';
import {vesselCategories, vessels} from '../data/vessels';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {categoryMeta, colors, text} from '../theme';
import type {Vessel, VesselCategory} from '../types';

type HomeScreenProps = {
  bottomPadding: number;
  topPadding: number;
  savedCount: number;
  isSaved: (id: string) => boolean;
  onOpenCategory: (category: VesselCategory) => void;
  onOpenQuiz: () => void;
  onOpenVessel: (vessel: Vessel) => void;
  onToggleSaved: (id: string) => void;
};

export function HomeScreen({
  bottomPadding,
  isSaved,
  onOpenCategory,
  onOpenQuiz,
  onOpenVessel,
  onToggleSaved,
  savedCount,
  topPadding,
}: HomeScreenProps) {
  const featured = vessels[0];
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);

  return (
    <ScreenScaffold
      background={assets.catalogConsole}
      bottomPadding={bottomPadding}
      topPadding={topPadding}>
      <View style={[styles.hero, compact && styles.compactHero]}>
        <Image
          source={assets.iceLogoGlow}
          resizeMode="contain"
          style={[styles.logo, compact && styles.compactLogo]}
        />
        <View style={styles.heroText}>
          <Text style={text.eyebrow}>Polar fleet reference</Text>
          <Text
            style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}
            numberOfLines={2}>
            Ice-Class Navigator
          </Text>
          <Text numberOfLines={compact ? 2 : undefined} style={text.body}>
            Vessel profiles, ice certifications, technical specs, and Arctic recognition drills.
          </Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <GlassPanel style={[styles.stat, compact && styles.compactStat, tiny && styles.tinyStat]}>
          <Text
            style={[
              styles.statValue,
              compact && styles.compactStatValue,
              tiny && styles.tinyStatValue,
            ]}>
            {vessels.length}
          </Text>
          <Text style={styles.statLabel}>Vessels</Text>
        </GlassPanel>
        <GlassPanel style={[styles.stat, compact && styles.compactStat, tiny && styles.tinyStat]}>
          <Text
            style={[
              styles.statValue,
              compact && styles.compactStatValue,
              tiny && styles.tinyStatValue,
            ]}>
            {vesselCategories.length}
          </Text>
          <Text style={styles.statLabel}>Classes</Text>
        </GlassPanel>
        <GlassPanel style={[styles.stat, compact && styles.compactStat, tiny && styles.tinyStat]}>
          <Text
            style={[
              styles.statValue,
              compact && styles.compactStatValue,
              tiny && styles.tinyStatValue,
            ]}>
            {totalQuizQuestions}
          </Text>
          <Text style={styles.statLabel}>Quiz</Text>
        </GlassPanel>
      </View>

      <View style={[styles.sectionHeader, compact && styles.compactSectionHeader]}>
        <Text style={[text.h2, compact && styles.compactSectionTitle]}>
          Fleet families
        </Text>
        <Text style={styles.savedCount}>{savedCount} saved</Text>
      </View>

      <View style={[styles.categoryGrid, compact && styles.compactCategoryGrid]}>
        {vesselCategories.map(category => {
          const meta = categoryMeta[category];
          const count = vessels.filter(vessel => vessel.category === category).length;
          const label = compact ? meta.short : category;

          return (
            <Pressable
              accessibilityRole="button"
              key={category}
              onPress={() => onOpenCategory(category)}
              style={({pressed}) => [
                styles.categoryTile,
                compact && styles.compactCategoryTile,
                tiny && styles.tinyCategoryTile,
                {borderColor: `${meta.color}88`},
                pressed && styles.pressed,
              ]}>
              <Text style={[styles.categoryIcon, tiny && styles.tinyCategoryIcon]}>
                {meta.emoji}
              </Text>
              <View style={styles.categoryCopy}>
                <Text
                  numberOfLines={1}
                  style={[styles.categoryName, compact && styles.compactCategoryName]}>
                  {label}
                </Text>
                <Text style={styles.categoryCount}>{count} profiles</Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      <View style={[styles.sectionHeader, compact && styles.compactSectionHeader]}>
        <Text style={[text.h2, compact && styles.compactSectionTitle]}>
          Flagship profile
        </Text>
      </View>
      <VesselCard
        onOpen={onOpenVessel}
        onToggleSaved={onToggleSaved}
        saved={isSaved(featured.id)}
        vessel={featured}
      />

      <GlassPanel strong style={[styles.quizPanel, compact && styles.compactQuizPanel]}>
        <Image
          source={assets.questionPanel}
          resizeMode="contain"
          style={[styles.quizImage, compact && styles.compactQuizImage]}
        />
        <View style={styles.quizCopy}>
          <Text style={text.h3}>Arctic recognition</Text>
          <Text style={text.small}>
            Visual vessel identification and polar operations questions across expert levels.
          </Text>
          <ActionButton icon="❓" label="Open Quiz" onPress={onOpenQuiz} style={styles.quizButton} />
        </View>
      </GlassPanel>
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  categoryCopy: {
    flex: 1,
    minWidth: 0,
  },
  categoryCount: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    marginTop: 3,
  },
  categoryGrid: {
    gap: 10,
  },
  categoryIcon: {
    fontSize: 22,
  },
  categoryName: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0,
  },
  categoryTile: {
    alignItems: 'center',
    backgroundColor: colors.panelStrong,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    minHeight: 70,
    paddingHorizontal: 14,
  },
  compactCategoryTile: {
    minHeight: 50,
    paddingHorizontal: 10,
    width: '48.5%',
  },
  compactCategoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  compactCategoryName: {
    fontSize: 14,
  },
  compactHero: {
    gap: 10,
    marginBottom: 12,
  },
  compactLogo: {
    height: 54,
    width: 54,
  },
  compactQuizImage: {
    height: 76,
    width: 76,
  },
  compactQuizPanel: {
    gap: 10,
    marginTop: 12,
    padding: 12,
  },
  compactStat: {
    minHeight: 52,
  },
  compactStatValue: {
    fontSize: 20,
  },
  compactSectionHeader: {
    marginBottom: 10,
    marginTop: 14,
  },
  compactSectionTitle: {
    fontSize: 19,
  },
  compactTitle: {
    fontSize: 22,
  },
  tinyCategoryIcon: {
    fontSize: 20,
  },
  tinyCategoryTile: {
    gap: 8,
    minHeight: 46,
    paddingHorizontal: 8,
  },
  tinyStat: {
    minHeight: 48,
  },
  tinyStatValue: {
    fontSize: 18,
  },
  tinyTitle: {
    fontSize: 20,
  },
  hero: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginBottom: 18,
  },
  heroText: {
    flex: 1,
    gap: 7,
    minWidth: 0,
  },
  logo: {
    height: 90,
    width: 90,
  },
  pressed: {
    opacity: 0.82,
    transform: [{scale: 0.99}],
  },
  quizButton: {
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  quizCopy: {
    flex: 1,
    gap: 8,
    minWidth: 0,
  },
  quizImage: {
    height: 96,
    width: 96,
  },
  quizPanel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginTop: 14,
    padding: 14,
  },
  savedCount: {
    color: colors.amber,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    gap: 2,
    minHeight: 72,
    justifyContent: 'center',
  },
  statLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statValue: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0,
  },
  title: {
    ...text.title,
    fontSize: 30,
  },
});

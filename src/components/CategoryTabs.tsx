import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';

import {vesselCategories} from '../data/vessels';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {categoryMeta, colors} from '../theme';
import type {VesselCategory} from '../types';

type CategoryFilter = VesselCategory | 'All';

type CategoryTabsProps = {
  selected: CategoryFilter;
  onSelect: (category: CategoryFilter) => void;
  includeAll?: boolean;
};

export function CategoryTabs({includeAll = true, onSelect, selected}: CategoryTabsProps) {
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);
  const filters: CategoryFilter[] = includeAll ? ['All', ...vesselCategories] : vesselCategories;

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.track}
      showsHorizontalScrollIndicator={false}>
      {filters.map(filter => {
        const active = selected === filter;
        const meta =
          filter === 'All'
            ? {emoji: '🌐', color: colors.ice, short: 'All'}
            : categoryMeta[filter];

        return (
          <Pressable
            accessibilityRole="button"
            key={filter}
            onPress={() => onSelect(filter)}
            style={[
              styles.pill,
              compact && styles.compactPill,
              tiny && styles.tinyPill,
              active && {backgroundColor: `${meta.color}2A`, borderColor: meta.color},
            ]}>
            <Text style={[styles.emoji, tiny && styles.tinyEmoji]}>{meta.emoji}</Text>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.label, tiny && styles.tinyLabel, active && styles.activeLabel]}>
              {filter === 'All' ? 'All' : meta.short}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  activeLabel: {
    color: colors.white,
  },
  compactPill: {
    height: 34,
    minWidth: 68,
    paddingHorizontal: 10,
  },
  tinyPill: {
    height: 32,
    minWidth: 62,
    paddingHorizontal: 8,
  },
  tinyEmoji: {
    fontSize: 13,
  },
  tinyLabel: {
    fontSize: 11,
  },
  emoji: {
    fontSize: 15,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0,
  },
  pill: {
    alignItems: 'center',
    backgroundColor: 'rgba(7, 20, 34, 0.78)',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 7,
    height: 38,
    justifyContent: 'center',
    minWidth: 78,
    paddingHorizontal: 12,
  },
  track: {
    gap: 8,
    paddingRight: 8,
  },
});

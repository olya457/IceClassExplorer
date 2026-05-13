import React, {useMemo} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {assets} from '../assets';
import {CategoryTabs} from '../components/CategoryTabs';
import {ScreenScaffold} from '../components/ScreenScaffold';
import {VesselCard} from '../components/VesselCard';
import {vessels} from '../data/vessels';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {colors, text} from '../theme';
import type {Vessel, VesselCategory} from '../types';

type CategoryFilter = VesselCategory | 'All';

type FleetScreenProps = {
  bottomPadding: number;
  category: CategoryFilter;
  isSaved: (id: string) => boolean;
  onCategoryChange: (category: CategoryFilter) => void;
  onOpenVessel: (vessel: Vessel) => void;
  onToggleSaved: (id: string) => void;
  topPadding: number;
};

export function FleetScreen({
  bottomPadding,
  category,
  isSaved,
  onCategoryChange,
  onOpenVessel,
  onToggleSaved,
  topPadding,
}: FleetScreenProps) {
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);
  const filteredVessels = useMemo(
    () =>
      category === 'All'
        ? vessels
        : vessels.filter(vessel => vessel.category === category),
    [category],
  );

  return (
    <ScreenScaffold
      background={assets.onboardingVessels}
      bottomPadding={bottomPadding}
      topPadding={topPadding}>
      <View style={[styles.header, compact && styles.compactHeader]}>
        <Text style={text.eyebrow}>Arctic catalog</Text>
        <Text style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}>
          Vessel library
        </Text>
        <Text numberOfLines={compact ? 2 : undefined} style={text.body}>
          Profiles include ice capability, speed, displacement, certification, and mission equipment.
        </Text>
      </View>

      <CategoryTabs selected={category} onSelect={onCategoryChange} />

      <View style={styles.countRow}>
        <Text style={styles.countText}>{filteredVessels.length} profiles</Text>
      </View>

      <View style={styles.list}>
        {filteredVessels.map(vessel => (
          <VesselCard
            key={vessel.id}
            onOpen={onOpenVessel}
            onToggleSaved={onToggleSaved}
            saved={isSaved(vessel.id)}
            vessel={vessel}
          />
        ))}
      </View>
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  countRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  countText: {
    color: colors.ice,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0,
  },
  header: {
    gap: 8,
    marginBottom: 16,
  },
  compactHeader: {
    gap: 6,
    marginBottom: 12,
  },
  compactTitle: {
    fontSize: 26,
  },
  tinyTitle: {
    fontSize: 23,
  },
  list: {
    gap: 12,
    marginTop: 12,
  },
  title: {
    ...text.title,
    fontSize: 31,
  },
});

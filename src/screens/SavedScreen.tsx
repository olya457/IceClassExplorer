import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {assets} from '../assets';
import {ActionButton} from '../components/ActionButton';
import {GlassPanel} from '../components/GlassPanel';
import {ScreenScaffold} from '../components/ScreenScaffold';
import {VesselCard} from '../components/VesselCard';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {colors, text} from '../theme';
import type {Vessel} from '../types';

type SavedScreenProps = {
  bottomPadding: number;
  isSaved: (id: string) => boolean;
  onClearSaved: () => void;
  onOpenFleet: () => void;
  onOpenVessel: (vessel: Vessel) => void;
  onToggleSaved: (id: string) => void;
  ready: boolean;
  savedVessels: Vessel[];
  topPadding: number;
};

export function SavedScreen({
  bottomPadding,
  isSaved,
  onClearSaved,
  onOpenFleet,
  onOpenVessel,
  onToggleSaved,
  ready,
  savedVessels,
  topPadding,
}: SavedScreenProps) {
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);

  return (
    <ScreenScaffold
      background={assets.onboardingBlueprint}
      bottomPadding={bottomPadding}
      topPadding={topPadding}>
      <View style={[styles.header, compact && styles.compactHeader]}>
        <Text style={text.eyebrow}>Saved fleet</Text>
        <Text style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}>
          Bookmarks
        </Text>
      </View>

      {!ready ? (
        <GlassPanel
          style={[
            styles.emptyPanel,
            compact && styles.compactEmptyPanel,
            tiny && styles.tinyEmptyPanel,
          ]}>
          <Text style={styles.emptyTitle}>Loading saved vessels</Text>
        </GlassPanel>
      ) : savedVessels.length === 0 ? (
        <GlassPanel
          strong
          style={[
            styles.emptyPanel,
            compact && styles.compactEmptyPanel,
            tiny && styles.tinyEmptyPanel,
          ]}>
          <Image
            source={assets.successPanel}
            resizeMode="contain"
            style={[
              styles.emptyImage,
              compact && styles.compactEmptyImage,
              tiny && styles.tinyEmptyImage,
            ]}
          />
          <Text style={styles.emptyTitle}>No saved vessels</Text>
          <ActionButton icon="🚢" label="Open Fleet" onPress={onOpenFleet} variant="quiet" />
        </GlassPanel>
      ) : (
        <>
          <View style={styles.savedHeader}>
            <Text style={styles.count}>{savedVessels.length} saved</Text>
            <ActionButton icon="✕" label="Clear" onPress={onClearSaved} variant="danger" />
          </View>
          <View style={styles.list}>
            {savedVessels.map(vessel => (
              <VesselCard
                key={vessel.id}
                onOpen={onOpenVessel}
                onToggleSaved={onToggleSaved}
                saved={isSaved(vessel.id)}
                vessel={vessel}
              />
            ))}
          </View>
        </>
      )}
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  count: {
    color: colors.amber,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
  },
  compactEmptyImage: {
    height: 126,
    width: 126,
  },
  compactEmptyPanel: {
    gap: 12,
    minHeight: 280,
    padding: 16,
  },
  compactHeader: {
    gap: 6,
    marginBottom: 12,
  },
  compactTitle: {
    fontSize: 26,
  },
  tinyEmptyImage: {
    height: 108,
    width: 108,
  },
  tinyEmptyPanel: {
    minHeight: 240,
  },
  tinyTitle: {
    fontSize: 23,
  },
  emptyImage: {
    height: 164,
    width: 164,
  },
  emptyPanel: {
    alignItems: 'center',
    gap: 16,
    justifyContent: 'center',
    minHeight: 360,
    padding: 20,
  },
  emptyTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0,
    textAlign: 'center',
  },
  header: {
    gap: 8,
    marginBottom: 16,
  },
  list: {
    gap: 12,
  },
  savedHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    ...text.title,
    fontSize: 31,
  },
});

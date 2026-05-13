import React from 'react';
import {Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import type {GestureResponderEvent} from 'react-native';

import {assets, categoryImages} from '../assets';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {categoryMeta, colors, text} from '../theme';
import type {Vessel} from '../types';

type VesselCardProps = {
  vessel: Vessel;
  saved: boolean;
  onOpen: (vessel: Vessel) => void;
  onToggleSaved: (id: string) => void;
};

export function VesselCard({
  onOpen,
  onToggleSaved,
  saved,
  vessel,
}: VesselCardProps) {
  const meta = categoryMeta[vessel.category];
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);
  const toggle = (event: GestureResponderEvent) => {
    event.stopPropagation();
    onToggleSaved(vessel.id);
  };

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onOpen(vessel)}
      style={({pressed}) => [
        styles.card,
        compact && styles.compactCard,
        tiny && styles.tinyCard,
        pressed && styles.pressed,
      ]}>
      <View
        style={[
          styles.imageFrame,
          compact && styles.compactImageFrame,
          tiny && styles.tinyImageFrame,
        ]}>
        <Image
          resizeMode="contain"
          source={assets[categoryImages[vessel.category]]}
          style={styles.image}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <View style={[styles.badge, {borderColor: meta.color}]}>
            <Text style={styles.badgeIcon}>{meta.emoji}</Text>
            <Text numberOfLines={1} style={styles.badgeText}>
              {vessel.category}
            </Text>
          </View>
          <Pressable
            accessibilityRole="button"
            onPress={toggle}
            style={[
              styles.saveButton,
              saved && {backgroundColor: `${colors.amber}28`, borderColor: colors.amber},
            ]}>
            <Text style={styles.saveIcon}>{saved ? '★' : '☆'}</Text>
          </Pressable>
        </View>
        <Text
          numberOfLines={1}
          style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}>
          {vessel.name}
        </Text>
        <Text numberOfLines={2} style={text.small}>
          {vessel.description}
        </Text>
        <View style={styles.specRow}>
          <Text style={styles.spec}>{vessel.specs.length}</Text>
          <Text style={styles.spec}>{vessel.specs.maxSpeed}</Text>
          <Text style={styles.spec}>{vessel.specs.iceCapability}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    maxWidth: 150,
    minHeight: 28,
    paddingHorizontal: 8,
  },
  badgeIcon: {
    fontSize: 12,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0,
  },
  body: {
    flex: 1,
    gap: 8,
    paddingVertical: 2,
  },
  card: {
    backgroundColor: colors.panelStrong,
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    minHeight: 132,
    overflow: 'hidden',
    padding: 10,
  },
  compactCard: {
    gap: 10,
    minHeight: 112,
    padding: 8,
  },
  compactImageFrame: {
    height: 96,
    width: 78,
  },
  compactTitle: {
    fontSize: 15,
  },
  tinyCard: {
    minHeight: 96,
    padding: 7,
  },
  tinyImageFrame: {
    height: 82,
    width: 66,
  },
  tinyTitle: {
    fontSize: 14,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageFrame: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 8,
    height: 112,
    overflow: 'hidden',
    width: 92,
  },
  pressed: {
    opacity: 0.82,
    transform: [{scale: 0.99}],
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  saveButton: {
    alignItems: 'center',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    width: 34,
  },
  saveIcon: {
    color: colors.white,
    fontSize: 17,
  },
  spec: {
    color: colors.ice,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0,
  },
  specRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0,
  },
});

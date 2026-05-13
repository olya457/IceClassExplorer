import React from 'react';
import {Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {colors, shadows} from '../theme';
import type {TabId} from '../types';

type BottomNavigationProps = {
  activeTab: TabId;
  bottom: number;
  height: number;
  onChange: (tab: TabId) => void;
};

const tabs: Array<{id: TabId; icon: string; label: string}> = [
  {id: 'home', icon: '🧭', label: 'Home'},
  {id: 'fleet', icon: '🚢', label: 'Fleet'},
  {id: 'quiz', icon: '❓', label: 'Quiz'},
  {id: 'saved', icon: '⭐', label: 'Saved'},
];

export function BottomNavigation({
  activeTab,
  bottom,
  height,
  onChange,
}: BottomNavigationProps) {
  const {height: screenHeight, width: screenWidth} = useWindowDimensions();
  const compact = getIsSmallScreen(screenWidth, screenHeight);
  const tiny = getIsTinyScreen(screenWidth, screenHeight);

  return (
    <View
      style={[
        styles.shell,
        compact && styles.compactShell,
        tiny && styles.tinyShell,
        shadows.panel,
        {bottom, height},
      ]}>
      {tabs.map(tab => {
        const active = tab.id === activeTab;

        return (
          <Pressable
            accessibilityRole="button"
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={({pressed}) => [
              styles.item,
              pressed && styles.pressed,
            ]}>
            <View
              style={[
                styles.iconWrap,
                compact && styles.compactIconWrap,
                tiny && styles.tinyIconWrap,
                active && styles.activeIconWrap,
              ]}>
              <Text style={[styles.icon, compact && styles.compactIcon, tiny && styles.tinyIcon]}>
                {tab.icon}
              </Text>
            </View>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[
                styles.label,
                compact && styles.compactLabel,
                tiny && styles.tinyLabel,
                active && styles.activeLabel,
              ]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  activeIconWrap: {
    backgroundColor: 'rgba(239, 78, 90, 0.28)',
    borderColor: colors.red,
  },
  activeLabel: {
    color: colors.white,
  },
  icon: {
    fontSize: 20,
    lineHeight: 25,
  },
  compactIcon: {
    fontSize: 17,
    lineHeight: 21,
  },
  compactIconWrap: {
    height: 30,
    width: 38,
  },
  compactLabel: {
    fontSize: 10,
  },
  compactShell: {
    borderRadius: 24,
    left: 14,
    paddingHorizontal: 6,
    right: 14,
  },
  tinyIcon: {
    fontSize: 16,
    lineHeight: 20,
  },
  tinyIconWrap: {
    height: 28,
    width: 36,
  },
  tinyLabel: {
    fontSize: 9,
  },
  tinyShell: {
    borderRadius: 22,
    left: 12,
    paddingHorizontal: 4,
    right: 12,
  },
  iconWrap: {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    height: 36,
    justifyContent: 'center',
    width: 44,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    gap: 3,
    justifyContent: 'center',
    minWidth: 0,
  },
  label: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0,
  },
  pressed: {
    opacity: 0.76,
  },
  shell: {
    alignItems: 'center',
    backgroundColor: 'rgba(5, 17, 29, 0.94)',
    borderColor: colors.line,
    borderRadius: 28,
    borderWidth: 1,
    flexDirection: 'row',
    left: 18,
    overflow: 'hidden',
    paddingHorizontal: 8,
    position: 'absolute',
    right: 18,
  },
});

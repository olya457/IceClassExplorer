import {Platform, StyleSheet} from 'react-native';

import type {VesselCategory} from './types';

export const colors = {
  ink: '#F6FBFF',
  muted: '#BBD1E4',
  deep: '#4c9aeeff',
  panel: 'rgba(8, 24, 40, 0.82)',
  panelStrong: 'rgba(6, 18, 31, 0.94)',
  line: 'rgba(205, 232, 255, 0.24)',
  ice: '#9EE7FF',
  red: '#EF4E5A',
  amber: '#F6C65B',
  mint: '#6EF2C2',
  white: '#FFFFFF',
  black: '#000000',
};

export const categoryMeta: Record<
  VesselCategory,
  {emoji: string; color: string; short: string}
> = {
  Icebreakers: {emoji: '🧊', color: colors.red, short: 'Ice'},
  Research: {emoji: '🔬', color: colors.amber, short: 'Research'},
  Cargo: {emoji: '📦', color: '#5AD7FF', short: 'Cargo'},
  Expedition: {emoji: '🧭', color: colors.mint, short: 'Explore'},
  Rescue: {emoji: '🚨', color: '#FF8F5A', short: 'Rescue'},
};

export const shadows = StyleSheet.create({
  panel: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.28,
    shadowRadius: 20,
    elevation: 12,
  },
  glow: {
    shadowColor: colors.ice,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: Platform.OS === 'ios' ? 0.34 : 0,
    shadowRadius: 18,
    elevation: 8,
  },
});

export const text = StyleSheet.create({
  eyebrow: {
    color: colors.ice,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 0,
  },
  h2: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0,
  },
  h3: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0,
  },
  body: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
  },
  small: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0,
  },
});

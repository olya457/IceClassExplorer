import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BottomNavigation} from './components/BottomNavigation';
import {getPlatformGaps} from './layout';
import {FleetScreen} from './screens/FleetScreen';
import {HomeScreen} from './screens/HomeScreen';
import {QuizScreen} from './screens/QuizScreen';
import {SavedScreen} from './screens/SavedScreen';
import {DetailScreen} from './screens/DetailScreen';
import {useSavedVessels} from './hooks/useSavedVessels';
import type {TabId, Vessel, VesselCategory} from './types';

type CategoryFilter = VesselCategory | 'All';

export function MainShell() {
  const insets = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const gaps = getPlatformGaps(insets, width, height);
  const saved = useSavedVessels();
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [fleetCategory, setFleetCategory] = useState<CategoryFilter>('All');
  const [selectedVessel, setSelectedVessel] = useState<Vessel | null>(null);

  const openVessel = (vessel: Vessel) => {
    setSelectedVessel(vessel);
  };

  const openCategory = (category: VesselCategory) => {
    setFleetCategory(category);
    setSelectedVessel(null);
    setActiveTab('fleet');
  };

  const openQuiz = () => {
    setSelectedVessel(null);
    setActiveTab('quiz');
  };

  const openFleet = () => {
    setFleetCategory('All');
    setSelectedVessel(null);
    setActiveTab('fleet');
  };

  const changeTab = (tab: TabId) => {
    setSelectedVessel(null);
    setActiveTab(tab);
  };

  const shared = {
    bottomPadding: gaps.contentBottom,
    topPadding: gaps.top,
  };

  const content = selectedVessel ? (
    <DetailScreen
      {...shared}
      isSaved={saved.isSaved(selectedVessel.id)}
      onBack={() => setSelectedVessel(null)}
      onToggleSaved={saved.toggleSaved}
      vessel={selectedVessel}
    />
  ) : activeTab === 'home' ? (
    <HomeScreen
      {...shared}
      isSaved={saved.isSaved}
      onOpenCategory={openCategory}
      onOpenQuiz={openQuiz}
      onOpenVessel={openVessel}
      onToggleSaved={saved.toggleSaved}
      savedCount={saved.savedIds.length}
    />
  ) : activeTab === 'fleet' ? (
    <FleetScreen
      {...shared}
      category={fleetCategory}
      isSaved={saved.isSaved}
      onCategoryChange={setFleetCategory}
      onOpenVessel={openVessel}
      onToggleSaved={saved.toggleSaved}
    />
  ) : activeTab === 'quiz' ? (
    <QuizScreen {...shared} />
  ) : (
    <SavedScreen
      {...shared}
      isSaved={saved.isSaved}
      onClearSaved={saved.clearSaved}
      onOpenFleet={openFleet}
      onOpenVessel={openVessel}
      onToggleSaved={saved.toggleSaved}
      ready={saved.ready}
      savedVessels={saved.savedVessels}
    />
  );

  return (
    <View style={styles.root}>
      {content}
      <BottomNavigation
        activeTab={activeTab}
        bottom={gaps.navBottom}
        height={gaps.navHeight}
        onChange={changeTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

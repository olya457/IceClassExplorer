import React, {useCallback, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MainShell} from './src/MainShell';
import {LoadingScreen} from './src/screens/LoadingScreen';
import {OnboardingScreen} from './src/screens/OnboardingScreen';

type AppPhase = 'loading' | 'onboarding' | 'main';

function AppContent() {
  const [phase, setPhase] = useState<AppPhase>('loading');

  const completeLoading = useCallback(() => {
    setPhase('onboarding');
  }, []);

  const completeOnboarding = useCallback(() => {
    setPhase('main');
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {phase === 'loading' ? (
        <LoadingScreen onComplete={completeLoading} />
      ) : phase === 'onboarding' ? (
        <OnboardingScreen onFinish={completeOnboarding} />
      ) : (
        <MainShell />
      )}
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;

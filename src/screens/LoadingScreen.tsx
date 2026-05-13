import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {assets} from '../assets';

type LoadingScreenProps = {
  onComplete: () => void;
};

const snowDots = [
  {left: '8%', top: '8%', size: 2, opacity: 0.72},
  {left: '18%', top: '16%', size: 3, opacity: 0.5},
  {left: '31%', top: '7%', size: 2, opacity: 0.45},
  {left: '44%', top: '18%', size: 4, opacity: 0.65},
  {left: '63%', top: '9%', size: 2, opacity: 0.8},
  {left: '79%', top: '15%', size: 3, opacity: 0.54},
  {left: '92%', top: '6%', size: 2, opacity: 0.7},
  {left: '13%', top: '27%', size: 4, opacity: 0.42},
  {left: '28%', top: '34%', size: 2, opacity: 0.76},
  {left: '51%', top: '29%', size: 3, opacity: 0.48},
  {left: '70%', top: '35%', size: 2, opacity: 0.66},
  {left: '87%', top: '28%', size: 4, opacity: 0.46},
  {left: '6%', top: '49%', size: 2, opacity: 0.5},
  {left: '21%', top: '57%', size: 3, opacity: 0.76},
  {left: '38%', top: '48%', size: 2, opacity: 0.62},
  {left: '58%', top: '54%', size: 4, opacity: 0.52},
  {left: '75%', top: '47%', size: 2, opacity: 0.8},
  {left: '94%', top: '58%', size: 3, opacity: 0.44},
  {left: '11%', top: '71%', size: 3, opacity: 0.56},
  {left: '34%', top: '78%', size: 2, opacity: 0.72},
  {left: '49%', top: '69%', size: 4, opacity: 0.48},
  {left: '68%', top: '81%', size: 2, opacity: 0.7},
  {left: '84%', top: '72%', size: 3, opacity: 0.58},
  {left: '19%', top: '90%', size: 2, opacity: 0.5},
  {left: '56%', top: '92%', size: 3, opacity: 0.7},
  {left: '89%', top: '88%', size: 2, opacity: 0.62},
] as const;

const loadingHtml = `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        overflow: hidden;
      }
      .stage {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .track {
        width: 100%;
        height: 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.18);
        overflow: hidden;
      }
      .bar {
        width: 38%;
        height: 100%;
        border-radius: 999px;
        background: #ffffff;
        box-shadow: 0 0 18px rgba(255, 255, 255, 0.75);
        animation: run 1.15s ease-in-out infinite alternate;
      }
      @keyframes run {
        0% { transform: translateX(0); }
        100% { transform: translateX(164%); }
      }
    </style>
  </head>
  <body>
    <div class="stage">
      <div class="track"><div class="bar"></div></div>
    </div>
  </body>
</html>
`;

export function LoadingScreen({onComplete}: LoadingScreenProps) {
  const insets = useSafeAreaInsets();
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          duration: 1250,
          easing: Easing.inOut(Easing.ease),
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          duration: 1250,
          easing: Easing.inOut(Easing.ease),
          toValue: 0,
          useNativeDriver: true,
        }),
      ]),
    );
    pulseLoop.start();
    return () => {
      pulseLoop.stop();
    };
  }, [pulse]);

  const imageStyle = {
    opacity: pulse.interpolate({
      inputRange: [0, 1],
      outputRange: [0.9, 1],
    }),
    transform: [
      {
        translateY: pulse.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -10],
        }),
      },
      {
        scale: pulse.interpolate({
          inputRange: [0, 1],
          outputRange: [0.96, 1.05],
        }),
      },
    ],
  };

  return (
    <View style={styles.root}>
      <View style={styles.skyGlow} />
      {snowDots.map((dot, index) => (
        <View
          key={`${dot.left}-${dot.top}-${index}`}
          style={[
            styles.snowDot,
            {
              height: dot.size,
              left: dot.left,
              opacity: dot.opacity,
              top: dot.top,
              width: dot.size,
            },
          ]}
        />
      ))}
      <View
        style={[
          styles.content,
          {paddingTop: insets.top + 18, paddingBottom: insets.bottom + 24},
        ]}>
        <Animated.Image
          source={assets.iceLogoGlow}
          resizeMode="contain"
          style={[styles.logo, imageStyle]}
        />
        <View style={styles.webShell}>
          <WebView
            containerStyle={styles.webContainer}
            originWhitelist={['*']}
            scrollEnabled={false}
            source={{html: loadingHtml}}
            style={styles.webView}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logo: {
    height: 184,
    marginBottom: 30,
    width: 184,
  },
  root: {
    backgroundColor: '#061C37',
    flex: 1,
  },
  skyGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#061C37',
  },
  snowDot: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    position: 'absolute',
  },
  webView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    opacity: 0.99,
  },
  webContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  webShell: {
    backgroundColor: 'transparent',
    height: 18,
    overflow: 'hidden',
    width: 196,
  },
});

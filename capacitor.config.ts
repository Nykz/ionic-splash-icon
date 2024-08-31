import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.technyks.ionicSplashApp',
  appName: 'ionic-splash-app',
  webDir: 'www',
  
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#A34C04",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;

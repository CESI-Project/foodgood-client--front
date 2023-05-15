import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.foodgood.app',
  appName: 'foodgood-client--front',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

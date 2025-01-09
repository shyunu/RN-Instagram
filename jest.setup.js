import 'react-native-gesture-handler/jestSetup';
import {NativeModules} from 'react-native';

// Mock NativeModules
NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

// Mock Animated Native Helper
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock PushNotification
jest.mock('react-native-push-notification', () => ({
  configure: jest.fn(),
  createChannel: jest.fn(),
  localNotification: jest.fn(),
  cancelAllLocalNotifications: jest.fn(),
  removeDeliveredNotifications: jest.fn(),
}));

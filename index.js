/**
 * @format
 */

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {AppRegistry, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import messaging from '@react-native-firebase/messaging';

// messaging().onNotificationOpenedApp(remoteMessage => {
//   const screenToNavigate = remoteMessage.data.screenToNavigate;
//   // Navigate to the specified screen based on the data in the notification
// });

AppRegistry.registerComponent(appName, () => App);

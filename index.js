/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import Routes from './src/Navigation/Routes';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {Platform} from 'react-native';
import NavigationService from './src/utils/Handler/NavigationService';

async function onDisplayNotification(data) {
  if (Platform.OS == 'ios') {
    await notifee.requestPermission();
  }
  const channelId = await notifee.createChannel({
    id: 'Noti 9',
    name: 'Noti 9',
    importance: AndroidImportance.HIGH,
  });
  await notifee.displayNotification({
    title: data?.data?.title,
    body: data?.data?.body,
    android: {
      channelId: channelId,
    },
  });
}

notifee.onBackgroundEvent(async ({type, detail}) => {
  console.log('notifee background: ', type, detail);
  if (type === EventType.PRESS) {
    // Handle notification press event when in the background
    const data = detail.notification.data;

    if (!!data?.notificationType && data?.notificationType == 'booking') {
      setTimeout(() => {
        NavigationService.navigate(Routes.ORDER_INVITE_SCREEN, {
          data: data,
        });
      }, 1200);
    }
  }
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  onDisplayNotification(remoteMessage);
  if (
    !!remoteMessage?.data?.notificationType &&
    remoteMessage?.data?.notificationType == 'booking'
  ) {
    setTimeout(() => {
      NavigationService.navigate(Routes.ORDER_INVITE_SCREEN, {
        data: remoteMessage?.data,
      });
    }, 1200);
  }
});

AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import NavigationService from './src/utils/Handler/NavigationService';
import Routes from './src/Navigation/Routes';
// import CustomNotificationService from './src/utils/CustomNotificationService';

messaging().setBackgroundMessageHandler(async remoteMessage => {
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

async function onMessageReceived(message) {
  const channelId = await notifee.createChannel({
    id: 'important',
    name: 'Important Notifications',
    importance: AndroidImportance.HIGH,
  });
  console.log('message received', JSON.stringify(message, null, 2));
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('Foreground Notification:one', notification);
    },
  });

  try {
    notifee.displayNotification({
      title: message?.data?.title,
      body: message?.data?.body,
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
      },
    });

    notifee.onBackgroundEvent(async ({type, detail}) => {
      if (type === EventType.PRESS) {
        if (
          !!message?.notificationType &&
          message?.notificationType == 'booking'
        ) {
          setTimeout(() => {
            NavigationService.navigate(Routes.ORDER_INVITE_SCREEN, {
              data: message,
            });
          }, 1200);
        }
      }
    });
  } catch (e) {
    console.log('error ....... push notification', e);
  }
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

// CustomNotificationService.init();
AppRegistry.registerComponent(appName, () => App);

import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee, {AndroidImportance} from '@notifee/react-native';
import {Platform} from 'react-native';
import Routes from '../../Navigation/Routes';
import NavigationService from './NavigationService';

/**
 * The function `requestUserPermission` requests permission from the user to send push notifications
 * and retrieves the FCM token if permission is granted.
 */
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

/**
 * The function `getFcmToken` retrieves the FCM token from AsyncStorage and generates a new token if it
 * doesn't exist, storing it in AsyncStorage.
 */
const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');

  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'the new genrated token');
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    } catch (error) {
      console.log(error, 'error rasied in fcmToken');
      showError(error.message);
    }
  }
};

/**
 * The function `pushNoti` sets up event listeners for handling notifications in the foreground,
 * background, and quit states of the app.
 */
export const pushNoti = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notifications caused app to open from background state',
      remoteMessage.notification,
    );
  });
  messaging().onMessage(async remoteMessage => {
    console.log('recive in forbround', remoteMessage);
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};

/**
 * The function `onDisplayNotification` displays a notification with a title and body, and creates a
 * channel for the notification on Android devices.
 * @param data - The `data` parameter is an object that contains the notification data. It is expected
 * to have a `data` property, which is also an object containing the `title` and `body` properties.
 * These properties represent the title and body text of the notification, respectively.
 */
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
      sound: 'hollow',
    },
  });
}

/**
 * The function `notificationListeners` listens for incoming FCM messages, logs the message data,
 * displays a notification, and navigates to a specific screen if the message is a booking
 * notification.
 */
export async function notificationListeners() {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!', remoteMessage?.data);
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

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage?.data,
    );

    if (
      !!remoteMessage?.data?.notificationType &&
      remoteMessage?.data?.notificationType == 'booking'
    ) {
      setTimeout(() => {
        NavigationService.navigate(Routes.ORDER_DETAILS_MAP, {
          data: remoteMessage?.data,
        });
      }, 1200);
    }
  });

  /* The code `messaging().getInitialNotification().then(remoteMessage => { if (remoteMessage) {
  console.log( 'Notification caused app to open from quit state:', remoteMessage.notification, ); }
  });` is checking if the app was opened from a quit state due to a notification. */
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  return unsubscribe;
}

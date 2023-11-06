import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import AppStatesProvider from './src/utils/AppStatesProvider';
import store from './src/Redux/Store/Store';
import {Provider} from 'react-redux';
import {
  notificationListeners,
  requestUserPermission,
} from './src/utils/Handler/FirebaseMessagingNoti';
import NavigationService from './src/utils/Handler/NavigationService';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import Routes from './src/Navigation/Routes';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListeners();
  }, []);

  useEffect(() => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Foreground Notification:one', notification);
      },
    });
  }, []);

  async function onDisplayNotification(data) {
    if (Platform.OS == 'ios') {
      await notifee.requestPermission();
    }
    const channelId = await notifee.createChannel({
      id: 'Noti 12',
      name: 'Noti 12',
      importance: AndroidImportance.HIGH,
    });
    await notifee.displayNotification({
      title: data?.data?.title,
      body: data?.data?.body,
      data: {
        notificationType: Routes.ORDER_INVITE_SCREEN,
      },
      android: {
        channelId: channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  notifee.onForegroundEvent(({type, detail}) => {
    console.log('notifications type:----', type, detail);
    if (type === EventType.PRESS) {
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

  notifee.onBackgroundEvent(async ({type, detail}) => {
    if (type === EventType.PRESS) {
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

  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}>
      <AuthStack />
    </NavigationContainer>
  );
}

const appwapper = () => {
  return (
    <Provider store={store}>
      <AppStatesProvider>
        <App />
      </AppStatesProvider>
    </Provider>
  );
};

export default appwapper;

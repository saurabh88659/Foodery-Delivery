import React, {createContext, useContext, useState, useEffect} from 'react';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const NotificationsContext = createContext();

export const useNotifications = () => {
  return useContext(NotificationsContext);
};

export const NotificationsProvider = ({children}) => {
  const [notificationPermission, setNotificationPermission] = useState(null);

  useEffect(() => {
    const checkAndRequestPermission = async () => {
      if (Platform.OS === 'ios') {
        PushNotification.requestPermissions(
          ['alert', 'badge', 'sound'],
          permissions => {
            setNotificationPermission(permissions.alert);
          },
        );
      } else {
        PushNotification.requestPermissions().then(permissions => {
          setNotificationPermission(permissions.alert);
        });
      }
    };

    if (Platform.OS === 'ios') {
      PushNotification.checkPermissions(permissions => {
        setNotificationPermission(permissions.alert);
      });
    } else {
      checkAndRequestPermission();
    }
  }, []);

  return (
    <NotificationsContext.Provider
      value={{
        notificationPermission,
      }}>
      {children}
    </NotificationsContext.Provider>
  );
};

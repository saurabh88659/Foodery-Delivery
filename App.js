import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import AppStatesProvider from './src/utils/AppStatesProvider';
import store from './src/Redux/Store/Store';
import {Provider} from 'react-redux';
import {
  notificationListeners,
  requestUserPermission,
} from './src/utils/Handler/FirebaseMessagingNoti';
import NavigationService from './src/utils/Handler/NavigationService';
import {PermissionsAndroid, Platform} from 'react-native';

function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListeners();
  }, []);

  // useEffect(() => {
  //   if (Platform.OS == 'android') {
  //     PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //     )
  //       .then(res => {
  //         console.log('res+++++', res);
  //         if (!!res && res == 'granted') {
  //           requestUserPermission();
  //           notificationListeners();
  //         }
  //       })
  //       .catch(error => {
  //         alert('something wrong');
  //       });
  //   } else {
  //   }
  // }, []);

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

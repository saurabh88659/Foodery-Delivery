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

function App() {
  useEffect(() => {
    requestUserPermission();
    notificationListeners();
  }, []);
  return (
    <NavigationContainer>
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

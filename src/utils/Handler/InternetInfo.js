/**
 * The function `checkInternetConnection` checks if the device has an internet connection using the
 * `NetInfo` library in React Native.
 * @returns The function `checkInternetConnection` returns a Promise that resolves to a boolean value
 * indicating whether the device has an internet connection.
 */
import {Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export const checkInternetConnection = () => {
  return new Promise(resolve => {
    if (Platform.OS === 'android') {
      // For Android devices
      NetInfo.fetch().then(state => {
        resolve(state.isInternetReachable);
      });
    } else {
      // For iOS devices
      const unsubscribe = NetInfo.addEventListener(state => {
        unsubscribe();
        resolve(state.isInternetReachable);
      });
    }
  });
};

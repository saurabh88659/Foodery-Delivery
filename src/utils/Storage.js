/**
 * The code exports two functions, `_setStorage` and `_getStorage`, which can be used to store and
 * retrieve data from AsyncStorage in a React Native application.
 * @param key - The key parameter is a string that represents the unique identifier for the data you
 * want to store or retrieve from AsyncStorage. It is used to identify the data when you want to
 * retrieve it later.
 * @param data - The `data` parameter is the value that you want to store in AsyncStorage. It can be
 * any valid JavaScript data type, such as a string, number, object, or array.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

const _setStorage = async (key, data) => {
  console.log('data------------->>>', data, key);
  await AsyncStorage.setItem(key, data);
};

const _getStorage = async key => {
  const data = await AsyncStorage.getItem(key);
  if (data) {
    return data;
  } else return null;
};

export {_setStorage, _getStorage};

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Routes from './Routes';
import Loginaccount from '../Screens/Loginaccount';
// import Otp from '../Screens/Otp';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name={Routes.LOG_IN_SCREEN}
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Routes.LOGIN_ACCOUNT}
        component={Loginaccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

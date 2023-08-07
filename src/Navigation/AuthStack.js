import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Routes from './Routes';
import Loginaccount from '../Screens/Loginaccount';
import OrderDetailsMap from '../Screens/OrderDetailsMap';
import VerificationSelfie from '../Screens/VerificationSelfie';
import VerificationThanks from '../Screens/VerificationThanks';
import ThanksDelivering from '../Screens/ThanksDelivering';
import Home from '../Screens/Home';
import ViewDetails from '../Screens/ViewDetails';
import Registration from '../Screens/Registration';
import Otp from '../Screens/Otp';
import BottomTabBar from './BottomTabBar';
import SplashScreen from '../Screens/SplashScreen';
import TermsConditions from '../Screens/TermsConditions';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={Routes.SPLASH_SCREEN}>
      <Stack.Screen
        name={Routes.SPLASH_SCREEN}
        component={SplashScreen}
        options={{headerShown: false}}
      />
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
      <Stack.Screen
        name={Routes.ORDER_DETAILS_MAP}
        component={OrderDetailsMap}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.VERIFICATION_SELFIE}
        component={VerificationSelfie}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.VERIFICATION_THANKS}
        component={VerificationThanks}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.THANKS_DELIVERING}
        component={ThanksDelivering}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.HOME_SCREEN}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.VIEW_DETAILS}
        component={ViewDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.REGISTRATION_SCREEN}
        component={Registration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.OTP_SCREEN}
        component={Otp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.BOTTOM_TAB_BAR}
        component={BottomTabBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.TERMS_CONDITIONS}
        component={TermsConditions}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

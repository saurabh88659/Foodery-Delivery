import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import About from '../Screens/About';
import TermsConditions from '../Screens/TermsConditions';
import PrivacyPolicy from '../Screens/PrivacyPolicy';

const Stack = createNativeStackNavigator();
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.PROFILE_SCREEN}
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.EDIT_PROFILE}
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.ABOUT_US}
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.TERMS_CONDITIONS}
        component={TermsConditions}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;

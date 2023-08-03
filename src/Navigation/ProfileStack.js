import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';

const Stack = createNativeStackNavigator();
function AuthStack() {
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
    </Stack.Navigator>
  );
}

export default AuthStack;

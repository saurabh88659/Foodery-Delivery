import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import ViewDetails from '../Screens/ViewDetails';
import Booking from '../Screens/Booking';

const Stack = createNativeStackNavigator();
function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.BOOKING}
        component={Booking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.VIEW_DETAILS}
        component={ViewDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default BookingStack;

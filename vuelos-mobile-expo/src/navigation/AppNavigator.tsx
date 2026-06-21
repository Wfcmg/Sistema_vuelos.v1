import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeSearchScreen from '../screens/HomeSearchScreen';
import FlightDetailScreen from '../screens/FlightDetailScreen';
import PassengerScreen from '../screens/PassengerScreen';
import SeatSelectionScreen from '../screens/SeatSelectionScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SuccessScreen from '../screens/SuccessScreen';
import TripsScreen from '../screens/TripsScreen';
import ReservationDetailScreen from '../screens/ReservationDetailScreen';

import type { Flight, FlightClass, PassengerDraft } from '../types/booking';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  HomeSearch: undefined;
  FlightDetail: {
    flight: Flight;
    selectedClass?: FlightClass;
  };
  Passenger: {
    flight: Flight;
    selectedClass: FlightClass;
  };
  Seats: {
    flight: Flight;
    selectedClass: FlightClass;
    passenger: PassengerDraft;
  };
  Payment: {
    flight: Flight;
    selectedClass: FlightClass;
    passenger: PassengerDraft;
    seatNumber: string;
  };
  Success: {
    reservationId: string;
  };
  Trips: undefined;
  ReservationDetail: {
    reservationId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeSearch"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#050712',
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeSearch" component={HomeSearchScreen} />
        <Stack.Screen name="FlightDetail" component={FlightDetailScreen} />
        <Stack.Screen name="Passenger" component={PassengerScreen} />
        <Stack.Screen name="Seats" component={SeatSelectionScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Trips" component={TripsScreen} />
        <Stack.Screen name="ReservationDetail" component={ReservationDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

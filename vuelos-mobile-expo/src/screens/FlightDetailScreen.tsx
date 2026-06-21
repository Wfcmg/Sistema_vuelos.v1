import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import {
  getDestination,
  getFlightClasses,
  getFlightNumber,
  getOrigin,
  getPrice,
} from '../api/bookingApi';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { colors, radius } from '../theme';
import { useApp } from '../context/AppContext';

type Props = NativeStackScreenProps<RootStackParamList, 'FlightDetail'>;

export default function FlightDetailScreen({ route, navigation }: Props) {
  const { user } = useApp();
  const { flight } = route.params;
  const selectedClass = route.params.selectedClass ?? getFlightClasses(flight)[0];

  function continuePassengers() {
    if (!selectedClass) return;

    if (!user) {
      Alert.alert('Inicia sesion', 'Debes iniciar sesion antes de reservar.');
      navigation.navigate('Login');
      return;
    }

    navigation.navigate('Passenger', {
      flight,
      selectedClass,
    });
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Detalle del vuelo"
        showBack
        onBack={() => navigation.goBack()}
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
        onLogin={() => navigation.navigate('Login')}
        onRegister={() => navigation.navigate('Register')}
      />

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.kicker}>Vuelo seleccionado</Text>

        <Text style={styles.title}>
          {getOrigin(flight)} → {getDestination(flight)}
        </Text>

        <View style={styles.card}>
          <Text style={styles.main}>{getFlightNumber(flight)}</Text>

          <Text style={styles.label}>Aerolinea</Text>
          <Text style={styles.value}>{String(flight.airline ?? 'AeroWilly')}</Text>

          <Text style={styles.label}>Avion</Text>
          <Text style={styles.value}>{String(flight.aircraft ?? 'No especificado')}</Text>

          <Text style={styles.label}>Fecha de salida</Text>
          <Text style={styles.value}>
            {String(flight.departureDateTime ?? flight.departureDate ?? '')}
          </Text>

          <Text style={styles.label}>Duracion</Text>
          <Text style={styles.value}>{String(flight.duration ?? 420)} min</Text>

          <Text style={styles.label}>Escalas</Text>
          <Text style={styles.value}>{String(flight.stops ?? 1)}</Text>

          <Text style={styles.label}>Precio desde</Text>
          <Text style={styles.price}>
            ${getPrice(selectedClass?.basePrice ?? flight.lowestPrice ?? 250)}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Clase disponible</Text>

          <Text style={styles.label}>Clase</Text>
          <Text style={styles.value}>{String(selectedClass?.cabinClass ?? 'ECONOMY')}</Text>

          <Text style={styles.label}>Asientos disponibles</Text>
          <Text style={styles.value}>{String(selectedClass?.availableSeats ?? 0)}</Text>

          <Text style={styles.label}>Precio base</Text>
          <Text style={styles.price}>${getPrice(selectedClass?.basePrice ?? 250)}</Text>
        </View>

        <AppButton
          title="Continuar con pasajeros"
          variant="red"
          disabled={!selectedClass}
          onPress={continuePassengers}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 40 },
  kicker: { color: colors.red2, fontWeight: '900', letterSpacing: 4 },
  title: { color: colors.white, fontSize: 34, fontWeight: '900' },
  card: {
    backgroundColor: '#121212',
    borderColor: '#2a2a2a',
    borderWidth: 1,
    borderRadius: radius.xl,
    padding: 22,
    gap: 8,
  },
  main: { color: colors.white, fontSize: 28, fontWeight: '900', marginBottom: 8 },
  label: { color: colors.muted, fontSize: 15, marginTop: 10 },
  value: { color: colors.white, fontSize: 22, fontWeight: '800' },
  price: { color: colors.red2, fontSize: 34, fontWeight: '900' },
  sectionTitle: { color: colors.white, fontSize: 26, fontWeight: '900', marginBottom: 8 },
});

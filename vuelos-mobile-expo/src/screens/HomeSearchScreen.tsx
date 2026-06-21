import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import {
  getAirports,
  getDestination,
  getFlightClasses,
  getFlightNumber,
  getOrigin,
  getPrice,
  searchFlights,
} from '../api/bookingApi';
import type { Airport, Flight } from '../types/booking';
import { colors, radius } from '../theme';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useApp } from '../context/AppContext';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeSearch'>;

export default function HomeSearchScreen({ navigation }: Props) {
  const { user } = useApp();

  const [airports, setAirports] = useState<Airport[]>([]);
  const [origin, setOrigin] = useState('UIO');
  const [destination, setDestination] = useState('SCL');
  const [date, setDate] = useState('2026-07-15');
  const [passengers, setPassengers] = useState('1');
  const [cabinClass, setCabinClass] = useState('ECONOMY');
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loadingAirports, setLoadingAirports] = useState(false);
  const [loadingFlights, setLoadingFlights] = useState(false);

  useEffect(() => {
    loadAirports();
  }, []);

  async function loadAirports() {
    try {
      setLoadingAirports(true);
      const data = await getAirports();
      setAirports(data);
    } catch {
      setAirports([]);
    } finally {
      setLoadingAirports(false);
    }
  }

  async function handleSearch() {
    try {
      setLoadingFlights(true);

      const data = await searchFlights({
        origin,
        destination,
        date,
        passengers,
        cabinClass,
      });

      setFlights(data);

      if (data.length === 0) {
        Alert.alert('Sin vuelos', 'No se encontraron vuelos con esos datos.');
      }
    } catch (err) {
      Alert.alert(
        'Error al buscar vuelos',
        err instanceof Error ? err.message : 'No se pudo buscar.'
      );
    } finally {
      setLoadingFlights(false);
    }
  }

  function swap() {
    setOrigin(destination);
    setDestination(origin);
  }

  function goToReservation(flight: Flight, selectedClass: any) {
    if (!user) {
      Alert.alert('Inicia sesion', 'Debes iniciar sesion antes de reservar.');
      navigation.navigate('Login');
      return;
    }

    navigation.navigate('FlightDetail', {
      flight,
      selectedClass,
    });
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="AeroWilly"
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
        onLogin={() => navigation.navigate('Login')}
        onRegister={() => navigation.navigate('Register')}
      />

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.statusPill}>
            <Text style={styles.statusDot}>●</Text>
            <Text style={styles.statusText}>
              AeroWilly Tower · rutas listas para despegar
            </Text>
          </View>

          <Text style={styles.heroTitle}>Tu proximo destino despega aqui</Text>
          <Text style={styles.heroYellow}>vuelos reales, rapidos y seguros</Text>
          <Text style={styles.heroDesc}>
            Busca origen y destino, compara tarifas disponibles y reserva tu asiento en segundos.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Buscar vuelo</Text>

          <View style={styles.row}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Origen</Text>
              <TextInput
                value={origin}
                onChangeText={(v) => setOrigin(v.toUpperCase())}
                maxLength={3}
                autoCapitalize="characters"
                style={styles.bigInput}
              />
            </View>

            <Pressable style={styles.swap} onPress={swap}>
              <Text style={styles.swapText}>↔</Text>
            </Pressable>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Destino</Text>
              <TextInput
                value={destination}
                onChangeText={(v) => setDestination(v.toUpperCase())}
                maxLength={3}
                autoCapitalize="characters"
                style={styles.bigInput}
              />
            </View>
          </View>

          <Text style={styles.label}>Fecha de salida</Text>
          <TextInput value={date} onChangeText={setDate} style={styles.input} />

          <View style={styles.row}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Pasajeros</Text>
              <TextInput
                value={passengers}
                onChangeText={setPassengers}
                keyboardType="number-pad"
                style={styles.input}
              />
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Clase</Text>
              <TextInput
                value={cabinClass}
                onChangeText={(v) => setCabinClass(v.toUpperCase())}
                autoCapitalize="characters"
                style={styles.input}
              />
            </View>
          </View>

          <AppButton
            title={loadingFlights ? 'Buscando...' : 'Buscar vuelos'}
            onPress={handleSearch}
            disabled={loadingFlights}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Rutas disponibles</Text>
          <Text style={styles.muted}>
            {loadingAirports
              ? 'Cargando aeropuertos...'
              : airports.length > 0
                ? airports.map((a) => a.iataCode).join(' · ')
                : 'UIO · LIM · SCL'}
          </Text>
        </View>

        <View style={styles.benefit}>
          <Text style={styles.benefitIcon}>✈</Text>
          <Text style={styles.cardTitle}>Multiples aerolineas</Text>
          <Text style={styles.muted}>
            Compara vuelos con las aerolineas disponibles en la base.
          </Text>
        </View>

        <View style={styles.benefit}>
          <Text style={styles.benefitIcon}>■</Text>
          <Text style={styles.cardTitle}>Reserva segura</Text>
          <Text style={styles.muted}>
            Tus datos y reserva se procesan durante todo el flujo.
          </Text>
        </View>

        <View style={styles.resultsHead}>
          <Text style={styles.kicker}>OFERTAS ACTIVAS</Text>
          <Text style={styles.resultsTitle}>Rutas recomendadas</Text>
          <Text style={styles.muted}>Rutas reales disponibles en la base de datos.</Text>
        </View>

        {loadingFlights && (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.yellow} />
            <Text style={styles.muted}>Consultando vuelos reales...</Text>
          </View>
        )}

        {flights.map((flight, index) => {
          const classes = getFlightClasses(flight);
          const mainClass = classes[0];
          const id = `${getFlightNumber(flight)}-${index}`;

          return (
            <View key={id} style={styles.flightCard}>
              <View style={styles.flightTop}>
                <View>
                  <Text style={styles.routeCode}>{getOrigin(flight)}</Text>
                  <Text style={styles.city}>Quito</Text>
                </View>

                <Text style={styles.arrow}>›</Text>

                <View style={styles.alignRight}>
                  <Text style={styles.routeCode}>{getDestination(flight)}</Text>
                  <Text style={styles.city}>Santiago</Text>
                </View>
              </View>

              <View style={styles.priceBox}>
                <Text style={styles.smallWhite}>desde</Text>
                <Text style={styles.bigPrice}>
                  ${getPrice(flight.lowestPrice || mainClass?.basePrice || 250)}
                </Text>
                <Text style={styles.smallWhite}>por persona · ida</Text>
              </View>

              <View style={styles.flightInfo}>
                <Text style={styles.infoLabel}>VUELO</Text>
                <Text style={styles.infoValue}>{getFlightNumber(flight)}</Text>

                <Text style={styles.infoLabel}>SALIDA</Text>
                <Text style={styles.infoValue}>
                  {String(flight.departureDateTime ?? flight.departureDate ?? '')}
                </Text>

                <Text style={styles.infoLabel}>AEROLINEA</Text>
                <Text style={styles.infoValue}>
                  {String(flight.airline ?? 'AeroWilly')}
                </Text>

                <Text style={styles.infoLabel}>AVION</Text>
                <Text style={styles.infoValue}>
                  {String(flight.aircraft ?? 'No especificado')}
                </Text>
              </View>

              {classes.map((klass) => (
                <Pressable
                  key={String(klass.flightClassId)}
                  style={styles.classRow}
                  onPress={() => goToReservation(flight, klass)}
                >
                  <View>
                    <Text style={styles.className}>
                      {klass.cabinClass === 'ECONOMY' ? 'Economica' : klass.cabinClass}
                    </Text>
                    <Text style={styles.classSeats}>{klass.availableSeats} asientos</Text>
                  </View>

                  <View style={styles.reserveRight}>
                    <Text style={styles.classPrice}>
                      ${getPrice(klass.basePrice).toFixed(2)}
                    </Text>
                    <Text style={styles.reserveText}>Reservar →</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          );
        })}

        <Text style={styles.footer}>
          AeroWilly © 2026 · Plataforma academica · William Carrion
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 50 },
  hero: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    padding: 24,
    gap: 14,
  },
  statusPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#172018',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 8,
  },
  statusDot: { color: colors.green },
  statusText: { color: '#facc15', fontWeight: '900' },
  heroTitle: { color: colors.white, fontSize: 38, fontWeight: '900' },
  heroYellow: { color: '#ffe100', fontSize: 30, fontWeight: '900' },
  heroDesc: { color: colors.muted, fontSize: 17, lineHeight: 28 },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    backgroundColor: colors.card,
    padding: 20,
    gap: 14,
  },
  cardTitle: { color: colors.white, fontSize: 24, fontWeight: '900' },
  row: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  inputBox: { flex: 1 },
  label: { color: colors.muted, fontWeight: '900', marginBottom: 8 },
  bigInput: {
    backgroundColor: colors.input,
    color: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 4,
  },
  input: {
    backgroundColor: colors.input,
    color: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 18,
  },
  swap: {
    width: 58,
    height: 58,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  swapText: { color: colors.yellow, fontSize: 28, fontWeight: '900' },
  infoCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 20,
    gap: 8,
  },
  benefit: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: 20,
    gap: 10,
  },
  benefitIcon: { fontSize: 34, color: colors.yellow },
  muted: { color: colors.muted, fontSize: 16, lineHeight: 25 },
  resultsHead: { gap: 8, marginTop: 18 },
  kicker: { color: colors.yellow, fontWeight: '900', letterSpacing: 5 },
  resultsTitle: { color: colors.white, fontSize: 34, fontWeight: '900' },
  loading: { alignItems: 'center', gap: 10, padding: 18 },
  flightCard: {
    backgroundColor: colors.yellow,
    borderRadius: radius.xl,
    padding: 22,
    gap: 18,
  },
  flightTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  routeCode: { color: colors.white, fontSize: 40, fontWeight: '900', letterSpacing: 4 },
  city: { color: colors.white, fontWeight: '800', fontSize: 16 },
  arrow: {
    color: colors.white,
    fontSize: 50,
    fontWeight: '900',
    backgroundColor: 'rgba(255,255,255,0.18)',
    width: 64,
    height: 64,
    textAlign: 'center',
    borderRadius: 50,
  },
  alignRight: { alignItems: 'flex-end' },
  priceBox: { gap: 3 },
  smallWhite: { color: colors.white, fontWeight: '900', fontSize: 16 },
  bigPrice: { color: colors.white, fontSize: 54, fontWeight: '900' },
  flightInfo: {
    backgroundColor: 'rgba(92,55,0,0.38)',
    borderRadius: radius.lg,
    padding: 18,
    gap: 4,
  },
  infoLabel: { color: '#ffe8aa', fontWeight: '900', letterSpacing: 4, marginTop: 8 },
  infoValue: { color: colors.white, fontSize: 18 },
  classRow: {
    backgroundColor: 'rgba(0,0,0,0.22)',
    borderRadius: radius.md,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  className: { color: colors.white, fontWeight: '900', fontSize: 16 },
  classSeats: { color: colors.white, opacity: 0.9 },
  reserveRight: { alignItems: 'flex-end', gap: 5 },
  classPrice: { color: colors.white, fontWeight: '900', fontSize: 22 },
  reserveText: { color: colors.white, fontWeight: '900' },
  footer: { color: colors.muted, textAlign: 'center', marginTop: 10 },
});

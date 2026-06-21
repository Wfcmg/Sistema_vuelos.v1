import { useCallback } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import { useApp } from '../context/AppContext';
import { getDestination, getFlightId, getOrigin } from '../api/bookingApi';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { colors, radius } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Trips'>;

export default function TripsScreen({ navigation }: Props) {
  const { user, reservations, loadingReservations, refreshReservations } = useApp();

  useFocusEffect(
    useCallback(() => {
      if (user?.id) {
        refreshReservations().catch(() => {});
      }
    }, [user?.id])
  );

  function safeBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('HomeSearch');
    }
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Mis viajes"
        showBack
        onBack={safeBack}
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={loadingReservations}
            onRefresh={() => refreshReservations().catch(() => {})}
          />
        }
      >
        <Text style={styles.title}>Mis viajes</Text>

        {!user && (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Inicia sesión para ver tus reservas</Text>
            <Text style={styles.muted}>Tus viajes se cargan desde el backend con tu usuario real.</Text>
            <AppButton title="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
          </View>
        )}

        {user && loadingReservations && reservations.length === 0 && (
          <View style={styles.loadingBox}>
            <ActivityIndicator color={colors.yellow} />
            <Text style={styles.muted}>Cargando reservas reales...</Text>
          </View>
        )}

        {user && !loadingReservations && reservations.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No hay reservas para este usuario</Text>
            <Text style={styles.muted}>Desliza hacia abajo para refrescar o crea una reserva nueva.</Text>
            <AppButton title="Buscar vuelos" onPress={() => navigation.navigate('HomeSearch')} />
          </View>
        )}

        {reservations.map((reservation) => (
          <View key={reservation.id} style={styles.card}>
            <View style={styles.top}>
              <View>
                <Text style={styles.flight}>
                  {getOrigin(reservation.flight)} → {getDestination(reservation.flight)}
                </Text>
                <Text style={styles.muted}>Vuelo: {getFlightId(reservation.flight)}</Text>
              </View>

              <View
                style={[
                  styles.status,
                  reservation.status === 'CANCELLED' && styles.cancelled,
                ]}
              >
                <Text style={styles.statusText}>
                  {reservation.status === 'CANCELLED' ? 'Cancelada' : 'Confirmada'}
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.muted}>👤 {reservation.passenger.firstName} {reservation.passenger.lastName}</Text>
              <Text style={styles.price}>${reservation.totalAmount.toFixed(2)}</Text>
            </View>

            <Text style={styles.code}>#{reservation.reservationCode}</Text>

            <AppButton
              title="Ver detalle ›"
              variant="dark"
              onPress={() =>
                navigation.navigate('ReservationDetail', {
                  reservationId: reservation.id,
                })
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 50 },
  title: { color: colors.white, fontSize: 32, fontWeight: '900' },
  empty: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 20,
    gap: 14,
  },
  loadingBox: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 20,
    gap: 14,
    alignItems: 'center',
  },
  emptyTitle: { color: colors.white, fontSize: 22, fontWeight: '900' },
  muted: { color: colors.muted },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 14,
  },
  top: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  flight: { color: colors.white, fontSize: 20, fontWeight: '900' },
  status: {
    backgroundColor: '#dcfce7',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    height: 34,
  },
  cancelled: { backgroundColor: '#fee2e2' },
  statusText: { color: '#166534', fontWeight: '900' },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  price: { color: colors.yellow, fontWeight: '900', fontSize: 18 },
  code: { color: colors.muted2, fontWeight: '800' },
});

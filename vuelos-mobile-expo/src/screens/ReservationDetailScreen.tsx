import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import { cancelReservation, getDestination, getFlightId, getOrigin } from '../api/bookingApi';
import { useApp } from '../context/AppContext';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { colors, radius } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ReservationDetail'>;

export default function ReservationDetailScreen({ route, navigation }: Props) {
  const { reservations, markReservationCancelled, refreshReservations, user } = useApp();
  const reservation = reservations.find((item) => item.id === route.params.reservationId);

  function safeBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Trips');
    }
  }

  if (!reservation) {
    return (
      <View style={styles.screen}>
        <AppHeader
          title="Reserva"
          showBack
          onBack={safeBack}
          onHome={() => navigation.navigate('HomeSearch')}
          onTrips={() => navigation.navigate('Trips')}
        />
        <View style={styles.empty}>
          <Text style={styles.title}>No se encontró la reserva</Text>
          <AppButton title="Ir a mis viajes" onPress={() => navigation.navigate('Trips')} />
        </View>
      </View>
    );
  }

  const currentReservation = reservation;
  const subtotal = Number((currentReservation.totalAmount / 1.15).toFixed(2));
  const tax = Number((currentReservation.totalAmount - subtotal).toFixed(2));

  async function handleCancel() {
    if (!user) {
      Alert.alert('Sesión requerida', 'Inicia sesión nuevamente.');
      navigation.navigate('Login');
      return;
    }

    Alert.alert('Cancelar reserva', '¿Seguro que deseas cancelar esta reserva?', [
      { text: 'No', style: 'cancel' },
      {
        text: 'Sí, cancelar',
        style: 'destructive',
        onPress: async () => {
          try {
            await cancelReservation({
              reservationId: currentReservation.id,
              userId: user.id,
            });

            markReservationCancelled(currentReservation.id);
            await refreshReservations().catch(() => {});
            Alert.alert('Reserva cancelada', 'La reserva fue cancelada correctamente.');
          } catch (err) {
            Alert.alert(
              'No se pudo cancelar',
              err instanceof Error ? err.message : 'Error al cancelar.'
            );
          }
        },
      },
    ]);
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Detalle de reserva"
        showBack
        onBack={safeBack}
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
      />

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.head}>
          <View>
            <Text style={styles.backText}>← Mis viajes</Text>
            <Text style={styles.title}>Reserva #{currentReservation.reservationCode}</Text>
            <Text style={styles.muted}>
              Creada el {new Date(currentReservation.createdAt).toLocaleDateString()}
            </Text>
          </View>

          <View
            style={[
              styles.status,
              currentReservation.status === 'CANCELLED' && styles.cancelled,
            ]}
          >
            <Text style={styles.statusText}>
              {currentReservation.status === 'CANCELLED' ? 'Cancelada' : 'Confirmada'}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.airline}>
            ✈ {String(currentReservation.flight.airline ?? 'AeroWilly')}
          </Text>
          <Text style={styles.muted}>Vuelo: {getFlightId(currentReservation.flight)}</Text>

          <View style={styles.route}>
            <View>
              <Text style={styles.time}>05:00</Text>
              <Text style={styles.code}>{getOrigin(currentReservation.flight)}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>

            <View>
              <Text style={styles.time}>12:00</Text>
              <Text style={styles.code}>{getDestination(currentReservation.flight)}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.section}>Pasajeros</Text>

        <View style={styles.card}>
          <View style={styles.row}>
            <View>
              <Text style={styles.white}>
                {currentReservation.passenger.firstName} {currentReservation.passenger.lastName}
              </Text>
              <Text style={styles.muted}>Doc: {currentReservation.passenger.documentNumber}</Text>
            </View>

            <View style={styles.seatPill}>
              <Text style={styles.seatText}>{currentReservation.seatNumber}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Factura</Text>

          <View style={styles.row}>
            <Text style={styles.muted}>N° Factura</Text>
            <Text style={styles.white}>{currentReservation.invoiceNumber}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.muted}>Método de pago</Text>
            <Text style={styles.white}>{currentReservation.paymentMethod}</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <Text style={styles.muted}>Subtotal</Text>
            <Text style={styles.white}>${subtotal}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.muted}>IVA 15%</Text>
            <Text style={styles.white}>${tax}</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalYellow}>${currentReservation.totalAmount.toFixed(2)}</Text>
          </View>
        </View>

        <AppButton
          title={
            currentReservation.status === 'CANCELLED'
              ? 'Reserva ya cancelada'
              : 'Cancelar reserva'
          }
          variant="red"
          disabled={currentReservation.status === 'CANCELLED'}
          onPress={handleCancel}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 50 },
  empty: { flex: 1, justifyContent: 'center', padding: 20, gap: 16 },
  head: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  backText: { color: colors.yellow, fontWeight: '900', marginBottom: 10 },
  title: { color: colors.white, fontSize: 28, fontWeight: '900' },
  muted: { color: colors.muted },
  status: {
    backgroundColor: '#dcfce7',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 36,
  },
  cancelled: { backgroundColor: '#fee2e2' },
  statusText: { color: '#166534', fontWeight: '900' },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 12,
  },
  airline: { color: colors.white, fontSize: 20, fontWeight: '900' },
  route: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  time: { color: colors.white, fontSize: 34, fontWeight: '900' },
  code: { color: colors.white, fontWeight: '900' },
  arrow: { color: colors.white, fontSize: 36 },
  section: { color: colors.white, fontSize: 20, fontWeight: '900' },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, alignItems: 'center' },
  white: { color: colors.white, fontWeight: '900' },
  seatPill: {
    backgroundColor: colors.yellow,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  seatText: { color: colors.white, fontWeight: '900', fontSize: 18 },
  line: { height: 1, backgroundColor: colors.border },
  total: { color: colors.white, fontWeight: '900', fontSize: 18 },
  totalYellow: { color: colors.yellow, fontWeight: '900', fontSize: 20 },
});

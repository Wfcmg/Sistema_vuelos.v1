import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import { useApp } from '../context/AppContext';
import { getFlightId } from '../api/bookingApi';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { colors, radius } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Success'>;

export default function SuccessScreen({ route, navigation }: Props) {
  const { reservations, user } = useApp();
  const reservation = reservations.find((item) => item.id === route.params.reservationId);

  if (!reservation) {
    return (
      <View style={styles.screen}>
        <AppHeader title="Reserva" onHome={() => navigation.navigate('HomeSearch')} />
        <View style={styles.empty}>
          <Text style={styles.title}>No se encontró la reserva</Text>
          <AppButton title="Ir a mis viajes" onPress={() => navigation.navigate('Trips')} />
        </View>
      </View>
    );
  }

  const subtotal = Number((reservation.totalAmount / 1.15).toFixed(2));
  const tax = Number((reservation.totalAmount - subtotal).toFixed(2));

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Pago exitoso"
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
      />

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.check}>
          <Text style={styles.checkText}>✓</Text>
        </View>

        <Text style={styles.title}>¡Pago exitoso!</Text>
        <Text style={styles.muted}>Tu reserva fue confirmada y el ticket se generó automáticamente.</Text>

        <View style={styles.ticket}>
          <Text style={styles.kicker}>TICKET AEROWILLY</Text>
          <Text style={styles.ticketTitle}>Boarding Ticket / Reserva</Text>

          <View style={styles.split}>
            <View style={styles.col}>
              <Text style={styles.label}>CÓDIGO DE RESERVA</Text>
              <Text style={styles.yellow}>{reservation.reservationCode}</Text>

              <Text style={styles.label}>USUARIO</Text>
              <Text style={styles.white}>{user?.name ?? 'Usuario AeroWilly'}</Text>
              <Text style={styles.mutedSmall}>{user?.email ?? ''}</Text>

              <Text style={styles.label}>DATOS DEL VUELO</Text>
              <Text style={styles.white}>Clase de vuelo: {String(reservation.selectedClass.flightClassId)}</Text>
              <Text style={styles.mutedSmall}>Vuelo: {getFlightId(reservation.flight)}</Text>
            </View>

            <View style={styles.col}>
              <Text style={styles.label}>PASAJEROS Y ASIENTOS</Text>
              <View style={styles.passenger}>
                <Text style={styles.white}>
                  {reservation.passenger.firstName} {reservation.passenger.lastName}
                </Text>
                <Text style={styles.mutedSmall}>Doc: {reservation.passenger.documentNumber}</Text>
                <Text style={styles.seat}>{reservation.seatNumber}</Text>
              </View>

              <Text style={styles.label}>N° FACTURA</Text>
              <Text style={styles.white}>{reservation.invoiceNumber}</Text>

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
                <Text style={styles.total}>Total pagado</Text>
                <Text style={styles.totalYellow}>${reservation.totalAmount.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>

        <AppButton
          title="Ver mi reserva"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'ReservationDetail',
                  params: {
                    reservationId: reservation.id,
                  },
                },
              ],
            })
          }
        />

        <AppButton
          title="Volver a buscar vuelos"
          variant="dark"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'HomeSearch' }],
            })
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, alignItems: 'center', paddingBottom: 50 },
  empty: { flex: 1, justifyContent: 'center', padding: 20, gap: 16 },
  check: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: { color: colors.green, fontSize: 42, fontWeight: '900' },
  title: { color: colors.white, fontSize: 30, fontWeight: '900', textAlign: 'center' },
  muted: { color: colors.muted, textAlign: 'center' },
  ticket: {
    width: '100%',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 14,
  },
  kicker: { color: colors.yellow, fontWeight: '900', letterSpacing: 4 },
  ticketTitle: { color: colors.white, fontSize: 24, fontWeight: '900' },
  split: { gap: 16 },
  col: { gap: 8 },
  label: { color: colors.muted, fontWeight: '900', marginTop: 10 },
  yellow: { color: colors.yellow, fontWeight: '900', fontSize: 20 },
  white: { color: colors.white, fontWeight: '900' },
  mutedSmall: { color: colors.muted, fontSize: 13 },
  passenger: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 14,
  },
  seat: { color: colors.yellow, fontWeight: '900', fontSize: 22, marginTop: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  line: { height: 1, backgroundColor: colors.border, marginVertical: 4 },
  total: { color: colors.white, fontWeight: '900', fontSize: 18 },
  totalYellow: { color: colors.yellow, fontWeight: '900', fontSize: 18 },
});


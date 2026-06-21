import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import { colors, radius } from '../theme';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { getFlightClasses, getOccupiedSeats } from '../api/bookingApi';

type Props = NativeStackScreenProps<RootStackParamList, 'Seats'>;

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
const ROWS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function SeatSelectionScreen({ route, navigation }: Props) {
  const { flight, selectedClass, passenger } = route.params;
  const [occupiedSeats, setOccupiedSeats] = useState<string[]>([]);
  const [selectedSeat, setSelectedSeat] = useState('');
  const [loading, setLoading] = useState(false);

  const flightClassId =
    selectedClass.flightClassId ??
    selectedClass.id ??
    getFlightClasses(flight)[0]?.flightClassId ??
    '';

  useEffect(() => {
    loadOccupiedSeats();
  }, []);

  const availableSeats = useMemo(() => {
    const all = ROWS.flatMap((row) => LETTERS.map((letter) => `${row}${letter}`));
    return all.filter((seat) => !occupiedSeats.includes(seat));
  }, [occupiedSeats]);

  async function loadOccupiedSeats() {
    try {
      setLoading(true);
      if (!flightClassId) return;
      const data = await getOccupiedSeats(String(flightClassId));
      setOccupiedSeats(data);
    } catch {
      setOccupiedSeats([]);
    } finally {
      setLoading(false);
    }
  }

  function autoAssign() {
    const seat = availableSeats[0];
    if (!seat) {
      Alert.alert('Sin asientos', 'No hay asientos disponibles.');
      return;
    }
    setSelectedSeat(seat);
  }

  function chooseSeat(seat: string) {
    if (occupiedSeats.includes(seat)) {
      Alert.alert('Asiento ocupado', `El asiento ${seat} ya está ocupado.`);
      return;
    }
    setSelectedSeat(seat);
  }

  function continuePayment() {
    if (!selectedSeat) {
      Alert.alert('Selecciona asiento', 'Debes elegir un asiento para continuar.');
      return;
    }

    navigation.navigate('Payment', {
      flight,
      selectedClass,
      passenger,
      seatNumber: selectedSeat,
    });
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Asientos"
        showBack
        onBack={() => navigation.goBack()}
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
      />

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.steps}>
          <Text style={styles.done}>✓ Pasajeros</Text>
          <Text style={styles.stepActive}>2 Asientos</Text>
          <Text style={styles.step}>3 Pago</Text>
        </View>

        <Text style={styles.title}>Selección de asientos</Text>
        <Text style={styles.muted}>Elige un asiento disponible para cada pasajero.</Text>

        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View>
              <Text style={styles.sectionTitle}>Selecciona tus asientos</Text>
              <Text style={styles.muted}>Los asientos rojos ya están ocupados.</Text>
            </View>

            <Pressable style={styles.refresh} onPress={loadOccupiedSeats}>
              <Text style={styles.refreshText}>Refrescar</Text>
            </Pressable>
          </View>

          {loading && (
            <View style={styles.loading}>
              <ActivityIndicator color={colors.yellow} />
              <Text style={styles.muted}>Consultando ocupados...</Text>
            </View>
          )}

          <View style={styles.plane}>
            <Text style={styles.front}>FRENTE DEL AVIÓN</Text>

            <View style={styles.seatHeader}>
              <Text style={styles.headerSmall}>A</Text>
              <Text style={styles.headerSmall}>B</Text>
              <Text style={styles.headerSmall}>C</Text>
              <Text style={styles.rowSpacer}>Fila</Text>
              <Text style={styles.headerSmall}>D</Text>
              <Text style={styles.headerSmall}>E</Text>
              <Text style={styles.headerSmall}>F</Text>
            </View>

            {ROWS.map((row) => (
              <View key={row} style={styles.seatRow}>
                {LETTERS.slice(0, 3).map((letter) => renderSeat(row, letter))}
                <Text style={styles.rowNumber}>{row}</Text>
                {LETTERS.slice(3).map((letter) => renderSeat(row, letter))}
              </View>
            ))}
          </View>

          <View style={styles.legend}>
            <Text style={styles.legendText}>□ Libre</Text>
            <Text style={styles.legendText}>▣ Elegido</Text>
            <Text style={styles.legendText}>■ Ocupado</Text>
          </View>
        </View>

        <View style={styles.sideCard}>
          <Text style={styles.sideTitle}>PASAJEROS</Text>
          <View style={styles.passengerBox}>
            <Text style={styles.passengerName}>{passenger.firstName} {passenger.lastName}</Text>
            <Text style={styles.passengerDoc}>Doc: {passenger.documentNumber}</Text>
            <Text style={styles.passengerSeat}>{selectedSeat ? `Asiento ${selectedSeat}` : 'Sin asiento'}</Text>
          </View>

          <AppButton title="Asignar automáticamente" variant="dark" onPress={autoAssign} />

          <View style={styles.selectedBox}>
            <Text style={styles.sideTitle}>ASIENTO SELECCIONADO</Text>
            <Text style={styles.selectedText}>{selectedSeat || 'Selecciona un asiento del avión'}</Text>
          </View>

          <AppButton title="Continuar al pago" onPress={continuePayment} disabled={!selectedSeat} />
        </View>
      </ScrollView>
    </View>
  );

  function renderSeat(row: number, letter: string) {
    const seat = `${row}${letter}`;
    const occupied = occupiedSeats.includes(seat);
    const selected = selectedSeat === seat;
    const executive = row <= 2;

    return (
      <Pressable
        key={seat}
        onPress={() => chooseSeat(seat)}
        disabled={occupied}
        style={[
          styles.seat,
          executive && styles.executiveSeat,
          occupied && styles.occupiedSeat,
          selected && styles.selectedSeat,
        ]}
      >
        <Text
          style={[
            styles.seatText,
            occupied && styles.occupiedText,
            selected && styles.selectedTextSeat,
          ]}
        >
          {seat}
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 50 },
  steps: { flexDirection: 'row', justifyContent: 'space-between' },
  done: { color: colors.green, fontWeight: '900' },
  stepActive: { color: colors.yellow, fontWeight: '900' },
  step: { color: colors.muted, fontWeight: '900' },
  title: { color: colors.white, fontSize: 30, fontWeight: '900' },
  muted: { color: colors.muted, fontSize: 15, lineHeight: 23 },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 18,
  },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  sectionTitle: { color: colors.white, fontSize: 22, fontWeight: '900' },
  refresh: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingVertical: 10,
    height: 42,
  },
  refreshText: { color: colors.yellow, fontWeight: '900' },
  loading: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  plane: {
    alignSelf: 'center',
    backgroundColor: '#060913',
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    gap: 6,
  },
  front: {
    color: colors.yellow,
    textAlign: 'center',
    fontWeight: '900',
    marginBottom: 8,
  },
  seatHeader: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  headerSmall: { color: colors.muted, width: 42, textAlign: 'center', fontWeight: '900' },
  rowSpacer: { color: colors.muted, width: 34, textAlign: 'center', fontSize: 11 },
  seatRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  rowNumber: { color: colors.muted, width: 34, textAlign: 'center', fontSize: 12 },
  seat: {
    width: 42,
    height: 34,
    borderRadius: 8,
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  executiveSeat: {
    backgroundColor: '#dbeafe',
    borderColor: '#93c5fd',
  },
  occupiedSeat: {
    backgroundColor: '#fecaca',
    borderColor: '#fca5a5',
  },
  selectedSeat: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
  },
  seatText: { color: colors.white, fontSize: 11, fontWeight: '900' },
  occupiedText: { color: colors.red, fontWeight: '900' },
  selectedTextSeat: { color: colors.white },
  legend: { flexDirection: 'row', justifyContent: 'center', gap: 18 },
  legendText: { color: colors.muted, fontSize: 12 },
  sideCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 14,
  },
  sideTitle: { color: colors.muted, fontWeight: '900', letterSpacing: 2 },
  passengerBox: {
    backgroundColor: colors.yellow,
    borderRadius: radius.md,
    padding: 16,
  },
  passengerName: { color: colors.white, fontWeight: '900', fontSize: 18 },
  passengerDoc: { color: colors.white, opacity: 0.9 },
  passengerSeat: { color: colors.white, marginTop: 8, fontWeight: '900' },
  selectedBox: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 14,
    gap: 8,
  },
  selectedText: { color: colors.white, fontSize: 18, fontWeight: '900' },
});

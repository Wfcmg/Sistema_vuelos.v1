import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/AppButton';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { getDestination, getFlightNumber, getOrigin } from '../api/bookingApi';
import { colors, radius } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Passenger'>;

export default function PassengerScreen({ route, navigation }: Props) {
  const { flight, selectedClass } = route.params;

  const [firstName, setFirstName] = useState('Alfonso');
  const [lastName, setLastName] = useState('Perez');
  const [documentNumber, setDocumentNumber] = useState('1751128974');

  function handleContinue() {
    if (!firstName.trim() || !lastName.trim() || !documentNumber.trim()) {
      Alert.alert('Datos incompletos', 'Completa los datos del pasajero.');
      return;
    }

    navigation.navigate('Seats', {
      flight,
      selectedClass,
      passenger: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        documentNumber: documentNumber.trim(),
      },
    });
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Pasajeros"
        showBack
        onBack={() => navigation.goBack()}
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          <View style={styles.steps}>
            <Text style={styles.stepActive}>1 Pasajeros</Text>
            <Text style={styles.step}>2 Asientos</Text>
            <Text style={styles.step}>3 Pago</Text>
          </View>

          <Text style={styles.kicker}>Datos del pasajero</Text>
          <Text style={styles.title}>¿Quién viaja?</Text>

          <View style={styles.flightBox}>
            <Text style={styles.flightText}>{getOrigin(flight)} → {getDestination(flight)}</Text>
            <Text style={styles.flightSub}>{getFlightNumber(flight)}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.passengerTitle}>Pasajero 1</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Ej: Juan"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />

            <Text style={styles.label}>Apellido</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Ej: Pérez"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />

            <Text style={styles.label}>N° documento</Text>
            <TextInput
              value={documentNumber}
              onChangeText={setDocumentNumber}
              keyboardType="number-pad"
              placeholder="Ej: 1751128974"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />
          </View>

          <View style={styles.card}>
            <Text style={styles.passengerTitle}>¿Tienes un código de descuento?</Text>
            <TextInput
              value=""
              editable={false}
              placeholder="Ej: VERANO25"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />
          </View>

          <AppButton title="Continuar a selección de asientos  ›" onPress={handleContinue} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1 },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 40 },
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginVertical: 6,
  },
  stepActive: { color: colors.yellow, fontWeight: '900' },
  step: { color: colors.muted, fontWeight: '900' },
  kicker: { color: colors.red2, fontWeight: '900', letterSpacing: 4, textTransform: 'uppercase' },
  title: { color: colors.white, fontSize: 34, fontWeight: '900' },
  flightBox: {
    backgroundColor: '#121212',
    borderRadius: radius.xl,
    padding: 22,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  flightText: { color: colors.white, fontSize: 30, fontWeight: '900' },
  flightSub: { color: colors.muted, fontSize: 18, marginTop: 8 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 10,
  },
  passengerTitle: { color: colors.white, fontSize: 20, fontWeight: '900' },
  label: { color: colors.muted, fontWeight: '900', marginTop: 6 },
  input: {
    backgroundColor: colors.input,
    color: colors.white,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 16,
  },
});

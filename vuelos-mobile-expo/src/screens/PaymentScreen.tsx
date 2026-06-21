import { useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
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
import { createPayment, createReservation, getFlightClasses, getFlightId, getPrice, waitInvoiceByPayment } from '../api/bookingApi';
import { useApp } from '../context/AppContext';
import type { RootStackParamList } from '../navigation/AppNavigator';
import type { StoredReservation } from '../types/booking';
import { colors, radius } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Payment'>;

function makeCode(prefix: string) {
  return `${prefix}-${Date.now().toString(16).toUpperCase()}-${Math.random()
    .toString(16)
    .slice(2, 8)
    .toUpperCase()}`;
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function formatCardNumber(value: string) {
  const digits = onlyDigits(value).slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value: string) {
  const digits = onlyDigits(value).slice(0, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function isValidExpiry(value: string) {
  const clean = value.trim();
  const match = clean.match(/^(\d{2})\/(\d{2})$/);

  if (!match) return false;

  const month = Number(match[1]);
  const year = Number(`20${match[2]}`);

  if (month < 1 || month > 12) return false;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear) return false;
  if (year === currentYear && month <= currentMonth) return false;

  return true;
}

function maskCard(value: string) {
  const digits = onlyDigits(value);
  if (digits.length !== 16) return '';
  return `**** **** **** ${digits.slice(-4)}`;
}

export default function PaymentScreen({ route, navigation }: Props) {
  const { flight, selectedClass, passenger, seatNumber } = route.params;
  const { user, addReservation, refreshReservations } = useApp();

  const [method, setMethod] = useState('VISA');
  const [cardName, setCardName] = useState(`${passenger.firstName} ${passenger.lastName}`.toUpperCase());
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);

  const total = useMemo(() => getPrice(selectedClass.basePrice || 250), [selectedClass]);
  const subtotal = useMemo(() => Number((total / 1.15).toFixed(2)), [total]);
  const tax = useMemo(() => Number((total - subtotal).toFixed(2)), [total, subtotal]);

  function validatePayment() {
    if (method === 'PAYPAL') {
      return true;
    }

    const cleanName = cardName.trim();
    const cleanCard = onlyDigits(cardNumber);
    const cleanCvv = onlyDigits(cvv);

    if (cleanName.length < 5 || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(cleanName)) {
      Alert.alert('Nombre inválido', 'Ingresa el nombre y apellido del titular.');
      return false;
    }

    if (!/^\d{16}$/.test(cleanCard)) {
      Alert.alert('Tarjeta inválida', 'El número de tarjeta debe tener exactamente 16 dígitos.');
      return false;
    }

    if (!isValidExpiry(expiry)) {
      Alert.alert('Vencimiento inválido', 'Usa formato MM/AA. Ejemplo: 03/30.');
      return false;
    }

    if (!/^\d{3}$/.test(cleanCvv)) {
      Alert.alert('CVV inválido', 'El CVV debe tener exactamente 3 números.');
      return false;
    }

    return true;
  }

  async function handlePay() {
    if (!user) {
      Alert.alert('Sesión requerida', 'Inicia sesión nuevamente.');
      navigation.navigate('Login');
      return;
    }

    if (!validatePayment()) {
      return;
    }

    const flightClassId =
      selectedClass.flightClassId ??
      selectedClass.id ??
      getFlightClasses(flight)[0]?.flightClassId ??
      '';

    if (!flightClassId) {
      Alert.alert('Clase inválida', 'No se encontró flightClassId.');
      return;
    }

    try {
      setLoading(true);

      const apiReservation = await createReservation({
        userId: user.id,
        flightClassId: String(flightClassId),
        passenger,
        seatNumber,
      });

      const reservationId = String(
        apiReservation?.id ??
          apiReservation?.reservationId ??
          apiReservation?.reservation?.id ??
          `mobile-${Date.now()}`
      );

      const reservationCode = String(
        apiReservation?.reservationCode ??
          apiReservation?.code ??
          apiReservation?.reservation?.reservationCode ??
          makeCode('AW')
      );

            const transactionId = makeCode('TXN');

      const payment = await createPayment({
        reservationId,
        amount: total,
        provider: method,
        transactionId,
        token: user.token,
      });

      const paymentId = String(payment?.id ?? payment?.paymentId ?? '');
      const invoice = paymentId
        ? await waitInvoiceByPayment({
            paymentId,
            token: user.token,
          })
        : null;

      const stored: StoredReservation = {
        id: reservationId,
        reservationCode,
        status: 'CONFIRMED',
        flight: {
          ...flight,
          flightId: getFlightId(flight),
        },
        selectedClass,
        passenger,
        seatNumber,
        totalAmount: total,
        invoiceNumber: String(invoice?.invoiceNumber ?? 'Factura en proceso'),
        paymentMethod: method === 'PAYPAL' ? 'PAYPAL SIMULADO' : `${method} ${maskCard(cardNumber)}`,
        createdAt: new Date().toISOString(),
      };

      addReservation(stored);
      refreshReservations().catch(() => {});

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Success',
            params: {
              reservationId: stored.id,
            },
          },
        ],
      });
    } catch (err) {
      Alert.alert(
        'No se pudo confirmar',
        err instanceof Error ? err.message : 'Error al crear la reserva.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Pago"
        showBack
        onBack={() => navigation.goBack()}
        onHome={() => navigation.navigate('HomeSearch')}
        onTrips={() => navigation.navigate('Trips')}
        onLogin={() => navigation.navigate('Login')}
        onRegister={() => navigation.navigate('Register')}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          <View style={styles.steps}>
            <Text style={styles.done}>OK Pasajeros</Text>
            <Text style={styles.done}>OK Asientos</Text>
            <Text style={styles.stepActive}>3 Pago</Text>
          </View>

          <Text style={styles.title}>Información de pago</Text>
          <Text style={styles.muted}>Pago simulado. No se realiza ningún débito real.</Text>

          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Resumen de la reserva</Text>

            <View style={styles.summaryRow}>
              <Text style={styles.white}>
                {passenger.firstName} {passenger.lastName} - {passenger.documentNumber}
              </Text>
              <Text style={styles.price}>{seatNumber}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.muted}>Subtotal</Text>
              <Text style={styles.white}>${subtotal}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.muted}>IVA 15%</Text>
              <Text style={styles.white}>${tax}</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.summaryTitle}>Método de pago</Text>

            <View style={styles.methodRow}>
              {['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map((item) => (
                <Pressable
                  key={item}
                  style={[styles.method, method === item && styles.methodActive]}
                  onPress={() => setMethod(item)}
                >
                  <Text style={[styles.methodText, method === item && styles.methodTextActive]}>
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>

            {method !== 'PAYPAL' && (
              <>
                <Text style={styles.label}>Nombre en la tarjeta</Text>
                <TextInput
                  value={cardName}
                  onChangeText={setCardName}
                  autoCapitalize="characters"
                  placeholder="NOMBRE APELLIDO"
                  placeholderTextColor={colors.muted2}
                  style={styles.input}
                />

                <Text style={styles.label}>Número de tarjeta</Text>
                <TextInput
                  value={cardNumber}
                  onChangeText={(value) => setCardNumber(formatCardNumber(value))}
                  keyboardType="number-pad"
                  maxLength={19}
                  placeholder="0000 0000 0000 0000"
                  placeholderTextColor={colors.muted2}
                  style={styles.input}
                />

                <View style={styles.row}>
                  <View style={styles.inputBox}>
                    <Text style={styles.label}>Vencimiento</Text>
                    <TextInput
                      value={expiry}
                      onChangeText={(value) => setExpiry(formatExpiry(value))}
                      keyboardType="number-pad"
                      maxLength={5}
                      placeholder="MM/AA"
                      placeholderTextColor={colors.muted2}
                      style={styles.input}
                    />
                  </View>

                  <View style={styles.inputBox}>
                    <Text style={styles.label}>CVV</Text>
                    <TextInput
                      value={cvv}
                      onChangeText={(value) => setCvv(onlyDigits(value).slice(0, 3))}
                      secureTextEntry
                      keyboardType="number-pad"
                      maxLength={3}
                      placeholder="123"
                      placeholderTextColor={colors.muted2}
                      style={styles.input}
                    />
                  </View>
                </View>
              </>
            )}

            {method === 'PAYPAL' && (
              <View style={styles.paypalBox}>
                <Text style={styles.white}>Pago PayPal simulado</Text>
                <Text style={styles.muted}>Se confirmará la reserva sin conexión bancaria real.</Text>
              </View>
            )}
          </View>

          <AppButton
            title={loading ? 'Confirmando reserva...' : 'Confirmar y pagar'}
            variant="green"
            onPress={handlePay}
            disabled={loading}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1 },
  container: { flex: 1 },
  content: { padding: 20, gap: 18, paddingBottom: 50 },
  steps: { flexDirection: 'row', justifyContent: 'space-between' },
  done: { color: colors.green, fontWeight: '900' },
  stepActive: { color: colors.yellow, fontWeight: '900' },
  title: { color: colors.white, fontSize: 30, fontWeight: '900' },
  muted: { color: colors.muted },
  summary: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 12,
  },
  summaryTitle: { color: colors.white, fontSize: 20, fontWeight: '900' },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  white: { color: colors.white, fontWeight: '800' },
  price: { color: colors.yellow, fontWeight: '900' },
  line: { height: 1, backgroundColor: colors.border },
  totalText: { color: colors.white, fontSize: 20, fontWeight: '900' },
  totalPrice: { color: colors.yellow, fontSize: 22, fontWeight: '900' },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
    gap: 12,
  },
  methodRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  method: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: 13,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  methodActive: {
    backgroundColor: '#fff7ed',
    borderColor: colors.yellow,
  },
  methodText: { color: colors.white, fontWeight: '900' },
  methodTextActive: { color: colors.yellow2 },
  label: { color: colors.muted, fontWeight: '900' },
  input: {
    backgroundColor: colors.input,
    color: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  row: { flexDirection: 'row', gap: 12 },
  inputBox: { flex: 1 },
  paypalBox: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 16,
    gap: 8,
  },
});


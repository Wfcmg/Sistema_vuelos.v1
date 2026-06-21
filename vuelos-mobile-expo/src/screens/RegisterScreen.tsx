import { useEffect, useState } from 'react';
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
import type { RootStackParamList } from '../navigation/AppNavigator';
import { getCities } from '../api/authApi';
import type { City } from '../api/authApi';
import { useApp } from '../context/AppContext';
import { colors, radius } from '../theme';
import AppButton from '../components/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim().toLowerCase());
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

export default function RegisterScreen({ navigation }: Props) {
  const { register } = useApp();

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [firstLastName, setFirstLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mainAddress, setMainAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [cityId, setCityId] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [citiesLoading, setCitiesLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let alive = true;

    async function loadCities() {
      try {
        setCitiesLoading(true);
        const rows = await getCities();

        if (!alive) return;

        setCities(rows);

        const quito = rows.find((city) => city.id === 'city-quito');
        setCityId((quito ?? rows[0])?.id ?? '');
      } catch (err) {
        Alert.alert(
          'Ciudades no disponibles',
          err instanceof Error ? err.message : 'No se pudieron cargar ciudades reales.'
        );
      } finally {
        if (alive) setCitiesLoading(false);
      }
    }

    loadCities();

    return () => {
      alive = false;
    };
  }, []);

  async function handleRegister() {
    const cleanFirstName = firstName.trim();
    const cleanSecondName = secondName.trim();
    const cleanFirstLastName = firstLastName.trim();
    const cleanSecondLastName = secondLastName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanAddress = mainAddress.trim();
    const cleanPhone = onlyDigits(phone);
    const cleanPassword = password.trim();
    const cleanConfirm = confirmPassword.trim();

    if (!cleanFirstName || !cleanFirstLastName || !cleanEmail || !cleanAddress || !cityId || !cleanPassword) {
      Alert.alert('Datos incompletos', 'Completa nombre, primer apellido, correo, dirección, ciudad y contraseña.');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      Alert.alert('Correo inválido', 'Ingresa un correo válido.');
      return;
    }

    if (cleanPhone && cleanPhone.length < 7) {
      Alert.alert('Teléfono inválido', 'El teléfono debe tener al menos 7 números.');
      return;
    }

    if (cleanPassword.length < 8) {
      Alert.alert('Contraseña insegura', 'La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (cleanPassword !== cleanConfirm) {
      Alert.alert('Contraseñas distintas', 'La contraseña y la confirmación deben coincidir.');
      return;
    }

    try {
      setLoading(true);

      await register({
        firstName: cleanFirstName,
        secondName: cleanSecondName || undefined,
        firstLastName: cleanFirstLastName,
        secondLastName: cleanSecondLastName || undefined,
        email: cleanEmail,
        mainAddress: cleanAddress,
        phone: cleanPhone || undefined,
        cityId,
        password: cleanPassword,
      });

      Alert.alert('Cuenta creada', 'Usuario registrado correctamente en el backend real.');

      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeSearch' }],
      });
    } catch (err) {
      Alert.alert(
        'Registro rechazado',
        err instanceof Error ? err.message : 'No se pudo registrar en el backend.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.kicker}>Crear cuenta</Text>
        <Text style={styles.title}>Regístrate en AeroWilly</Text>
        <Text style={styles.desc}>
          Crea un usuario real. La ciudad se carga desde el backend y se envía como cityId.
        </Text>

        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Nombre *</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="William"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Segundo nombre</Text>
            <TextInput
              value={secondName}
              onChangeText={setSecondName}
              placeholder="Francisco"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Primer apellido *</Text>
            <TextInput
              value={firstLastName}
              onChangeText={setFirstLastName}
              placeholder="Carrion"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Segundo apellido</Text>
            <TextInput
              value={secondLastName}
              onChangeText={setSecondLastName}
              placeholder="Test"
              placeholderTextColor={colors.muted2}
              style={styles.input}
            />
          </View>
        </View>

        <Text style={styles.label}>Correo *</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="correo@demo.com"
          placeholderTextColor={colors.muted2}
          style={styles.input}
        />

        <Text style={styles.label}>Dirección *</Text>
        <TextInput
          value={mainAddress}
          onChangeText={setMainAddress}
          placeholder="Av. Principal y Calle 10"
          placeholderTextColor={colors.muted2}
          style={styles.input}
        />

        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          value={phone}
          onChangeText={(value) => setPhone(onlyDigits(value).slice(0, 10))}
          keyboardType="phone-pad"
          placeholder="0999999999"
          placeholderTextColor={colors.muted2}
          style={styles.input}
        />

        <View style={styles.cityCard}>
          <Text style={styles.label}>Ciudad *</Text>
          <Text style={styles.cityHint}>
            {citiesLoading ? 'Cargando ciudades reales...' : 'Selecciona una ciudad del backend.'}
          </Text>

          <View style={styles.cityGrid}>
            {cities.map((city) => {
              const active = city.id === cityId;

              return (
                <Pressable
                  key={city.id}
                  style={[styles.cityOption, active && styles.cityOptionActive]}
                  onPress={() => setCityId(city.id)}
                >
                  <Text style={[styles.cityName, active && styles.cityNameActive]}>
                    {city.name}
                  </Text>
                  <Text style={[styles.cityMeta, active && styles.cityNameActive]}>
                    {city.iataCode ?? city.country?.isoCode ?? city.id}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Text style={styles.label}>Contraseña *</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Mínimo 8 caracteres"
          placeholderTextColor={colors.muted2}
          style={styles.input}
        />

        <Text style={styles.label}>Confirmar contraseña *</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Repite la contraseña"
          placeholderTextColor={colors.muted2}
          style={styles.input}
        />

        <AppButton
          title={loading ? 'Registrando...' : 'Crear cuenta y entrar'}
          onPress={handleRegister}
          disabled={loading || citiesLoading}
        />

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Ya tengo cuenta</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('HomeSearch')}>
          <Text style={styles.secondaryLink}>Volver a la página principal</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 24, paddingTop: 70, gap: 14, paddingBottom: 60 },
  kicker: { color: colors.yellow, fontWeight: '900', letterSpacing: 4, textTransform: 'uppercase' },
  title: { color: colors.white, fontSize: 34, fontWeight: '900' },
  desc: { color: colors.muted, fontSize: 15, lineHeight: 23, marginBottom: 8 },
  label: { color: colors.muted, fontWeight: '800' },
  row: { flexDirection: 'row', gap: 10 },
  inputBox: { flex: 1 },
  input: {
    backgroundColor: colors.input,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: colors.white,
    fontSize: 16,
  },
  cityCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 14,
    gap: 10,
  },
  cityHint: { color: colors.muted, fontSize: 13 },
  cityGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  cityOption: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.input,
    borderRadius: radius.md,
    paddingVertical: 10,
    paddingHorizontal: 12,
    minWidth: 105,
  },
  cityOptionActive: {
    borderColor: colors.yellow,
    backgroundColor: '#fff7ed',
  },
  cityName: { color: colors.white, fontWeight: '900' },
  cityMeta: { color: colors.muted, fontSize: 12, fontWeight: '800' },
  cityNameActive: { color: colors.yellow2 },
  link: {
    color: colors.yellow,
    textAlign: 'center',
    fontWeight: '900',
    paddingTop: 8,
  },
  secondaryLink: {
    color: colors.muted,
    textAlign: 'center',
    fontWeight: '800',
  },
});

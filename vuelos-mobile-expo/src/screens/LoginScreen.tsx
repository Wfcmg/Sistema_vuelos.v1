import { useState } from 'react';
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
import { useApp } from '../context/AppContext';
import { colors, radius, shadow } from '../theme';
import AppButton from '../components/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { login } = useApp();
  const [email, setEmail] = useState('william.test@demo.com');
  const [password, setPassword] = useState('Test12345');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Datos incompletos', 'Ingresa correo y contraseña.');
      return;
    }

    try {
      setLoading(true);
      await login(email, password);

      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeSearch' }],
      });
    } catch (err) {
      Alert.alert(
        'Login rechazado',
        err instanceof Error
          ? err.message
          : 'Credenciales incorrectas o backend no disponible.'
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
        <View style={styles.logoBox}>
          <Text style={styles.logo}>✈</Text>
        </View>

        <Text style={styles.brand}>AeroWilly</Text>
        <Text style={styles.sub}>PREMIUM FLIGHTS</Text>

        <View style={styles.hero}>
          <Text style={styles.kicker}>Bienvenido</Text>
          <Text style={styles.title}>Inicia sesión para reservar tu vuelo</Text>
          <Text style={styles.desc}>
            Ingresa con un usuario real del backend. Ya no se permite entrar con datos inventados.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="correo@demo.com"
            placeholderTextColor={colors.muted2}
            style={styles.input}
          />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Contraseña"
            placeholderTextColor={colors.muted2}
            style={styles.input}
          />

          <AppButton
            title={loading ? 'Validando...' : 'Iniciar sesión'}
            onPress={handleLogin}
            disabled={loading}
          />

          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Crear cuenta nueva</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('HomeSearch')}>
            <Text style={styles.secondaryLink}>Volver a la página principal</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 24, paddingTop: 80, gap: 18 },
  logoBox: {
    width: 70,
    height: 70,
    borderRadius: radius.lg,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  logo: { color: colors.white, fontSize: 32, fontWeight: '900' },
  brand: { color: colors.white, fontSize: 42, fontWeight: '900' },
  sub: { color: colors.muted, letterSpacing: 5, fontWeight: '900' },
  hero: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 22,
    gap: 10,
  },
  kicker: { color: colors.yellow, fontWeight: '900', letterSpacing: 4, textTransform: 'uppercase' },
  title: { color: colors.white, fontSize: 30, fontWeight: '900' },
  desc: { color: colors.muted, fontSize: 16, lineHeight: 25 },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 20,
    gap: 12,
  },
  label: { color: colors.muted, fontWeight: '800' },
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

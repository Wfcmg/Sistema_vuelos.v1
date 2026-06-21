import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow } from '../theme';
import { useApp } from '../context/AppContext';

type Props = {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  onTrips?: () => void;
  onHome?: () => void;
  onLogin?: () => void;
  onRegister?: () => void;
};

export default function AppHeader({
  title = 'AeroWilly',
  showBack = false,
  onBack,
  onTrips,
  onHome,
  onLogin,
  onRegister,
}: Props) {
  const { user, logout } = useApp();

  return (
    <View style={styles.wrap}>
      <View style={styles.left}>
        {showBack ? (
          <Pressable style={styles.backBtn} onPress={onBack}>
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.logoBox} onPress={onHome}>
            <Text style={styles.logoIcon}>✈</Text>
          </Pressable>
        )}

        <View>
          <Text style={styles.brand}>{title}</Text>
          <Text style={styles.sub}>PREMIUM FLIGHTS</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Pressable style={styles.navBtn} onPress={onHome}>
          <Text style={styles.navText}>Buscar</Text>
        </Pressable>

        {user ? (
          <>
            <Pressable style={styles.navBtn} onPress={onTrips}>
              <Text style={styles.navText}>Mis viajes</Text>
            </Pressable>

            <View style={styles.userPill}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{user.name.slice(0, 1).toUpperCase()}</Text>
              </View>
              <View>
                <Text style={styles.userName}>{user.name.split(' ')[0]}</Text>
                <Text style={styles.online}>CONECTADO</Text>
              </View>
            </View>

            <Pressable onPress={logout}>
              <Text style={styles.exit}>Salir</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Pressable style={styles.navBtn} onPress={onLogin}>
              <Text style={styles.navText}>Iniciar sesión</Text>
            </Pressable>

            <Pressable style={styles.registerBtn} onPress={onRegister}>
              <Text style={styles.registerText}>Registrarse</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 18,
    backgroundColor: colors.dark,
    borderBottomWidth: 1,
    borderBottomColor: '#161b2a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoBox: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  logoIcon: { color: colors.white, fontSize: 24, fontWeight: '900' },
  backBtn: {
    minWidth: 54,
    height: 42,
    borderRadius: radius.xl,
    backgroundColor: '#151515',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  backText: { color: colors.white, fontSize: 34, lineHeight: 36 },
  brand: { color: colors.white, fontSize: 22, fontWeight: '900' },
  sub: { color: colors.muted, fontSize: 11, letterSpacing: 3, fontWeight: '800' },
  right: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  navBtn: { paddingHorizontal: 10, paddingVertical: 8 },
  navText: { color: colors.white, fontWeight: '800' },
  registerBtn: {
    backgroundColor: colors.yellow,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  registerText: { color: colors.white, fontWeight: '900' },
  userPill: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: 999,
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: colors.white, fontWeight: '900' },
  userName: { color: colors.white, fontSize: 12, fontWeight: '900' },
  online: { color: colors.muted, fontSize: 9, fontWeight: '800' },
  exit: { color: colors.muted, fontWeight: '800' },
});

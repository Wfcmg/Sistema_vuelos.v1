import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius } from '../theme';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'yellow' | 'red' | 'green' | 'dark';
  disabled?: boolean;
};

export default function AppButton({
  title,
  onPress,
  variant = 'yellow',
  disabled = false,
}: Props) {
  return (
    <Pressable
      style={[
        styles.btn,
        variant === 'red' && styles.red,
        variant === 'green' && styles.green,
        variant === 'dark' && styles.dark,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.yellow,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    backgroundColor: colors.red,
  },
  green: {
    backgroundColor: colors.green,
  },
  dark: {
    backgroundColor: colors.card2,
  },
  disabled: {
    opacity: 0.45,
  },
  text: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 16,
  },
});

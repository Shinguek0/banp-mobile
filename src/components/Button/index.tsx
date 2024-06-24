import { theme } from '@/styles/theme';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Back } from './Back';

type ButtonProps = {
  type?: 'primary' | 'error' | 'custom';
  circle?: boolean;
} & TouchableOpacity['props'];

export const Button = ({ children, type = 'primary', circle = false, ...rest }: ButtonProps) => {
  const style = type === 'custom' ? [styles.button, rest.style] : [styles.button, styles[type]];

  return (
    <TouchableOpacity
      {...rest}
      style={style}
    >
      {type === 'custom' ? children : <Text style={styles.text}>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rounded: {
    borderRadius: 100
  },
  primary: {
    backgroundColor: theme.colors.primary[300]
  },
  error: {
    backgroundColor: theme.colors.functional.error.main
  },
  success: {
    backgroundColor: theme.colors.functional.success.main
  },
  text: {
    color: theme.colors.neutral[100],
    fontWeight: 'bold',
    fontSize: 14
  }
});

Button.Back = Back;

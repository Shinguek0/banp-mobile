import { theme } from '@/styles/theme';
import { Feather } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';

type TextInputProps = {
  icon?: string;
} & NativeTextInput['props'];

export const TextInput = forwardRef<NativeTextInput, TextInputProps>(({ icon, children, ...rest }, ref) => {
  return (
    <View style={[styles.container, rest.style]}>
      <NativeTextInput
        {...rest}
        placeholderTextColor={theme.colors.neutral[300]}
        ref={ref}
        style={styles.input}
      >
        {children}
      </NativeTextInput>
      {icon && (
        <Feather
          name={icon as any}
          size={20}
          color={theme.colors.neutral[100]}
          style={styles.icon}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.neutral[500]
  },
  icon: {
    color: theme.colors.neutral[400],
    paddingLeft: 16
  },
  input: {
    flex: 1,
    color: theme.colors.neutral[100]
  }
});

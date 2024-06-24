import { Button } from '@/components/Button';
import { theme } from '@/styles/theme';
import { Link, router } from 'expo-router';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, type TextInput } from 'react-native';

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '@/assets/logo.svg';
import { Input } from '@/components/Input';
import { AntDesign } from '@expo/vector-icons';

const SignIn = () => {
  const insets = useSafeAreaInsets();

  const passwordRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.backButton,
          {
            top: insets.top + 24,
            left: insets.left + 16
          }
        ]}
      >
        <Button.Back onPress={router.back} />
      </View>
      <View style={styles.header}>
        <Logo
          width={42}
          height={42}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please sign in with your credentials</Text>
      </View>
      <View style={styles.centerInfo}>
        <View style={styles.form}>
          <Input.Text
            placeholder="Email"
            icon="at-sign"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />
          <Input.Text
            placeholder="Password"
            icon="lock"
            secureTextEntry={true}
            autoCorrect={false}
            returnKeyType="done"
            ref={passwordRef}
          />
          <Button
            onPress={() => {}} // Add sign in logic
          >
            Sign in
          </Button>
        </View>
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>
        <View>
          <Button
            type="custom"
            style={styles.googleButton}
            onPress={() => {}} // Add Google sign in logic
          >
            <AntDesign
              name="google"
              size={24}
              color={theme.colors.neutral[100]}
            />
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </Button>
        </View>
      </View>
      <View>
        <Text style={styles.signUp}>
          Don’t have an account?{' '}
          <Link
            href="/signUp"
            style={styles.link}
          >
            Sign up
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    padding: 24,
    backgroundColor: theme.colors.neutral[600],
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32
  },
  backButton: {
    position: 'absolute'
  },
  header: {
    alignItems: 'center',
    gap: 12
  },
  logo: {
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.neutral[100]
  },
  subtitle: {
    color: theme.colors.neutral[200],
    textAlign: 'center'
  },
  centerInfo: {
    justifyContent: 'center',
    width: '90%',
    gap: 32
  },
  form: {
    gap: 16
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.neutral[400]
  },
  dividerText: {
    color: theme.colors.neutral[400]
  },
  googleButton: {
    backgroundColor: '#EA4335',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  googleButtonText: {
    color: theme.colors.neutral[100],
    fontWeight: 'bold'
  },
  signUp: {
    color: theme.colors.neutral[100]
  },
  link: {
    color: theme.colors.primary[300],
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }
});

export default SignIn;

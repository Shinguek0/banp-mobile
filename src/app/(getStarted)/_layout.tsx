import { useAuth } from '@/hooks/useAuth';
import { Redirect, Stack } from 'expo-router';

const RootLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/home" />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="signIn"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default RootLayout;

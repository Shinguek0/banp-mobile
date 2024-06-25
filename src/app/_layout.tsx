import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(getStarted)" />
        <Stack.Screen name="(setup)" />
        <Stack.Screen name="(banp)" />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;

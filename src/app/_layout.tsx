import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(getStarted)"
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="(banp)"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;

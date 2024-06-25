import { Stack } from 'expo-router';

const RootLayout = () => {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Redirect href="/signIn" />;
  // }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;

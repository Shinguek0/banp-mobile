import { Tabs } from 'expo-router';

const RootLayout = () => {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Redirect href="/signIn" />;
  // }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="setup"
        options={{ href: null }}
      />
    </Tabs>
  );
};

export default RootLayout;

import { useAuth } from '@/hooks/useAuth';
import { theme } from '@/styles/theme';
import { Feather } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';

const RootLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/signIn" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary[300],
        tabBarStyle: {
          backgroundColor: theme.colors.neutral[500],
          borderTopColor: theme.colors.neutral[400],
          height: 64
        },
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name="home"
              size={24}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default RootLayout;

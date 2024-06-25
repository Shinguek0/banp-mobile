import { Redirect, Tabs } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';

const RootLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/signIn" />;
  }

  return <Tabs />;
};

export default RootLayout;

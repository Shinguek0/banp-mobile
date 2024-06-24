import { Redirect, Tabs } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';

const RootLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/signIn" />;
  }

  return <Tabs />;
};

export default RootLayout;

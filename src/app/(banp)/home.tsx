import { theme } from '@/styles/theme';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[600],
    paddingVertical: 64,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32
  }
});

export default Home;

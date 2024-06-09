import { Stack } from 'expo-router';

const RootLayout = () => {
    return <Stack>
        <Stack.Screen 
            name="index"
            options={{
                headerTitle: 'Banp!',
            }}
        />
        <Stack.Screen 
            name="test/(tabs)/routing"
            options={{
                headerTitle: 'Home',
            }}
        />
        <Stack.Screen 
            name="test/(tabs)/users/[id]"
            options={{
                headerTitle: 'User',
            }}
        />            
    </Stack>;
};

export default RootLayout;
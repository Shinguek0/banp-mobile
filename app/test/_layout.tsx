import { Stack } from 'expo-router';

const RootLayout = () => {
    return <Stack>
        <Stack.Screen 
            name="(tabs)"
            options={{
                headerTitle: 'Home',
                headerShown: false, // Header da naveção de tabs
            }}
        />           
    </Stack>;
};

export default RootLayout;
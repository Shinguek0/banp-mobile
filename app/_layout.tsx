import { Stack } from 'expo-router';

const RootLayout = () => {
    return <Stack>
        <Stack.Screen 
            name="(getStarted)"
            options={{
                headerTitle: 'AppLayout',
                headerShown: false, // Header Apenas da Pagina principal
            }}
        />  

        <Stack.Screen 
            name="banp"
            options={{
                headerTitle: 'Banp',
                headerShown: false, // Header Apenas da Pagina principal
            }}
        />             
    </Stack>;
};

export default RootLayout;
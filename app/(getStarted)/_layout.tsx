import { Stack } from 'expo-router';

const RootLayout = () => {
    return <Stack>
        <Stack.Screen 
            name="index"
            options={{
                headerTitle: 'GetStartedLayout1',
                headerShown: false, // Header Apenas da Pagina principal
            }}
        />        
        <Stack.Screen 
            name="signUp"
            options={{
                headerTitle: 'GetStartedLayout2',
                //headerShown: false, // Header Apenas da Pagina principal
            }}
        /> 
        <Stack.Screen 
            name="signIn"
            options={{
                headerTitle: 'GetStartedLayout3',
                //headerShown: false, // Header Apenas da Pagina principal
            }}
        />   
    </Stack>;
};

export default RootLayout;
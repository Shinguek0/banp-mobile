import { Tabs } from 'expo-router';

const RootLayout = () => {
    return <Tabs>
    <Tabs.Screen 
        name="home" 
        options={{
            headerTitle: 'Home1',     
            title: 'Home1',
            headerShown: false,
        }}/>
    <Tabs.Screen 
        name="home2" 
        options={{
            headerTitle: 'home2',
            title: 'home2',
            headerShown: false,
        }}/>
</Tabs>;
};

export default RootLayout;
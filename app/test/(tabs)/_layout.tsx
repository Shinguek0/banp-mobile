import { Tabs } from 'expo-router';

const TabsLayout = () => {
    return <Tabs>
        <Tabs.Screen 
            name="routing" 
            options={{
                headerTitle: 'Routing',     
                title: 'Routing'       
            }}/>
        <Tabs.Screen 
            name="users/[id]" 
            options={{
                headerTitle: 'User',
                title: 'User'
            }}/>
    </Tabs>;
};

export default TabsLayout;
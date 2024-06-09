import React from 'react';
import { Link, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

const Routing = () => {
    return (
        <View>
            <Text>Pagina para teste de navegação com react router</Text>

            <Link href="/test/users/1"><Text>User 1</Text></Link>

            <Pressable onPress={() => router.push('/test/users/2')}>
                <Text>User 2</Text>
            </Pressable>

            <Pressable>
                <Link href="/test/users/3"><Text>User 3</Text></Link>
            </Pressable>

            <Pressable onPress={() => 
                router.push({
                    pathname: '/test/users/[id]',
                    params: { id: '4' }
                })
            }>
                <Text>User 4</Text>
            </Pressable>
        </View>
    );
};

export default Routing;
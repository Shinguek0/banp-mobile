import { useLocalSearchParams, Link } from 'expo-router';
import { View, Text } from 'react-native';

const UserPage = () => {
    //const { id } = useLocalSearchParams();
    // or with type
    const { id } = useLocalSearchParams<{id: string}>();

    return (
        <View>
            <Text>Users - {id}</Text>
            <Link href="/test/routing"><Text>Voltar</Text></Link>
        </View>
    );
};

export default UserPage;
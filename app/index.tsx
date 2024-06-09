import React from 'react';
import { router } from 'expo-router';
import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

interface Props {
  // Add any props you might need here
}

const App: React.FC<Props> = ({}) => {
  const imageName: string = require('../assets/img/img1.png'); // Replace with your image path

  return (
    <ImageBackground source={imageName} style={styles.container} resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.title}>Banp!</Text>
        <Text style={styles.subTitle}>Best place to find your duo or team.</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/test/routing')}><Text>Get Started</Text></TouchableOpacity>        
        <Text style={styles.smallText}>Already have an account? Sign in</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Set the width to the width of the screen
    height: '100%', // Set the height to the height of the screen
    justifyContent: 'flex-end', // Move content to the bottom    
  },
  content: {
    alignItems: 'center', // Center elements horizontally
    paddingBottom: 20, // Add bottom padding
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    paddingHorizontal: 80,
    paddingVertical: 12,
    color: "white",
    backgroundColor: "#673AB7",
    borderRadius: 8,    
  },
  smallText: {
    fontSize: 12,
    marginTop: 10,
    color: 'white',
  },
});

export default App;

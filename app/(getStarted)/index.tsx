import React from 'react';
import { Link, router } from 'expo-router';
import { ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

interface Props {
  // Add any props you might need here
}

const GetStarted: React.FC<Props> = ({}) => {
  const imageName: string = require('../../assets/img/img1.png'); // Replace with your image path
  const banpLogo: string = require('../../src/assets/images/banp_logo.png');

  return (
    <ImageBackground source={imageName} style={styles.container} resizeMode="cover">
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Image source={banpLogo}/>     
          <Text style={styles.title}>Banp!</Text>
        </View>
        <Text style={styles.subTitle}>Best place to find your duo or team.</Text>
        {/* Vai para o teste de rotas
        <TouchableOpacity style={styles.button} onPress={() =>
             router.push('/test/(tabs)/routing')}>
                <Text>Get Started</Text>
        </TouchableOpacity>
        */}   
        <TouchableOpacity style={styles.button} onPress={() =>
             router.push('/signUp')}>
                <Text>Get Started</Text>
        </TouchableOpacity> 
        <Link href={"/signIn"} style={styles.smallText}><Text>Already have an account? Sign in</Text></Link>
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
  titleContainer: {
    flexDirection: 'row', // Align elements horizontally    
    paddingBottom: 20, // Add bottom padding    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10, // Add horizontal padding
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 13,
    color: 'white',
  },
  button: {
    paddingHorizontal: 80,
    paddingVertical: 12,
    margin: 10,
    marginBottom: 20,
    color: "white",
    backgroundColor: "#673AB7",
    borderRadius: 8,  
    alignItems: 'center',  
  },
  smallText: {
    fontSize: 16,
    marginBottom: 20,    
    color: 'white',
  },
});

export default GetStarted;

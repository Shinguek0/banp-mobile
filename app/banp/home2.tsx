import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = () => {
    const banpLogo: string = require('../../src/assets/images/pic.png');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>  
        <Image 
            source={banpLogo} // Replace with the actual URL or import the image locally
            style={styles.image}
        />
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>5</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.details}>Male • 26yo • Brazil</Text>
        <Text style={styles.description}>
          Hello! My name is John, I like MOBA and just started playing FPS. Let's play!!!
        </Text>
        <Text style={styles.sectionTitle}>Goal:</Text>
        <Text style={styles.sectionContent}>Meet new people to play together.</Text>
        <Text style={styles.sectionTitle}>Wanting to:</Text>
        <Text style={styles.sectionContent}>Have fun and laugh a lot.</Text>
        <Text style={styles.sectionTitle}>Qualities:</Text>
        <Text style={styles.sectionContent}>Patient, calm, tolerant.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>👎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>👍</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  iconText: {
    fontSize: 16,
    color: '#000',
  },
  profileContainer: {
    marginTop: 20,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  details: {
    fontSize: 18,
    color: '#ccc',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#ddd',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#ccc',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 30,
    padding: 15,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default UserProfile;

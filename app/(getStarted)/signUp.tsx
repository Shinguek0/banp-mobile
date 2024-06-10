import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { CustomInput } from '../../src/components/customInput';

interface Props {
  // Add any props you might need here
}

const SignUp: React.FC<Props> = ({}) => {
  const imageName: string = require('../../assets/img/img1.png'); // Replace with your image path
  const googleIcon: string = require('../../src/assets/images/google_icon.png'); // Replace with your image path (optional)
  const facebookIcon: string = require('../../src/assets/images/facebook_logo.png'); // Replace with your image path (optional)
  const banpLogo: string = require('../../src/assets/images/banp_logo.png');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  return (
    <ImageBackground source={imageName} resizeMode="cover" style={styles.container}>
      <View style={styles.header}>   
        <Image source={banpLogo} style={styles.companyLogo} />     
        <Text style={styles.title}>Create new account</Text>
        <Text style={styles.subTitle}>Get in touch with gamers around you, all for free.</Text>
      </View>
      <View style={styles.form}>
        <CustomInput
            value={username}
            onChangeText={setUsername}
            placeholder="Username"  
            secureTextEntry={false}     
            icon = "person"
            iconSize={24}
            iconColor="#8D8D9B"        
        />
        <CustomInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"  
            secureTextEntry={false}  
            icon = "alternate-email"
            iconSize={24}
            iconColor="#8D8D9B"            
        />
        <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"   
            secureTextEntry
            icon = "lock"
            iconSize={24}
            iconColor="#8D8D9B" 
        />
        <CustomInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"   
            secureTextEntry
            icon = "lock-outline"
            iconSize={24}
            iconColor="#8D8D9B" 
        />
        <TouchableOpacity style={styles.button}>
                <Text>Sign Up</Text>
        </TouchableOpacity>         
        <Text style={styles.loginText}>------- or ------</Text>
      </View>
      <View style={styles.footer}>        
        <TouchableOpacity style={styles.btt1}>
            <Image source={googleIcon} style={styles.bttLogo} />     
        </TouchableOpacity>
        <TouchableOpacity style={styles.btt2}>
            <Image source={facebookIcon} style={styles.bttLogo1} />     
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E6E6E6',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: 'white',
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  textInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 15,
    color: "white",
    backgroundColor: "#673AB7",
    borderRadius: 8,
    alignItems: 'center',
  },
  btt1: {
    paddingVertical: 23,
    paddingHorizontal: 40,    
    marginHorizontal: 20,
    color: "white",
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
  },
  btt2: {
    paddingVertical: 23,
    paddingHorizontal: 40,    
    marginHorizontal: 20,
    color: "white",
    backgroundColor: "#1977F3",
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',    
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 15,
    color: '#5C5C66',
    padding: 10,    
    textAlign: 'center',
  },
  companyLogo: {
    width: 50,
    height: 50,
    margin: 30,
  },
  bttLogo: {
    width: 23,
    height: 23,
  },
  bttLogo1: {
    width: 14,
    height: 23,
  },
});

export default SignUp;
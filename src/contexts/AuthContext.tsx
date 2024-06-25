import { createContext, useState, type ReactNode } from 'react';
import { Alert } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential
} from 'firebase/auth';

import { getAuth } from '@/services/firebase';

import { defaultErrorMessage } from '@/utils/firebaseHelpers';
import { FirebaseError } from 'firebase/app';

type AuthContextProps = {
  user: User;
  isAuthenticated: boolean;
  handleSignInWithEmail: (credentials: EmailCredentials) => Promise<UserCredential | undefined>;
  handleSignUpWithEmail: (credentials: EmailCredentials) => Promise<UserCredential | undefined>;
  // handleSignWithGoogle: () => void;
  handleSignOut: () => void;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthProviderProps = {
  children: ReactNode;
};

type EmailCredentials = {
  email: string;
  password: string;
};

const auth = getAuth();

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // const [_, response, promptAsync] = Google.useAuthRequest({
  //   clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
  //   redirectUri: AuthSession.makeRedirectUri({ scheme: 'banp-mobile' }),
  //   scopes: ['profile', 'email']
  // });
  const [user, setUser] = useState<User>({} as User);

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;
  //     const credential = GoogleAuthProvider.credential(id_token);

  //     signInWithCredential(auth, credential).then((userCredential) => {
  //       setUser(userCredential.user);
  //     });
  //   }
  // }, [response]);

  const handleSignInWithEmail = async ({ email, password }: EmailCredentials) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user);

      Alert.alert('Sucesso', 'Usuário logado com sucesso!');

      return response;
    } catch (error) {
      if (error instanceof FirebaseError) {
        Alert.alert(defaultErrorMessage(error.code), error.message);
      }
    }
  };

  const handleSignUpWithEmail = async ({ email, password }: EmailCredentials) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setUser(response.user);

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');

      return response;
    } catch (error) {
      if (error instanceof FirebaseError) {
        Alert.alert(defaultErrorMessage(error.code), error.message);
      }
    }
  };

  // const handleSignWithGoogle = async () => {
  //   promptAsync();
  // };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const isAuthenticated = !!user.uid;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleSignInWithEmail,
        handleSignUpWithEmail,
        // handleSignWithGoogle,
        handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

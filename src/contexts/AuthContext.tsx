import { createContext, useState, type ReactNode } from 'react';
import { Alert } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';

import { getAuth } from '@/services/firebase';

import { api } from '@/services/axios';
import { defaultErrorMessage } from '@/utils/firebaseHelpers';
import { FirebaseError } from 'firebase/app';

type ApiUserConfirmation = { have_account: boolean };

type AuthContextProps = {
  user: User;
  isAuthenticated: boolean;
  handleSignInWithEmail: (credentials: EmailCredentials) => Promise<ApiUserConfirmation | undefined>;
  handleSignUpWithEmail: (credentials: EmailCredentials) => Promise<ApiUserConfirmation | undefined>;
  // handleSignWithGoogle: () => void;
  handleCompleteProfile: (profile: Profile) => Promise<void>;
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

type Profile = {
  name: string;
  discord: string;
  email: string;
  password: string;
  birth_date: string;
  games: { game_id: number }[];
  questions: { answer_id: number }[];
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
    if (!email || !password) return Alert.alert('Error', 'Please fill in all fields.');

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response.user);

      const { data } = await api.get(`/user/signup/${response.user.uid}`);

      return data;
    } catch (error) {
      if (error instanceof FirebaseError) {
        Alert.alert(defaultErrorMessage(error.code), error.message);
      }
    }
  };

  const handleSignUpWithEmail = async ({ email, password }: EmailCredentials) => {
    if (!email || !password) return Alert.alert('Error', 'Please fill in all fields.');

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      const { data } = await api.post('/user/signup', { firebase_id: response.user.uid });
      setUser(response.user);

      Alert.alert('Success', `Welcome ${response.user.displayName}!`);

      return data;
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

  const handleCompleteProfile = async (profile: Profile) => {
    const firebaseId = user.uid;

    try {
      await api.post(`/user/signup/${firebaseId}`, profile);

      Alert.alert('Success', 'Profile completed successfully!');
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
        handleCompleteProfile,
        handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

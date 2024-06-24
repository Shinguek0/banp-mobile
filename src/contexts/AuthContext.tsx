import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { createContext, useState, type ReactNode } from 'react';

import { getAuth } from '@/services/firebase';

type AuthContextProps = {
  user: User;
  handleSignInWithEmail: (credentials: EmailCredentials) => void;
  handleSignUpWithEmail: (credentials: EmailCredentials) => void;
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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  const handleSignInWithEmail = async ({ email, password }: EmailCredentials) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUpWithEmail = async ({ email, password }: EmailCredentials) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleSignInWithEmail, handleSignUpWithEmail, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

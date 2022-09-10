import { createContext } from 'react';
import { State } from './authReducer';

export type AuthContextProps = State & {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

export default createContext<AuthContextProps>({
  isLoading: false,
  isSigningIn: false,
  isSigningOut: false,
  token: null,
  signIn: async () => undefined,
  signOut: async () => undefined
});

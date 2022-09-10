import { SecureStorage } from '@storage';
import { revokeAsync, TokenTypeHint } from 'expo-auth-session';
import { discovery, useAuthRequest } from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { PropsWithChildren, useEffect, useMemo, useReducer } from 'react';
import AuthContext, { AuthContextProps } from './AuthContext';
import authReducer, { ActionType } from './authReducer';
import config from './config';

WebBrowser.maybeCompleteAuthSession();

export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [, response, promptAsync] = useAuthRequest(config);
  const [state, dispatch] = useReducer(authReducer, {
    isLoading: false,
    isSigningIn: false,
    isSigningOut: false,
    token: null
  });

  useEffect(() => {
    dispatch({ type: ActionType.RESTORING_TOKEN });

    SecureStorage.getItem('token')
      .then((token) => dispatch({ type: ActionType.TOKEN_RESTORED, token }))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token: token } = response.params;

      SecureStorage.setItem('token', token).then(() => {
        dispatch({ type: ActionType.SIGNED_IN, token });
      });
    }
  }, [response]);

  const context = useMemo(
    () =>
      ({
        ...state,

        signIn: async () => {
          dispatch({ type: ActionType.SIGNING_IN });
          promptAsync();
        },

        signOut: async () => {
          dispatch({ type: ActionType.SIGNING_OUT });

          const token = await SecureStorage.getItem('token');
          const config = { token, tokenTypeHint: TokenTypeHint.AccessToken };

          await revokeAsync(config, discovery);
          await SecureStorage.removeItem('token');

          dispatch({ type: ActionType.SIGNED_OUT });
        }
      } as AuthContextProps),
    [state, promptAsync]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

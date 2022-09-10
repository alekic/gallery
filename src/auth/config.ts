import { GoogleAuthRequestConfig, ResponseType } from 'expo-auth-session';

const config: Partial<GoogleAuthRequestConfig> = {
  expoClientId: process.env.EXPO_CLIENT_ID,
  webClientId: process.env.WEB_CLIENT_ID,
  responseType: ResponseType.Token,
  scopes: [
    'openid',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/photoslibrary.readonly'
  ]
};

export default config;

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SecureStore from 'expo-secure-store';
import { deserialize, serialize, valueOrDefault } from './utils';

export default class SecureStorage {
  static async getItem(key: string, defaultValue?: any): Promise<any> {
    const value = await SecureStore.getItemAsync(key);
    return valueOrDefault(deserialize(value), defaultValue);
  }

  static async setItem(key: string, value: any): Promise<void> {
    return SecureStore.setItemAsync(key, serialize(value));
  }

  static async removeItem(key: string): Promise<void> {
    return SecureStore.deleteItemAsync(key);
  }
}

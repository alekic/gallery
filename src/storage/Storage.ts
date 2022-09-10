/* eslint-disable @typescript-eslint/no-explicit-any */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deserialize, serialize, valueOrDefault } from './utils';

export default class Storage {
  static async getItem(key: string, defaultValue?: any): Promise<any> {
    const value = await AsyncStorage.getItem(key);
    return valueOrDefault(deserialize(value), defaultValue);
  }

  static async setItem(key: string, value: any): Promise<void> {
    return AsyncStorage.setItem(key, serialize(value));
  }

  static async removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }
}

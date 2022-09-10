/* eslint-disable @typescript-eslint/no-explicit-any */

export function serialize(value: any) {
  return JSON.stringify(value);
}

export function deserialize(value: string | null) {
  return value === null ? value : JSON.parse(value);
}

export function valueOrDefault(value: any, defaultValue: any) {
  return value === null && defaultValue !== undefined ? defaultValue : value;
}

import { User } from "app/http";

export interface LocalStorageKeys {
  lastLoginUser: User;
  apiKey: string;
}

export const Time = {
  msec500: 500,
  msec1500: 1500,
  msec3000: 3000
};

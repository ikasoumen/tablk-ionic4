import { User } from "./http";

export interface LocalStorageKeys {
  lastLoginUser: User;
  apiKey: string;
}

export enum Pages {
  chat = "chat",
  sessionInfo = "sessionInfo",
  dashBoard = "dashBoard",
  nonSet = "nonSet"
}

export const Time = {
  msec500: 500,
  msec1500: 1500,
  msec3000: 3000
};

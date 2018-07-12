import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import {
  User,
  ApiKeyInput,
  SignupFormInput,
  ApiKeyResponse,
  DefaultService
} from "../../http";
import {
  getFromLocalStrage,
  setToLocalStrage,
  unsetFromLocalStorage
} from "../../helpers/localStorageKey";
import { LocalStorageKeys } from "../../constants";

@Injectable()
export class AuthManager {
  private lastLoginUser: BehaviorSubject<
    User | undefined
  > = new BehaviorSubject<User | undefined>(undefined);

  constructor(private api: DefaultService) {
    this.lastLoginUser.next(
      getFromLocalStrage<LocalStorageKeys, "lastLoginUser">("lastLoginUser")
    );
  }

  // public async login(param: ApiKeyInput) {
  //   const response = await this.api.authApiKeyPost(param).toPromise();
  //   this.setApikeyToLocalStorage(response);
  // }

  public get observablelastLoginUser() {
    return this.lastLoginUser.asObservable();
  }

  public async registration(param: SignupFormInput) {
    const response = await this.api.signupRegistrationPost(param).toPromise();
    this.setApikeyToLocalStorage(response);
  }

  public get userAvatarUrl(): string {
    const user = getFromLocalStrage<LocalStorageKeys, "lastLoginUser">(
      "lastLoginUser"
    );
    if (user == null) {
      return "";
    }
    return user.avatarUrl;
  }

  private setApikeyToLocalStorage(response: ApiKeyResponse) {
    setToLocalStrage<LocalStorageKeys, "apiKey">("apiKey", response.apiKey);
    setToLocalStrage<LocalStorageKeys, "lastLoginUser">(
      "lastLoginUser",
      Object.values(response.users)[0]
    );
  }

  private unsetApikeyFromLocalStorage() {
    unsetFromLocalStorage<LocalStorageKeys>("apiKey");
    unsetFromLocalStorage<LocalStorageKeys>("lastLoginUser");
  }
}

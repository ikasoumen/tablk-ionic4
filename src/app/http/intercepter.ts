import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import {
  changeJSONObject,
  changeJSONObjectType
} from "../helpers/changeJsonObject";
import { LocalStorageKeys } from "../constants";
import { getFromLocalStrage } from "../helpers/localStorageKey";

interface HttpRequestUpdate {
  headers?: HttpHeaders;
  reportProgress?: boolean;
  params?: HttpParams;
  responseType?: "arraybuffer" | "blob" | "json" | "text";
  withCredentials?: boolean;
  body?: any | null;
  method?: string;
  url?: string;
  setHeaders?: {
    [name: string]: string | string[];
  };
  setParams?: {
    [param: string]: string;
  };
}

@Injectable()
export class Interceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler) {
    const config: HttpRequestUpdate = {};

    // body があるときは snake_case に変換する
    const body = request.body;
    if (body) {
      config.body = changeJSONObject(body, changeJSONObjectType.CamelToSnake);
    }

    // API Key があるときは header に追加する
    const apiKey = getFromLocalStrage<LocalStorageKeys, "apiKey">("apiKey");
    if (apiKey) {
      config.setHeaders = { "X-API-KEY": apiKey };
    }

    return next.handle(request.clone(config)).pipe(
      map(response => {
        if (!(response instanceof HttpResponse)) {
          return response;
        }

        return response.clone({
          body: changeJSONObject(
            response.body,
            changeJSONObjectType.SnakeToCamel
          )
        });
      })
    );
  }
}

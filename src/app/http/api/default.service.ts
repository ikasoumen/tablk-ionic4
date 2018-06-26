/**
 * Tablk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent
} from "@angular/common/http";
import { CustomHttpUrlEncodingCodec } from "../encoder";

import { Observable } from "rxjs/Observable";

import { ApiKeyInput } from "../model/apiKeyInput";
import { ApiKeyResponse } from "../model/apiKeyResponse";
import { ErrorResponse } from "../model/errorResponse";
import { GroupCreateInput } from "../model/groupCreateInput";
import { GroupsResponse } from "../model/groupsResponse";
import { MessageCreateInput } from "../model/messageCreateInput";
import { MessagesResponse } from "../model/messagesResponse";
import { SessionCreateInput } from "../model/sessionCreateInput";
import { SessionDeleteInput } from "../model/sessionDeleteInput";
import { SessionsResponse } from "../model/sessionsResponse";
import { SignupFormInput } from "../model/signupFormInput";
import { SignupPostInput } from "../model/signupPostInput";
import { SuccessResponse } from "../model/successResponse";

import { BASE_PATH, COLLECTION_FORMATS } from "../variables";
import { Configuration } from "../configuration";

@Injectable()
export class DefaultService {
  protected basePath = "https://localhost/apiv2";
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional()
    @Inject(BASE_PATH)
    basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = "multipart/form-data";
    for (let consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   * Getting api_key
   * @param apiKeyInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public authApiKeyPost(
    apiKeyInput: ApiKeyInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<ApiKeyResponse>;
  public authApiKeyPost(
    apiKeyInput: ApiKeyInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<ApiKeyResponse>>;
  public authApiKeyPost(
    apiKeyInput: ApiKeyInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<ApiKeyResponse>>;
  public authApiKeyPost(
    apiKeyInput: ApiKeyInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (apiKeyInput === null || apiKeyInput === undefined) {
      throw new Error(
        "Required parameter apiKeyInput was null or undefined when calling authApiKeyPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<ApiKeyResponse>(
      `${this.basePath}/auth/api_key`,
      apiKeyInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * get session
   * @param sessionId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsGroupIdMessagesGet(
    sessionId: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<MessagesResponse>;
  public groupsGroupIdMessagesGet(
    sessionId: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<MessagesResponse>>;
  public groupsGroupIdMessagesGet(
    sessionId: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<MessagesResponse>>;
  public groupsGroupIdMessagesGet(
    sessionId: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (sessionId === null || sessionId === undefined) {
      throw new Error(
        "Required parameter sessionId was null or undefined when calling groupsGroupIdMessagesGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];

    return this.httpClient.get<MessagesResponse>(
      `${this.basePath}/groups/${encodeURIComponent(String(groupId))}/messages`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * create group. 自分が居ないグループの作成は 401 になる。
   * @param groupCreateInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsPost(
    groupCreateInput: GroupCreateInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<GroupsResponse>;
  public groupsPost(
    groupCreateInput: GroupCreateInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<GroupsResponse>>;
  public groupsPost(
    groupCreateInput: GroupCreateInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<GroupsResponse>>;
  public groupsPost(
    groupCreateInput: GroupCreateInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (groupCreateInput === null || groupCreateInput === undefined) {
      throw new Error(
        "Required parameter groupCreateInput was null or undefined when calling groupsPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<GroupsResponse>(
      `${this.basePath}/groups`,
      groupCreateInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * post message
   * @param messageCreateInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public messagesPost(
    messageCreateInput: MessageCreateInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<MessagesResponse>;
  public messagesPost(
    messageCreateInput: MessageCreateInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<MessagesResponse>>;
  public messagesPost(
    messageCreateInput: MessageCreateInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<MessagesResponse>>;
  public messagesPost(
    messageCreateInput: MessageCreateInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (messageCreateInput === null || messageCreateInput === undefined) {
      throw new Error(
        "Required parameter messageCreateInput was null or undefined when calling messagesPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<MessagesResponse>(
      `${this.basePath}/messages`,
      messageCreateInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * get joined sessions
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sessionsGet(
    observe?: "body",
    reportProgress?: boolean
  ): Observable<SessionsResponse>;
  public sessionsGet(
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<SessionsResponse>>;
  public sessionsGet(
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<SessionsResponse>>;
  public sessionsGet(
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];

    return this.httpClient.get<SessionsResponse>(`${this.basePath}/sessions`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   *
   * create session
   * @param sessionCreateInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sessionsPost(
    sessionCreateInput: SessionCreateInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<SessionsResponse>;
  public sessionsPost(
    sessionCreateInput: SessionCreateInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<SessionsResponse>>;
  public sessionsPost(
    sessionCreateInput: SessionCreateInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<SessionsResponse>>;
  public sessionsPost(
    sessionCreateInput: SessionCreateInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (sessionCreateInput === null || sessionCreateInput === undefined) {
      throw new Error(
        "Required parameter sessionCreateInput was null or undefined when calling sessionsPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<SessionsResponse>(
      `${this.basePath}/sessions`,
      sessionCreateInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * delete session
   * @param sessionId
   * @param sessionDeleteInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sessionsSessionIdDelete(
    sessionId: string,
    sessionDeleteInput: SessionDeleteInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<SuccessResponse>;
  public sessionsSessionIdDelete(
    sessionId: string,
    sessionDeleteInput: SessionDeleteInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<SuccessResponse>>;
  public sessionsSessionIdDelete(
    sessionId: string,
    sessionDeleteInput: SessionDeleteInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<SuccessResponse>>;
  public sessionsSessionIdDelete(
    sessionId: string,
    sessionDeleteInput: SessionDeleteInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (sessionId === null || sessionId === undefined) {
      throw new Error(
        "Required parameter sessionId was null or undefined when calling sessionsSessionIdDelete."
      );
    }
    if (sessionDeleteInput === null || sessionDeleteInput === undefined) {
      throw new Error(
        "Required parameter sessionDeleteInput was null or undefined when calling sessionsSessionIdDelete."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.delete<SuccessResponse>(
      `${this.basePath}/sessions/${encodeURIComponent(String(sessionId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * get session
   * @param sessionId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sessionsSessionIdGet(
    sessionId: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<SessionsResponse>;
  public sessionsSessionIdGet(
    sessionId: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<SessionsResponse>>;
  public sessionsSessionIdGet(
    sessionId: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<SessionsResponse>>;
  public sessionsSessionIdGet(
    sessionId: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (sessionId === null || sessionId === undefined) {
      throw new Error(
        "Required parameter sessionId was null or undefined when calling sessionsSessionIdGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];

    return this.httpClient.get<SessionsResponse>(
      `${this.basePath}/sessions/${encodeURIComponent(String(sessionId))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * get joined groups
   * @param sessionId
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sessionsSessionIdGroupsGet(
    sessionId: string,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<GroupsResponse>;
  public sessionsSessionIdGroupsGet(
    sessionId: string,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<GroupsResponse>>;
  public sessionsSessionIdGroupsGet(
    sessionId: string,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<GroupsResponse>>;
  public sessionsSessionIdGroupsGet(
    sessionId: string,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (sessionId === null || sessionId === undefined) {
      throw new Error(
        "Required parameter sessionId was null or undefined when calling sessionsSessionIdGroupsGet."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];

    return this.httpClient.get<GroupsResponse>(
      `${this.basePath}/sessions/${encodeURIComponent(
        String(sessionId)
      )}/groups`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * update session
   * @param sessionId
   * @param sessionCreateInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sessionsSessionIdPatch(
    sessionId: string,
    sessionCreateInput: SessionCreateInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<SessionsResponse>;
  public sessionsSessionIdPatch(
    sessionId: string,
    sessionCreateInput: SessionCreateInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<SessionsResponse>>;
  public sessionsSessionIdPatch(
    sessionId: string,
    sessionCreateInput: SessionCreateInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<SessionsResponse>>;
  public sessionsSessionIdPatch(
    sessionId: string,
    sessionCreateInput: SessionCreateInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (sessionId === null || sessionId === undefined) {
      throw new Error(
        "Required parameter sessionId was null or undefined when calling sessionsSessionIdPatch."
      );
    }
    if (sessionCreateInput === null || sessionCreateInput === undefined) {
      throw new Error(
        "Required parameter sessionCreateInput was null or undefined when calling sessionsSessionIdPatch."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.patch<SessionsResponse>(
      `${this.basePath}/sessions/${encodeURIComponent(String(sessionId))}`,
      sessionCreateInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * Send signup email
   * @param signupPostInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public signupEmailPost(
    signupPostInput: SignupPostInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<SuccessResponse>;
  public signupEmailPost(
    signupPostInput: SignupPostInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<SuccessResponse>>;
  public signupEmailPost(
    signupPostInput: SignupPostInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<SuccessResponse>>;
  public signupEmailPost(
    signupPostInput: SignupPostInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (signupPostInput === null || signupPostInput === undefined) {
      throw new Error(
        "Required parameter signupPostInput was null or undefined when calling signupEmailPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<SuccessResponse>(
      `${this.basePath}/signup/email`,
      signupPostInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * Send signup form
   * @param signupFormInput
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public signupRegistrationPost(
    signupFormInput: SignupFormInput,
    observe?: "body",
    reportProgress?: boolean
  ): Observable<ApiKeyResponse>;
  public signupRegistrationPost(
    signupFormInput: SignupFormInput,
    observe?: "response",
    reportProgress?: boolean
  ): Observable<HttpResponse<ApiKeyResponse>>;
  public signupRegistrationPost(
    signupFormInput: SignupFormInput,
    observe?: "events",
    reportProgress?: boolean
  ): Observable<HttpEvent<ApiKeyResponse>>;
  public signupRegistrationPost(
    signupFormInput: SignupFormInput,
    observe: any = "body",
    reportProgress: boolean = false
  ): Observable<any> {
    if (signupFormInput === null || signupFormInput === undefined) {
      throw new Error(
        "Required parameter signupFormInput was null or undefined when calling signupRegistrationPost."
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ["application/json"];
    let httpHeaderAcceptSelected:
      | string
      | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set("Accept", httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ["application/json"];
    let httpContentTypeSelected:
      | string
      | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set("Content-Type", httpContentTypeSelected);
    }

    return this.httpClient.post<ApiKeyResponse>(
      `${this.basePath}/signup/registration`,
      signupFormInput,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }
}

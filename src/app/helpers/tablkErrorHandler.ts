import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class TablkErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log(error);
  }
}

import { Injectable } from "@angular/core";
import { Dispatcher } from "app/walts";

import { AppState } from "./app.store";

@Injectable()
export class AppDispatcher extends Dispatcher<AppState> {
  // noop
}

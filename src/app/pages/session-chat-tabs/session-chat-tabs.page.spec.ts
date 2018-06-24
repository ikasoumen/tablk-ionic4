import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SessionChatTabsPage } from "./session-chat-tabs.page";

describe("SessionChatTabsPage", () => {
  let component: SessionChatTabsPage;
  let fixture: ComponentFixture<SessionChatTabsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SessionChatTabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionChatTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

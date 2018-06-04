import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JoinedSessionsPage } from "./joinedSessions.page";

describe("JoinedSessionsPage", () => {
  let component: JoinedSessionsPage;
  let fixture: ComponentFixture<JoinedSessionsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [JoinedSessionsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedSessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

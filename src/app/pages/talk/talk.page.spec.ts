import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TalkPage } from "./talk.page";

describe("TalkPage", () => {
  let component: TalkPage;
  let fixture: ComponentFixture<TalkPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TalkPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

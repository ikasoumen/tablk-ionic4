import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NoLoginPage } from "./noLogin.page";

describe("noLoginPage", () => {
  let component: noLoginPage;
  let fixture: ComponentFixture<noLoginPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [noLoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(noLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

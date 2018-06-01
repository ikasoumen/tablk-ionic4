import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NoLoginPage } from "./noLogin.page";

describe("NoLoginPage", () => {
  let component: NoLoginPage;
  let fixture: ComponentFixture<NoLoginPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [NoLoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

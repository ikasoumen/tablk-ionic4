import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MemberMiniListComponent } from "./member-mini-list.component";

describe("MemberMiniListComponent", () => {
  let component: MemberMiniListComponent;
  let fixture: ComponentFixture<MemberMiniListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberMiniListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMiniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuMemberListComponent } from "./menu-member-list.component";

describe("MenuMemberListComponent", () => {
  let component: MenuMemberListComponent;
  let fixture: ComponentFixture<MenuMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMemberListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuMemberListItemComponent } from "./menu-member-list-item.component";

describe("MenuMemberListItemComponent", () => {
  let component: MenuMemberListItemComponent;
  let fixture: ComponentFixture<MenuMemberListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMemberListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMemberListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

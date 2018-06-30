import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CharacterAvatarComponent } from "./character-avatar.component";

describe("CharacterAvatarComponent", () => {
  let component: CharacterAvatarComponent;
  let fixture: ComponentFixture<CharacterAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterAvatarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

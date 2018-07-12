import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChatMemberListItemComponent } from "./chat-member-list-item.component";

describe("ChatMemberListItemComponent", () => {
  let component: ChatMemberListItemComponent;
  let fixture: ComponentFixture<ChatMemberListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatMemberListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMemberListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

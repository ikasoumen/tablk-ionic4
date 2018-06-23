import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ScratchTextComponent } from "./scratch-text.component";

describe("ScratchTextComponent", () => {
  let component: ScratchTextComponent;
  let fixture: ComponentFixture<ScratchTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScratchTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

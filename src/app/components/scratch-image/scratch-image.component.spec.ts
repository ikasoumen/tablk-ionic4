import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ScratchImageComponent } from "./scratch-image.component";

describe("ScratchImageComponent", () => {
  let component: ScratchImageComponent;
  let fixture: ComponentFixture<ScratchImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScratchImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

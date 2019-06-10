import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { MaterialModule } from "src/app/material/material.module";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have founding year`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.foundingYear).not.toBeNull();
  });

  it(`should have author`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.author).not.toBeNull();
  });
});

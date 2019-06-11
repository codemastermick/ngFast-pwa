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

  it(`should have datestamp`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.datestamp).not.toBeNull();
  });

  it(`should have valid datestamp`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.datestamp.length > 0).toBeTruthy();
  });

  it(`should have currentYear`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.currentYear).not.toBeNull();
  });

  it(`getRange should not be null`, () => {
    const app = fixture.debugElement.componentInstance;
    spyOn(app, "getRange");
    fixture.detectChanges();
    expect(app.getRange()).not.toBeNull();
  });

  it(`getRange should return single year`, () => {
    const app = fixture.debugElement.componentInstance;
    spyOn(app, "getRange");
    fixture.detectChanges();
    expect(app.datestamp).toBe("2019");
  });

  it(`getRange should return a range`, () => {
    const app = fixture.debugElement.componentInstance;
    app.foundingYear = 2018;
    app.datestamp = app.getRange();
    fixture.detectChanges();
    expect(app.datestamp).toBe("2018-2019");
  });
});

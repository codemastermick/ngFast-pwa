import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NavigationModule } from "./navigation/navigation.module";
import { ThemeService } from "./shared/theme.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavigationModule],
      declarations: [AppComponent],
      providers: [ThemeService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngFAST'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("ngFAST");
  });

  it(`should have founding year`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.foundingYear).not.toBeNull();
  });

  it(`should have author`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.author).not.toBeNull();
  });

  it(`should switch themes`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const state = fixture.componentInstance.isDarkTheme;
    fixture.detectChanges();
    expect(state).not.toEqual(fixture.componentInstance.isDarkTheme);
  });
});

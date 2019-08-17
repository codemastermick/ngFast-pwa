import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { MaterialModule } from "src/app/material/material.module";
import { By } from "@angular/platform-browser";
import { ThemeService } from "src/app/shared/theme.service";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [HeaderComponent],
      providers: [ThemeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have title`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).not.toBeNull();
  });

  it("should render title in a mat-toolbar-row tag", () => {
    fixture.detectChanges();
    const toolbar = fixture.debugElement.query(By.css("mat-toolbar"));
    const selectedElement = toolbar.query(By.css("mat-toolbar-row"));
    expect(selectedElement.nativeElement.textContent).toContain("ngFAST");
  });

  it("should switch themes", () => {
    const spy = spyOn(component, "toggleDarkTheme");
    component.toggleDarkTheme(true);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});

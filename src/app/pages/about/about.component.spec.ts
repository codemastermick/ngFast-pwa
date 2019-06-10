import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AboutComponent } from "./about.component";
import { MaterialModule } from "src/app/material/material.module";
import { By } from "@angular/platform-browser";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [AboutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a mat-card-title tag", () => {
    fixture.detectChanges();
    const toolbar = fixture.debugElement.query(By.css("mat-card"));
    const titleElement = toolbar.query(By.css("mat-card-header"));
    const selectedElement = titleElement.query(By.css("mat-card-title"));
    expect(selectedElement.nativeElement.textContent).toContain("About ngFAST");
  });

  it("should have content in a mat-card-content tag", () => {
    fixture.detectChanges();
    const toolbar = fixture.debugElement.query(By.css("mat-card"));
    const selectedElement = toolbar.query(By.css("mat-card-content"));
    expect(selectedElement.nativeElement.textContent).not.toBeNull();
  });
});

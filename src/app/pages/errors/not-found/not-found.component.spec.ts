import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NotFoundComponent } from "./not-found.component";
import { MaterialModule } from "src/app/material/material.module";
import { NotFoundRoutingModule } from "./not-found-routing,module";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";

describe("NotFoundComponent", () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NotFoundRoutingModule, MaterialModule],
      declarations: [NotFoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have error message`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.errorMsg).not.toBeNull();
  });

  it("should render 404 in a mat-card-title tag", () => {
    fixture.detectChanges();
    const cardElement = fixture.debugElement.query(By.css("mat-card"));
    const headElement = cardElement.query(By.css("mat-card-header"));
    const selectedElement = headElement.query(By.css("mat-card-title"));
    expect(selectedElement.nativeElement.textContent).toContain("404");
  });

  it("should have a mat-card-title tag", () => {
    fixture.detectChanges();
    const toolbar = fixture.debugElement.query(By.css("mat-card-header"));
    const selectedElement = toolbar.query(By.css("mat-card-title"));
    expect(selectedElement.nativeElement).not.toBeNull();
  });

  it("should have content in a mat-card-content tag", () => {
    fixture.detectChanges();
    const toolbar = fixture.debugElement.query(By.css("mat-card"));
    const selectedElement = toolbar.query(By.css("mat-card-content"));
    expect(selectedElement.nativeElement.textContent).not.toBeNull();
  });
});

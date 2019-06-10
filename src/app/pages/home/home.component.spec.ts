import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "src/app/material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { By } from "@angular/platform-browser";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeRoutingModule, MaterialModule],
      declarations: [HomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
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

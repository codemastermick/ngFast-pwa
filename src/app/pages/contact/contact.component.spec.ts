import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ContactComponent } from "./contact.component";
import { MaterialModule } from "src/app/material/material.module";
import { By } from "@angular/platform-browser";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ContactComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
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

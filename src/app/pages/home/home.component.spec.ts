import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "src/app/material/material.module";
import { HomeRoutingModule } from "./home-routing.module";

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
});

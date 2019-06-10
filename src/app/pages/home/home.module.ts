import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
  declarations: [HomeComponent]
})
export class HomeModule {}

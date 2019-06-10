import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [RouterModule, MaterialModule],
  declarations : [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class NavigationModule {}

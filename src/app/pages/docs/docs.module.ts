import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocsComponent } from "./docs.component";
import { DocsRoutingModule } from "./docs-routing.module";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  imports: [CommonModule, DocsRoutingModule, MaterialModule],
  declarations: [DocsComponent]
})
export class DocsModule {}

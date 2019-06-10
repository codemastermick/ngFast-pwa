import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact-routing.module";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  imports: [CommonModule, ContactRoutingModule, MaterialModule],
  declarations: [ContactComponent]
})
export class ContactModule {}

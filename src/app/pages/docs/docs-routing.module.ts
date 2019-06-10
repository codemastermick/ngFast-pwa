import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DocsComponent } from "./docs.component";

const routes: Routes = [{ path: "", component: DocsComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DocsRoutingModule {}

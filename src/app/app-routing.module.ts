import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { paths } from "./app-paths";
import { PathResolveService } from "./shared/path-resolve-service.guard";

const routes: Routes = [
  {
    path: paths.home,
    loadChildren: () =>
      import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: paths.about,
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutModule)
  },
  {
    path: paths.contact,
    loadChildren: () =>
      import("./pages/contact/contact.module").then(m => m.ContactModule)
  },
  {
    path: paths.docs,
    loadChildren: () =>
      import("./pages/docs/docs.module").then(m => m.DocsModule)
  },
  {
    path: "404",
    loadChildren: () =>
      import("../app/pages/errors/not-found/not-found.module").then(
        m => m.NotFoundModule
      )
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Fallback to home if no route is found
  {
    path: "**",
    resolve: { path: PathResolveService },
    loadChildren: () =>
      import("../app/pages/errors/not-found/not-found.module").then(
        m => m.NotFoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

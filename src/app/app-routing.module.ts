import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/pages/main/main.component";
import { CatalogComponent } from "./components/pages/catalog/catalog.component";
import { TapeComponent } from "./components/pages/tape/tape.component";
import { PersonalCabinetComponent } from "./components/pages/personal-cabinet/personal-cabinet.component";
import { AutorizationComponent } from "./components/pages/autorization/autorization.component";
import { RegistrationComponent } from "./components/pages/registration/registration.component";
import { ReleaseComponent } from "./components/pages/release/release.component";
import { ReleaseViewComponent } from "./components/release-view/release-view.component";

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "catalog", component: CatalogComponent },
  { path: "tape", component: TapeComponent },
  { path: "personal-cabinet", component: PersonalCabinetComponent },
  { path: "autorization", component: AutorizationComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "release/:id", component: ReleaseComponent },
  { path: "releaseView/:id", component: ReleaseViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

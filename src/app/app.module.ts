import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { MainComponent } from "./components/pages/main/main.component";
import { RegistrationComponent } from "./components/pages/registration/registration.component";
import { AutorizationComponent } from "./components/pages/autorization/autorization.component";
import { CatalogComponent } from "./components/pages/catalog/catalog.component";
import { TapeComponent } from "./components/pages/tape/tape.component";
import { PersonalCabinetComponent } from "./components/pages/personal-cabinet/personal-cabinet.component";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSidenavModule, MatListModule } from "@angular/material";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { CatalogService } from "./services/page/catalog/catalog.service";
import { TapeService } from "./services/page/tape/tape.service";
import { MainService } from "./services/page/main/main.service";
import { PersonalCabinetService } from "./services/page/personal-cabinet/personal-cabinet.service";
import { MatTabsModule } from "@angular/material/tabs";
import { GuardService } from "./services/guard/guard.service";
import { UserRoleService } from "./services/user_role/user-role.service";
import { JwtModule } from "@auth0/angular-jwt";
import { ReleaseComponent } from "./components/pages/release/release.component";
import { ReleaseService } from "./services/release/release.service";
import { FooterComponent } from "./components/footer/footer.component";
import { ReleaseViewComponent } from "./components/release-view/release-view.component";
import { Angular2ImageGalleryModule } from "angular2-image-gallery";
import { NgxImageGalleryModule } from "ngx-image-gallery";
import { KeysPipe } from "./keys.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { AvailableReleaseService } from "./services/available_release/available-release.service";
import { LinkService } from "./services/links/link.service";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    RegistrationComponent,
    AutorizationComponent,
    CatalogComponent,
    TapeComponent,
    PersonalCabinetComponent,
    ReleaseComponent,
    FooterComponent,
    ReleaseViewComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    Angular2ImageGalleryModule,
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    HttpClientModule,
    MatTabsModule,
    ReactiveFormsModule,
    NgxImageGalleryModule,
    MatButtonToggleModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"],
        blacklistedRoutes: ["localhost:4000/usersRoles/logIn"]
      }
    })
  ],
  providers: [
    CatalogService,
    TapeService,
    MainService,
    PersonalCabinetService,
    LinkService,
    UserRoleService,
    GuardService,
    ReleaseService,
    AvailableReleaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { MainComponent } from './components/pages/main/main.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { AutorizationComponent } from './components/pages/autorization/autorization.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { TapeComponent } from './components/pages/tape/tape.component';
import { PersonalCabinetComponent } from './components/pages/personal-cabinet/personal-cabinet.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSidenavModule,  MatListModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CatalogService } from './services/catalog/catalog.service';
import { TapeService } from './services/tape/tape.service';
import { MainService } from './services/main/main.service';
import { PersonalCabinetService } from './services/personal-cabinet/personal-cabinet.service';
import { RegistrationService } from './services/registration/registration.service';
import { AutorizationService } from './services/autorization/autorization.service';
import {MatTabsModule} from '@angular/material/tabs';

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
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [
    CatalogService,
    TapeService,
    MainService,
    PersonalCabinetService,
    RegistrationService,
    AutorizationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

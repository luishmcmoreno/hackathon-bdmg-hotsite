import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from '@pluritech/ng2-responsive-table';

// Libraries
import { DropImageModule } from '@pluritech/ng-drop-image';
import { ServerServiceModule } from '@pluritech/server-service';
import { AuthServiceModule } from '@pluritech/auth-service';
import { PaginationModule } from '@pluritech/pagination';
import { NgImagePreviewModule } from '@pluritech/ng-image-preview';
import { DialogServiceModule } from '@pluritech/dialog-service';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';

// Routing and guards
import { AppRoutingModule } from './app-routing.module';


// Providers
import { CalculateService } from './providers/calculate/calculate.service';

// Components
import { AppComponent } from './app.component';
import { SiteComponent } from './parts/site/site.component';
import { HomeComponent } from './pages/home/home.component';

import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SignuptimelineComponent } from './components/signuptimeline/signuptimeline.component';
import { OrganizationSearchboxComponent } from './components/organization-searchbox/organization-searchbox.component';
import { FooterComponent } from './parts/footer/footer.component';
import { MenuComponent } from './parts/menu/menu.component';
import { InternalComponent } from './pages/internal/internal.component';
import { InternalMenuComponent } from './parts/internal-menu/internal-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HomeComponent,
    SearchboxComponent,
    SignuptimelineComponent,
    OrganizationSearchboxComponent,
    FooterComponent,
    MenuComponent,
    InternalComponent,
    InternalMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServerServiceModule.forRoot(15000),
    AuthServiceModule.forRoot('MELHORES_LEILOES_KEY'),
    DialogServiceModule.forRoot(),
    DropImageModule,
    HttpModule,
    FormsModule,
    PaginationModule,
    ReactiveFormsModule,
    NgxMaskModule,
    CurrencyMaskModule,
    Ng2TableModule,
    NgImagePreviewModule
  ],
  providers: [
    CalculateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

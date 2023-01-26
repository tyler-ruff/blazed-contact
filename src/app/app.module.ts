import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import { AppService } from './shared/app.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AppContactComponent } from './pages/app-contact/app.component';
import { WebsiteComponent } from './pages/website/website.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { SuccessComponent } from './pages/success/success.component';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// Widgets

// Utilities
import { LazyLoadDirective } from './utils/lazyload.directive';
import { PhoneFormatPipe } from './utils/format-phone.pipe';
import { RelativeTimePipe } from './utils/relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AppContactComponent,
    WebsiteComponent,
    UnknownComponent,
    SuccessComponent,
    LazyLoadDirective,
    PhoneFormatPipe,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

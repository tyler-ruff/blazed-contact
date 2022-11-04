import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './pages/app-contact/app.component';
import { HomeComponent } from './pages/home/home.component';
import { SuccessComponent } from './pages/success/success.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { WebsiteComponent } from './pages/website/website.component';

const routes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: 'website', component: WebsiteComponent },
  { path: 'app', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

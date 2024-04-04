import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellModule } from './shell/shell.module';
import { ErrorPageComponent } from './shell/error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shell',
    component: ShellComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

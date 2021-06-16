import { ActivateGuard } from './guards/activate.guard';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import { Directive1Directive } from './directives/directive1.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Directive2Directive } from './directives/directive2.directive';
import { Com1Component } from './components/home/com1/com1.component';
import { Com2Component } from './components/home/com2/com2.component';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { ValidateDirective } from './directives/validate.directive';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './shareds/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    Directive1Directive,
    Directive2Directive,
    Pipe1Pipe,
    Pipe2Pipe,
    ValidateDirective,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    ActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

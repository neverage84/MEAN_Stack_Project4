import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemUnitComponent } from './system-unit/system-unit.component';
import { PeripheralsComponent } from './peripherals/peripherals.component';
import { CallComponent } from './call/call.component';
import { NetworkComponent } from './network/network.component';
import { SystemTimeComponent } from './system-time/system-time.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'display', component: DisplayComponent},
  {path: ' ', redirectTo:  'dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SystemUnitComponent,
    PeripheralsComponent,
    CallComponent,
    NetworkComponent,
    SystemTimeComponent,
    ContactInfoComponent,
    DashboardComponent,
    DisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Add line below:
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

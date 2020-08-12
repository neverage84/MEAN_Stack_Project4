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


@NgModule({
  declarations: [
    AppComponent,
    SystemUnitComponent,
    PeripheralsComponent,
    CallComponent,
    NetworkComponent,
    SystemTimeComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Add line below:
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

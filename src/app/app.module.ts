import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { RomsComponent } from './roms/roms.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ArchiveComponent } from './archive/archive.component';
import {ChambreService} from "./services/chambre.service";
import {HttpClientModule , HttpClient} from "@angular/common/http";
import {ClientService} from "./services/client.service";
import {ReservationService} from "./services/reservation.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpComponent } from './pop-up/pop-up.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    RomsComponent,
    ReservationComponent,
    ArchiveComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    ChambreService,
    ClientService,
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





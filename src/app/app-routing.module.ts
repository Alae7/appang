import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RomsComponent} from "./roms/roms.component";
import {ClientComponent} from "./client/client.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {ArchiveComponent} from "./archive/archive.component";

const routes: Routes = [

  {
    path:'',title:'Home page',component:HomeComponent,
  },
  {
    path:'home',title:'Home page',component:HomeComponent,
  },
  {
    path:'roms',title:'Rom page',component:RomsComponent,
  },
  {
    path:'client',title:'Client page',component:ClientComponent,
  },
  {
    path:'reservation',title:'Reservation page',component:ReservationComponent,
  },
  {
    path:'archive',title:'Archive page',component:ArchiveComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

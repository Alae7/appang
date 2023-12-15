import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../services/reservation.service";
import {Chambre} from "../../../model/Chambre.model";
import {ChambreService} from "../services/chambre.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Client} from "../../../model/Client.model";
import {ClientService} from "../services/client.service";
import {Reservation} from "../../../model/Reservation.model";

interface MonObjetJSON {
  nom: string;
  prenom: number;
  cin: string;
}
interface MonduxemeObjetJSON {
  idClient:number,
  idChambre:number,
  date_debut:string,
  nbr_jours:number
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  t_chambre : Array<Chambre> =[];
  client!:Client;
  tn:Array<Chambre> =new Array<Chambre>(this.t_chambre.length);
  public reservationForm!:FormGroup;
  public clientser!:Client;
  public clientForm!:FormGroup;


    constructor(private arc:ReservationService,private rom:ChambreService,private fb:FormBuilder,private cls:ClientService) {}
    ngOnInit(): void {
      this.getroms()
      this.reservationForm=this.fb.group({
        date_debut: this.fb.control(''),
        nbr_jours: this.fb.control(''),
        idChambre: this.fb.control(''),
      })
      this.clientForm=this.fb.group({
        nom: this.fb.control(''),
        prenom: this.fb.control(''),
        cin: this.fb.control(''),
      })

    }
    getroms() {
      this.rom.getallchambre().subscribe({
        next: value => {
          this.t_chambre = value;
          let i=0
          for (let c of this.t_chambre){
            if(c.reserved==false){
              this.tn.push(c);
              i++;
            }
          }
        },
        error:err => {console.log(err)}
      })
    }
  saveclient(cl:any):any{
      return this.cls.saveclient(cl).subscribe({
        next:value => {alert("zabi ila khdam")},error:err => {console.log(err)}
      })
  }
    savereservation(){
      let client:Client;
      let objetclient:MonObjetJSON=this.clientForm.value;
      let objetreservation:MonduxemeObjetJSON=this.reservationForm.value;
      client=this.saveclient(objetclient);
      objetreservation.idClient=client.id;
      return this.arc.savereservation(objetreservation).subscribe({next:value => {JSON.stringify("vous avez ajouter avec succes")},error:err => {console.log(err)} })

    }

}

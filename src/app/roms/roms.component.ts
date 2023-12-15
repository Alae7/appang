import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../model/Chambre.model";
import {ChambreService} from "../services/chambre.service";

@Component({
  selector: 'app-roms',
  templateUrl: './roms.component.html',
  styleUrl: './roms.component.css'
})
export class RomsComponent implements OnInit{
  t_chambre : Array<Chambre> =[];
  tr:Array<Chambre> =new Array<Chambre>(this.t_chambre.length);
  tn:Array<Chambre> =new Array<Chambre>(this.t_chambre.length);

  constructor(private cbs:ChambreService) {


  }

  ngOnInit(): void {
        this.getchambre()
    }

  getchambre(){
    this.cbs.getallchambre().subscribe(
      {
        next:value => {this.t_chambre=value;
          let i =0;
          let j=0;
          for (let c of this.t_chambre){
            if(c.reserved==true){
              this.tr.push(c);
              i++;
            }
            else {
              this.tn.push(c);
              j++;
            }
          }},
        error:err => {console.log(err)}
      }
    )
  }
}

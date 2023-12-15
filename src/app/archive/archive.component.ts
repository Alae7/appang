import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../../../model/Reservation.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent implements OnInit{
  //t_resrvation$! :Observable<Array<Reservation>>;
  t_reservation : Array<Reservation>=[];
    constructor(private arc:ReservationService) {
    }
    ngOnInit(): void {
      this.getreservation()
    }

    getreservation(){

      //this.t_resrvation$ = this.arc.getallreservation();
      this.arc.getallreservation().subscribe(
        {next:value => {this.t_reservation=value},error:err => {console.log(err)}}
      )
    }
  public delete(re: Reservation) {
    if (confirm("Are you sure?")) {
      this.arc.deletereservation(re)
        .subscribe({
          next: value => this.t_reservation = this.t_reservation.filter(r => r.id != re.id),
          error: err => console.error('Delete Error in Component:', err)
        });
    }
  }

}

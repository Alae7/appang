import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../../../model/Reservation.model";
import {ClientService} from "./client.service";
import {catchError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient,private cl:ClientService) {}

  public getallreservation(){
    return this.http.get<Array<Reservation>>("http://localhost:8888/RESERVATION-SERVICE/api/reservations");
  }

  public deletereservation(re: Reservation) {
    return this.http.delete<any>(`http://localhost:8888/RESERVATION-SERVICE/api/reservations/${re.id}`)
      .pipe(
        catchError(error => {
          console.error('Delete Error:', error);
          throw error;
        })
      );
  }

  public savereservation(re: any){
    return this.http.post<Reservation>("http://localhost:8888/RESERVATION-SERVICE/api/reservations",re);
  }


}

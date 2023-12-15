import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chambre} from "../../../model/Chambre.model";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http: HttpClient) { }

  public getallchambre(){
    return this.http.get<Array<Chambre>>("http://localhost:8888/CHAMBRE-SERVICE/api/Chambres");
  }

}

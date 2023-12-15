import { Injectable } from '@angular/core';
import {Chambre} from "../../../model/Chambre.model";
import {HttpClient} from "@angular/common/http";
import {Client} from "../../../model/Client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  public getallclient(){
    return this.http.get<Array<Client>>("http://localhost:8888/CLIENT-SERVICE/api/clients");
  }
  public updateclient(cl:Client){
    this.http.put<Client>(`http://localhost:8888/CLIENT-SERVICE/api/clients/${cl.id}`,{})
  }

  public deleteclient(cl:Client){
    this.http.delete<any>(`http://localhost:8888/CLIENT-SERVICE/api/clients/${cl.id}`)
  }
  public saveclient(cl:any){
    return this.http.post<Client>("http://localhost:8888/CLIENT-SERVICE/api/clients",cl);
  }

}

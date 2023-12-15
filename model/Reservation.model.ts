import {Client} from "./Client.model";
import {Chambre} from "./Chambre.model";

export interface Reservation{
  id:number,
  client:Client,
  chambre:Chambre,
  date_debut:string,
  nbr_jours:number

}

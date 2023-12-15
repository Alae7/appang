import {Component, OnInit} from '@angular/core';
import {Client} from "../../../model/Client.model";
import {ClientService} from "../services/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  t_client : Array<Client>=[];

  constructor(private cls:ClientService) {
  }
    ngOnInit(): void {
        this.getclient();
    }

    getclient(){
    this.cls.getallclient().subscribe(
      {
        next:value => {this.t_client=value},
        error:err => {console.log(err)}
      }
    )

    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.scss']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Porto Alegra", state: "RS"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "SP"}
 ]

  clients = [];
  constructor() { }

  ngOnInit() {
  }

  save(){
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        age: this.age,
        phone: this.phone
      }
    );
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name="";
    this.address="";
    this.city="";
    this.phone="";
    this.age=0;
  }

  delete(i: number) {
      this.clients.splice(i, 1);
  }
}

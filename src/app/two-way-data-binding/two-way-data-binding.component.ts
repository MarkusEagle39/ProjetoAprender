import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "123";
  name2: string = "456";

  client = {
    firstName: "john",
    lastName: "Mack",
    address: "route",
    age: 0,
  }
  constructor() { }

  ngOnInit() {
  }

}
